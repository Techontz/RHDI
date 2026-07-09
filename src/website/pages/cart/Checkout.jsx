import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Plus, Edit2, Trash2, X, Loader2, 
  ShoppingBag, BookOpen, Building2, Phone, 
  ArrowLeft, CreditCard, CheckCircle, AlertCircle,
  RefreshCw, Truck, DollarSign, Shield
} from 'lucide-react';
import { useCart } from './context/CartContext';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import PayPalWrapper from '../paypol/PayPalWrapper';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  // Address form state
  const [formData, setFormData] = useState({
    type: 'shipping',
    full_name: '',
    phone_number: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'Tanzania',
    is_default: false
  });

  // Helper function to get auth headers with token from cookies
  const getAuthHeaders = () => {
    const token = Cookies.get('authToken');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  // Fetch addresses
  const fetchAddresses = async () => {
    try {
      setLoading(true);
      
      const token = Cookies.get('authToken');
      if (!token) {
        toast.error('Please login to continue');
        navigate('/login');
        return;
      }
      
      const response = await fetch('http://172.104.135.141:8000/orders/me/addresses', {
        headers: getAuthHeaders()
      });
      
      if (response.status === 401) {
        toast.error('Session expired. Please login again.');
        Cookies.remove('authToken');
        navigate('/login');
        return;
      }
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setAddresses(result.data || []);
        const defaultAddr = result.data?.find(addr => addr.is_default);
        if (defaultAddr) {
          setSelectedAddress(defaultAddr);
        } else if (result.data && result.data.length > 0) {
          setSelectedAddress(result.data[0]);
        }
      } else {
        toast.error(result.message || 'Failed to load addresses');
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
      toast.error('Network error while loading addresses');
      setAddresses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (!token) {
      toast.error('Please login to checkout');
      navigate('/login');
      return;
    }
    
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      navigate('/books');
      return;
    }
    
    fetchAddresses();
  }, [cartItems.length, navigate]);

  // Create or update address
  const handleSubmitAddress = async (e) => {
    e.preventDefault();
    
    const token = Cookies.get('authToken');
    if (!token) {
      toast.error('Please login again');
      navigate('/login');
      return;
    }
    
    const isEditing = !!editingAddress;
    const url = isEditing 
      ? `http://172.104.135.141:8000/orders/addresses/${editingAddress.id}`
      : 'http://172.104.135.141:8000/orders/addresses';
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: getAuthHeaders(),
        body: JSON.stringify(formData)
      });
      
      if (response.status === 401) {
        toast.error('Session expired. Please login again.');
        Cookies.remove('authToken');
        navigate('/login');
        return;
      }
      
      const result = await response.json();
      
      if (result.success) {
        toast.success(isEditing ? 'Address updated successfully' : 'Address added successfully');
        fetchAddresses();
        resetAddressForm();
      } else {
        toast.error(result.message || 'Failed to save address');
      }
    } catch (error) {
      console.error('Error saving address:', error);
      toast.error('Network error while saving address');
    }
  };

  // Delete address
  const handleDeleteAddress = async (addressId) => {
    if (!window.confirm('Are you sure you want to delete this address?')) return;
    
    const token = Cookies.get('authToken');
    if (!token) {
      toast.error('Please login again');
      navigate('/login');
      return;
    }
    
    try {
      const response = await fetch(`http://172.104.135.141:8000/orders/addresses/${addressId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      
      if (response.status === 401) {
        toast.error('Session expired. Please login again.');
        Cookies.remove('authToken');
        navigate('/login');
        return;
      }
      
      const result = await response.json();
      
      if (result.success) {
        toast.success('Address deleted successfully');
        if (selectedAddress?.id === addressId) {
          setSelectedAddress(null);
        }
        fetchAddresses();
      } else {
        toast.error(result.message || 'Failed to delete address');
      }
    } catch (error) {
      console.error('Error deleting address:', error);
      toast.error('Network error while deleting address');
    }
  };

  // Set address as default
  const handleSetDefault = async (addressId) => {
    const token = Cookies.get('authToken');
    if (!token) {
      toast.error('Please login again');
      navigate('/login');
      return;
    }
    
    try {
      const response = await fetch(`http://172.104.135.141:8000/orders/addresses/${addressId}/default`, {
        method: 'PATCH',
        headers: getAuthHeaders()
      });
      
      if (response.status === 401) {
        toast.error('Session expired. Please login again.');
        Cookies.remove('authToken');
        navigate('/login');
        return;
      }
      
      const result = await response.json();
      
      if (result.success) {
        toast.success('Default address updated');
        fetchAddresses();
      } else {
        toast.error(result.message || 'Failed to set default address');
      }
    } catch (error) {
      console.error('Error setting default address:', error);
      toast.error('Network error');
    }
  };

  // Edit address
  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setFormData({
      type: address.type,
      full_name: address.full_name,
      phone_number: address.phone_number,
      address_line1: address.address_line1,
      address_line2: address.address_line2 || '',
      city: address.city,
      state: address.state,
      postal_code: address.postal_code,
      country: address.country,
      is_default: address.is_default
    });
    setShowAddressForm(true);
  };

  // Reset address form
  const resetAddressForm = () => {
    setShowAddressForm(false);
    setEditingAddress(null);
    setFormData({
      type: 'shipping',
      full_name: '',
      phone_number: '',
      address_line1: '',
      address_line2: '',
      city: '',
      state: '',
      postal_code: '',
      country: 'Tanzania',
      is_default: false
    });
  };

  // Create order in backend after PayPal success
  const createOrderInBackend = async (paymentDetails = null) => {
    if (!selectedAddress) {
      toast.error('Please select a shipping address');
      return null;
    }
    
    const orderData = {
      address_id: selectedAddress.id,
      type: 'purchase',
      payment_method: 'paypal',
      payment_status: paymentDetails ? 'completed' : 'pending',
      currency: 'USD',
      items: cartItems.map(item => ({
        book_id: item.book_id,
        quantity: item.quantity
      }))
    };

    // Add PayPal transaction details
    if (paymentDetails) {
      orderData.paypal_transaction_id = paymentDetails.id;
      orderData.paypal_payer_email = paymentDetails.payer?.email_address;
    }

    try {
      const response = await fetch('http://172.104.135.141:8000/orders/orders', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(orderData)
      });
      
      if (response.status === 401) {
        toast.error('Session expired. Please login again.');
        Cookies.remove('authToken');
        navigate('/login');
        return null;
      }
      
      const result = await response.json();
      
      if (result.success) {
        return result;
      } else {
        toast.error(result.message || 'Failed to place order');
        return null;
      }
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error('Network error while placing order');
      return null;
    }
  };

  // Handle PayPal payment success
  const handlePayPalSuccess = async (details) => {
    setSubmitting(true);
    console.log('PayPal payment details:', details);
    
    const result = await createOrderInBackend(details);
    
    if (result) {
      setMessage({ type: 'success', text: 'Payment successful! Order placed successfully!' });
      toast.success('Payment successful! Order placed successfully!');
      clearCart();
      setTimeout(() => {
        navigate(`/order-success/${result.data.order.id}`);
      }, 1500);
    }
    setSubmitting(false);
  };

  // Handle PayPal error
  const handlePayPalError = (error) => {
    console.error('PayPal Error:', error);
    setMessage({ type: 'error', text: 'Payment failed. Please try again.' });
    toast.error('Payment failed. Please try again.');
    setSubmitting(false);
  };

  // Handle PayPal cancel
  const handlePayPalCancel = () => {
    setMessage({ type: 'info', text: 'Payment cancelled. You can try again.' });
    toast.info('Payment cancelled. You can try again.');
    setSubmitting(false);
  };

  const totalPrice = getTotalPrice();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-purple-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading checkout...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Modern Header Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pt-16 pb-16 overflow-hidden border-b border-gray-700">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg">
                <ShoppingBag className="w-4 h-4 inline mr-2" />
                Checkout
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              Complete Your Order
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              Review your items and proceed to payment
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="h-12"></div>

        {/* Back Button and Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800 rounded-xl shadow-lg border border-gray-700 p-4 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <button
              onClick={() => navigate('/cart')}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Back to Cart</span>
            </button>
            
            <div className="flex gap-3">
              <button
                onClick={() => {
                  fetchAddresses();
                  setMessage({ type: 'success', text: 'Addresses refreshed!' });
                  setTimeout(() => setMessage({ type: '', text: '' }), 3000);
                }}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors flex items-center space-x-2 text-white"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Message Display */}
        <AnimatePresence>
          {message.text && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                message.type === 'success' ? 'bg-green-900/50 text-green-300 border border-green-700' :
                message.type === 'error' ? 'bg-red-900/50 text-red-300 border border-red-700' :
                'bg-blue-900/50 text-blue-300 border border-blue-700'
              }`}
            >
              {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> :
               message.type === 'error' ? <AlertCircle className="w-5 h-5" /> :
               <AlertCircle className="w-5 h-5" />}
              <span>{message.text}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Address and Payment */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-white" />
                    <h2 className="text-xl font-semibold text-white">Shipping Address</h2>
                  </div>
                  <button
                    onClick={() => setShowAddressForm(true)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm text-white"
                  >
                    <Plus className="w-4 h-4" />
                    Add New Address
                  </button>
                </div>
              </div>

              <div className="p-6">
                {addresses.length === 0 ? (
                  <div className="text-center py-8">
                    <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-400">No addresses found</p>
                    <button
                      onClick={() => setShowAddressForm(true)}
                      className="mt-3 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Add your first address
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {addresses.map((address) => (
                      <div
                        key={address.id}
                        className={`border rounded-xl p-4 cursor-pointer transition-all ${
                          selectedAddress?.id === address.id
                            ? 'border-purple-500 bg-purple-900/20'
                            : 'border-gray-700 hover:border-purple-500/50 bg-slate-900/50'
                        }`}
                        onClick={() => setSelectedAddress(address)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <input
                                type="radio"
                                checked={selectedAddress?.id === address.id}
                                onChange={() => setSelectedAddress(address)}
                                className="w-4 h-4 text-purple-600"
                                onClick={(e) => e.stopPropagation()}
                              />
                              <span className="font-semibold text-white">{address.full_name}</span>
                              {address.is_default && (
                                <span className="text-xs bg-purple-900 text-purple-300 px-2 py-0.5 rounded-full">
                                  Default
                                </span>
                              )}
                            </div>
                            <div className="ml-6 space-y-1 text-sm text-gray-300">
                              <p>{address.address_line1}</p>
                              {address.address_line2 && <p>{address.address_line2}</p>}
                              <p>{address.city}, {address.state} {address.postal_code}</p>
                              <p>{address.country}</p>
                              <p className="flex items-center gap-2 mt-2">
                                <Phone className="w-3 h-3" />
                                {address.phone_number}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditAddress(address);
                              }}
                              className="p-1 text-blue-400 hover:bg-blue-900/50 rounded transition-colors"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteAddress(address.id);
                              }}
                              className="p-1 text-red-400 hover:bg-red-900/50 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            {!address.is_default && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSetDefault(address.id);
                                }}
                                className="p-1 text-gray-400 hover:bg-gray-700 rounded text-xs"
                              >
                                Set Default
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Payment Section - With PayPal Buttons Container */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-white" />
                  <h2 className="text-xl font-semibold text-white">Payment Method</h2>
                </div>
              </div>
              <div className="p-6">
                {!selectedAddress ? (
                  <div className="text-center py-8">
                    <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                    <p className="text-yellow-400">Please select a shipping address first</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Info Container with Text */}
                    <div className="p-5 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-purple-600/20 rounded-lg">
                          <Building2 className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">PayPal Checkout</h3>
                          <p className="text-sm text-gray-400">Secure payment via PayPal</p>
                        </div>
                      </div>
                      <div className="ml-11">
                        <p className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                          <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          You will be redirected to PayPal to complete your payment securely.
                        </p>
                        <p className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          No account required - pay with credit/debit card via PayPal
                        </p>
                      </div>
                    </div>
                    
                    {/* PayPal Buttons Container */}
                    <div className="flex justify-center p-6 bg-slate-900/50 rounded-xl border border-gray-700">
                      <div className="w-full max-w-md">
                        <PayPalWrapper
                          totalAmount={totalPrice}
                          onSuccess={handlePayPalSuccess}
                          onError={handlePayPalError}
                          onCancel={handlePayPalCancel}
                        />
                      </div>
                    </div>

                    {/* Security Footer */}
                    <div className="text-center pt-2">
                      <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                        <Shield className="w-3.5 h-3.5" />
                        Protected by PayPal Seller Protection
                      </p>
                    </div>
                  </div>
                )}
                
                {submitting && (
                  <div className="mt-6 text-center">
                    <Loader2 className="w-6 h-6 animate-spin text-purple-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Processing payment...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Order Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-800 rounded-xl shadow-lg border border-gray-700 sticky top-24">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-white" />
                  <h2 className="text-xl font-semibold text-white">Order Summary</h2>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Cart Items */}
                <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                  {cartItems.map((item) => (
                    <div key={item.book_id} className="flex gap-3 p-2 bg-slate-900/50 rounded-lg">
                      <div className="w-12 h-16 bg-slate-700 rounded overflow-hidden flex-shrink-0">
                        {item.cover ? (
                          <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-gray-500" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white line-clamp-2">{item.title}</p>
                        <p className="text-xs text-gray-400 mt-1">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-purple-400 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal ({totalItems} items)</span>
                    <span className="font-medium text-white">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shipping</span>
                    <span className="font-medium text-green-400">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-700">
                    <span className="text-white">Total</span>
                    <span className="text-purple-400">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 text-sm">
                    <Truck className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300">Free delivery worldwide</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-2">
                    <CreditCard className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300">Secure payment via PayPal</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Address Form Modal - Dark Theme */}
      <AnimatePresence>
        {showAddressForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => resetAddressForm()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-slate-800 p-6 border-b border-gray-700 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  {editingAddress ? 'Edit Address' : 'Add New Address'}
                </h2>
                <button
                  onClick={resetAddressForm}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmitAddress} className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone_number}
                      onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Address Line 1 *</label>
                  <input
                    type="text"
                    required
                    value={formData.address_line1}
                    onChange={(e) => setFormData({ ...formData, address_line1: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Address Line 2 (Optional)</label>
                  <input
                    type="text"
                    value={formData.address_line2}
                    onChange={(e) => setFormData({ ...formData, address_line2: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">State/Region *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Postal Code *</label>
                    <input
                      type="text"
                      required
                      value={formData.postal_code}
                      onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="is_default"
                    checked={formData.is_default}
                    onChange={(e) => setFormData({ ...formData, is_default: e.target.checked })}
                    className="w-4 h-4 text-purple-600 rounded border-gray-600"
                  />
                  <label htmlFor="is_default" className="text-sm text-gray-300">
                    Set as default address
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={resetAddressForm}
                    className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    {editingAddress ? 'Update Address' : 'Save Address'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom animations and scrollbar styles */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Custom scrollbar for dark theme */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #7c3aed;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6d28d9;
        }
      `}</style>
    </div>
  );
};

export default Checkout;