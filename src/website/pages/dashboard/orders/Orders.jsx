import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import { 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  X,
  RefreshCw,
  ShoppingCart,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Package,
  TrendingUp,
  DollarSign,
  BookOpen,
  User,
  MapPin,
  CreditCard,
  Edit,
  Save,
  Zap,
  Info
} from 'lucide-react';

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [itemsPerPage] = useState(10);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [paginationMeta, setPaginationMeta] = useState({ current_page: 1, last_page: 1, total: 0 });
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateTarget, setUpdateTarget] = useState({ type: '', id: '', currentStatus: '' });
  const [selectedStatus, setSelectedStatus] = useState('');
  const [bookDetailsCache, setBookDetailsCache] = useState({});

  // Base API URL
  const API_BASE_URL = 'http://172.104.135.141:8000';
  const token = Cookies.get('authToken');

  // Fetch book details
  const fetchBookDetails = async (bookId) => {
    // Check cache first
    if (bookDetailsCache[bookId]) {
      return bookDetailsCache[bookId];
    }

    try {
      const response = await fetch(`${API_BASE_URL}/books/books/${bookId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      
      if (data.success && data.data) {
        // Cache the result
        setBookDetailsCache(prev => ({
          ...prev,
          [bookId]: data.data
        }));
        return data.data;
      }
      return null;
    } catch (error) {
      console.error(`Error fetching book details for ${bookId}:`, error);
      return null;
    }
  };

  // Fetch orders
  const fetchOrders = async (page = 1) => {
    if (!token) {
      showNotification('error', 'Authentication token not found. Please login again.');
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      // Use the correct endpoint - GET /admin/orders
      const response = await fetch(`${API_BASE_URL}/orders/admin/orders?page=${page}&page_size=100`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      
      if (data.success) {
        setOrders(data.data);
        setPaginationMeta(data.meta || { current_page: page, last_page: 1, total: data.data?.length || 0 });
      } else {
        showNotification('error', data.message || 'Failed to fetch orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      showNotification('error', 'Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  // Fetch order details with items and book details
  const fetchOrderDetails = async (orderId) => {
    setLoading(true);
    try {
      // Use GET /orders/{id} endpoint
      const response = await fetch(`${API_BASE_URL}/orders/orders/${orderId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      
      if (data.success) {
        // Fetch book details for each item
        const itemsWithBooks = await Promise.all(
          (data.data.items || []).map(async (item) => {
            const bookDetails = await fetchBookDetails(item.book_id);
            return {
              ...item,
              book_details: bookDetails
            };
          })
        );
        
        const orderWithBookDetails = {
          ...data.data,
          items: itemsWithBooks
        };
        
        setSelectedOrder(orderWithBookDetails);
        setShowDetailsModal(true);
      } else {
        showNotification('error', 'Failed to fetch order details');
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
      showNotification('error', 'Failed to fetch order details');
    } finally {
      setLoading(false);
    }
  };

  // Update order status (Admin)
  const updateOrderStatus = async (orderId, status) => {
    setUpdatingStatus(true);
    try {
      const response = await fetch(`${API_BASE_URL}/orders/admin/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      const data = await response.json();
      
      if (data.success) {
        showNotification('success', `Order status updated to ${status}`);
        fetchOrders(currentPage);
        if (showDetailsModal) {
          fetchOrderDetails(orderId);
        }
      } else {
        showNotification('error', data.message || 'Failed to update order status');
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      showNotification('error', 'Failed to update order status');
    } finally {
      setUpdatingStatus(false);
      setShowUpdateModal(false);
    }
  };

  // Update payment status (Admin)
  const updatePaymentStatus = async (paymentId, status, transactionId = '') => {
    setUpdatingStatus(true);
    try {
      const response = await fetch(`${API_BASE_URL}/orders/admin/payments/${paymentId}/status`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status, transaction_id: transactionId })
      });
      const data = await response.json();
      
      if (data.success) {
        showNotification('success', `Payment status updated to ${status}`);
        fetchOrders(currentPage);
        if (showDetailsModal && selectedOrder?.order?.id) {
          fetchOrderDetails(selectedOrder.order.id);
        }
      } else {
        showNotification('error', data.message || 'Failed to update payment status');
      }
    } catch (error) {
      console.error('Error updating payment status:', error);
      showNotification('error', 'Failed to update payment status');
    } finally {
      setUpdatingStatus(false);
      setShowUpdateModal(false);
    }
  };

  // Update order item status (Admin)
  const updateOrderItemStatus = async (itemId, status, fineAmount = null) => {
    setUpdatingStatus(true);
    try {
      const body = { status };
      if (fineAmount !== null) {
        body.fine_amount = fineAmount;
      }
      
      const response = await fetch(`${API_BASE_URL}/orders/admin/order-items/${itemId}/status`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      
      if (data.success) {
        showNotification('success', `Order item status updated to ${status}`);
        fetchOrders(currentPage);
        if (showDetailsModal && selectedOrder?.order?.id) {
          fetchOrderDetails(selectedOrder.order.id);
        }
      } else {
        showNotification('error', data.message || 'Failed to update order item status');
      }
    } catch (error) {
      console.error('Error updating order item status:', error);
      showNotification('error', 'Failed to update order item status');
    } finally {
      setUpdatingStatus(false);
      setShowUpdateModal(false);
    }
  };

  // Open update modal
  const openUpdateModal = (type, id, currentStatus) => {
    setUpdateTarget({ type, id, currentStatus });
    setSelectedStatus(currentStatus);
    setShowUpdateModal(true);
  };

  // Handle update confirmation
  const handleUpdate = () => {
    if (updateTarget.type === 'order') {
      updateOrderStatus(updateTarget.id, selectedStatus);
    } else if (updateTarget.type === 'payment') {
      updatePaymentStatus(updateTarget.id, selectedStatus);
    } else if (updateTarget.type === 'item') {
      updateOrderItemStatus(updateTarget.id, selectedStatus);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Filter orders
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.user_id?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesType = typeFilter === 'all' || order.order_type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  // Pagination
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalFilteredPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchOrders(pageNumber);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price || 0);
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 3000);
  };

  // Status badge component with update button
  const StatusBadge = ({ status, onUpdate, type = 'order', id }) => {
    const statusConfig = {
      pending: { color: 'bg-yellow-900 text-yellow-300', icon: Clock, label: 'Pending' },
      completed: { color: 'bg-green-900 text-green-300', icon: CheckCircle, label: 'Completed' },
      cancelled: { color: 'bg-red-900 text-red-300', icon: XCircle, label: 'Cancelled' },
      borrowed: { color: 'bg-blue-900 text-blue-300', icon: BookOpen, label: 'Borrowed' },
      returned: { color: 'bg-purple-900 text-purple-300', icon: Package, label: 'Returned' },
      overdue: { color: 'bg-orange-900 text-orange-300', icon: AlertCircle, label: 'Overdue' },
      processing: { color: 'bg-indigo-900 text-indigo-300', icon: RefreshCw, label: 'Processing' },
      shipped: { color: 'bg-cyan-900 text-cyan-300', icon: Package, label: 'Shipped' },
      delivered: { color: 'bg-emerald-900 text-emerald-300', icon: CheckCircle, label: 'Delivered' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    
    return (
      <div className="flex items-center space-x-2">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
          <Icon className="w-3 h-3 mr-1" />
          {config.label}
        </span>
        {onUpdate && (
          <button
            onClick={() => onUpdate(type, id, status)}
            className="p-1 hover:bg-slate-700 rounded transition-colors"
            title="Update Status"
          >
            <Edit className="w-3 h-3 text-gray-400" />
          </button>
        )}
      </div>
    );
  };

  const TypeBadge = ({ type }) => {
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        type === 'purchase' ? 'bg-green-900 text-green-300' : 'bg-blue-900 text-blue-300'
      }`}>
        {type === 'purchase' ? 'Purchase' : 'Borrow'}
      </span>
    );
  };

  const PaymentStatusBadge = ({ status, onUpdate, id }) => {
    const statusConfig = {
      pending: 'bg-yellow-900 text-yellow-300',
      completed: 'bg-green-900 text-green-300',
      failed: 'bg-red-900 text-red-300',
      refunded: 'bg-purple-900 text-purple-300'
    };
    
    return (
      <div className="flex items-center space-x-2">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[status] || statusConfig.pending}`}>
          {status?.toUpperCase() || 'PENDING'}
        </span>
        {onUpdate && (
          <button
            onClick={() => onUpdate('payment', id, status)}
            className="p-1 hover:bg-slate-700 rounded transition-colors"
            title="Update Status"
          >
            <Edit className="w-3 h-3 text-gray-400" />
          </button>
        )}
      </div>
    );
  };

  // Status options for different types
  const orderStatusOptions = ['pending', 'completed', 'cancelled', 'borrowed', 'returned', 'overdue'];
  const paymentStatusOptions = ['pending', 'completed', 'failed', 'refunded'];
  const itemStatusOptions = ['pending', 'borrowed', 'returned', 'overdue', 'cancelled'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Notification */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-20 right-4 z-50 flex items-center space-x-2 px-4 py-3 rounded-lg shadow-lg ${
              notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            } text-white`}
          >
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
            <span>{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pt-16 pb-20 overflow-hidden border-b border-gray-700">
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
                <Zap className="w-4 h-4 inline mr-2" />
                Admin Order Management
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              Orders Dashboard
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              Track, manage and update order statuses
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="h-8"></div>

        {/* Filters Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800 rounded-xl shadow-lg border border-gray-700 p-4 mb-8"
        >
          <div className="mb-4 pb-3 border-b border-gray-700">
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Back to Dashboard</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by Order ID or User ID..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="borrowed">Borrowed</option>
              <option value="returned">Returned</option>
              <option value="overdue">Overdue</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => {
                setTypeFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
            >
              <option value="all">All Types</option>
              <option value="purchase">Purchase</option>
              <option value="borrow">Borrow</option>
            </select>

            <button
              onClick={() => fetchOrders(currentPage)}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors flex items-center space-x-2 text-white"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>
        </motion.div>

        {/* Orders Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
        >
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <RefreshCw className="w-12 h-12 text-purple-500 animate-spin mx-auto mb-4" />
                <p className="text-gray-400">Loading orders...</p>
              </div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-slate-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User ID</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Payment</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total Price</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Created At</th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-800 divide-y divide-gray-700">
                    <AnimatePresence>
                      {currentOrders.map((order, index) => (
                        <motion.tr
                          key={order.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="hover:bg-slate-700 transition-colors cursor-pointer"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                                  <ShoppingCart className="w-5 h-5 text-white" />
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-white">
                                  {order.id?.slice(0, 8)}...
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {order.user_id?.slice(0, 8)}...
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <TypeBadge type={order.order_type} />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <StatusBadge 
                              status={order.status} 
                              onUpdate={openUpdateModal}
                              type="order"
                              id={order.id}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <PaymentStatusBadge 
                              status={order.payment?.status} 
                              onUpdate={openUpdateModal}
                              id={order.payment?.id}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-semibold">
                            {formatPrice(order.total_price)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                            {formatDate(order.created_at)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                fetchOrderDetails(order.id);
                              }}
                              className="text-purple-400 hover:text-purple-300 transition-colors mr-3"
                              title="View Details"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalFilteredPages > 1 && (
                <div className="bg-slate-900 px-6 py-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-400">
                          Showing <span className="font-medium text-white">{indexOfFirstOrder + 1}</span> to{' '}
                          <span className="font-medium text-white">
                            {Math.min(indexOfLastOrder, filteredOrders.length)}
                          </span>{' '}
                          of <span className="font-medium text-white">{filteredOrders.length}</span> results
                        </p>
                      </div>
                      <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                          <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-600 bg-slate-800 text-sm font-medium text-gray-400 hover:bg-slate-700 disabled:opacity-50"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          {[...Array(totalFilteredPages)].map((_, i) => (
                            <button
                              key={i}
                              onClick={() => paginate(i + 1)}
                              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                currentPage === i + 1
                                  ? 'z-10 bg-purple-600 border-purple-500 text-white'
                                  : 'bg-slate-800 border-gray-600 text-gray-400 hover:bg-slate-700'
                              }`}
                            >
                              {i + 1}
                            </button>
                          ))}
                          <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalFilteredPages}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-600 bg-slate-800 text-sm font-medium text-gray-400 hover:bg-slate-700 disabled:opacity-50"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>

      {/* Order Details Modal */}
      <AnimatePresence>
        {showDetailsModal && selectedOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetailsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-slate-800/95 backdrop-blur-sm border-b border-gray-700 px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Order Details</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="p-1 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              
              <div className="p-6">
                {/* Order Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <ShoppingCart className="w-6 h-6 text-purple-400" />
                      <h3 className="text-xl font-bold text-white">Order #{selectedOrder.order?.id?.slice(0, 8)}...</h3>
                    </div>
                    <div className="flex items-center space-x-3 mt-2 flex-wrap gap-2">
                      <TypeBadge type={selectedOrder.order?.order_type} />
                      <StatusBadge 
                        status={selectedOrder.order?.status} 
                        onUpdate={openUpdateModal}
                        type="order"
                        id={selectedOrder.order?.id}
                      />
                      <PaymentStatusBadge 
                        status={selectedOrder.payment?.status} 
                        onUpdate={openUpdateModal}
                        id={selectedOrder.payment?.id}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Total Amount</p>
                    <p className="text-2xl font-bold text-white">{formatPrice(selectedOrder.order?.total_price)}</p>
                  </div>
                </div>

                {/* Order Items Section with Book Details */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Package className="w-5 h-5 mr-2 text-purple-400" />
                    Order Items ({selectedOrder.items?.length || 0})
                  </h4>
                  
                  <div className="space-y-4">
                    {selectedOrder.items?.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-slate-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all"
                      >
                        {/* Book Header */}
                        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 px-4 py-3 border-b border-gray-700">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <BookOpen className="w-4 h-4 text-purple-400" />
                                <h5 className="font-semibold text-white">
                                  {item.book_details?.title || 'Loading book details...'}
                                </h5>
                              </div>
                              {item.book_details && (
                                <div className="flex flex-wrap gap-3 text-sm text-gray-400 mt-1">
                                  <span>Author: <span className="text-gray-300">{item.book_details.author || 'N/A'}</span></span>
                                  <span>•</span>
                                  <span>Available Copies: <span className="text-gray-300">{item.book_details.available_copies || 0}</span></span>
                                  <span>•</span>
                                  <span>Total Copies: <span className="text-gray-300">{item.book_details.total_copies || 0}</span></span>
                                </div>
                              )}
                            </div>
                            <StatusBadge 
                              status={item.status} 
                              onUpdate={openUpdateModal}
                              type="item"
                              id={item.id}
                            />
                          </div>
                        </div>

                        {/* Book Details Grid */}
                        {item.book_details && (
                          <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                              <div className="bg-slate-900/50 rounded-lg p-3">
                                <p className="text-xs text-gray-400 mb-1">Book ID</p>
                                <p className="text-sm text-white font-mono">{item.book_id?.slice(0, 12)}...</p>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-3">
                                <p className="text-xs text-gray-400 mb-1">Price per copy</p>
                                <p className="text-sm text-white font-semibold">{formatPrice(item.price)}</p>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-3">
                                <p className="text-xs text-gray-400 mb-1">Quantity</p>
                                <p className="text-sm text-white font-semibold">{item.quantity}</p>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-3">
                                <p className="text-xs text-gray-400 mb-1">Subtotal</p>
                                <p className="text-sm text-white font-semibold text-purple-400">{formatPrice(item.subtotal)}</p>
                              </div>
                            </div>

                            {/* Description Section */}
                            {item.book_details.description && (
                              <div className="mt-3 bg-slate-900/50 rounded-lg p-3">
                                <p className="text-xs text-gray-400 mb-1 flex items-center">
                                  <Info className="w-3 h-3 mr-1" />
                                  Description
                                </p>
                                <p className="text-sm text-gray-300">{item.book_details.description}</p>
                              </div>
                            )}

                            {/* Due Date for Borrow Orders */}
                            {selectedOrder.order?.order_type === 'borrow' && item.due_date && (
                              <div className="mt-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-3">
                                <p className="text-xs text-yellow-400 mb-1 flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  Due Date
                                </p>
                                <p className="text-sm text-yellow-300">{formatDate(item.due_date)}</p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Loading State */}
                        {!item.book_details && (
                          <div className="p-4 text-center">
                            <RefreshCw className="w-5 h-5 text-purple-400 animate-spin mx-auto" />
                            <p className="text-xs text-gray-400 mt-2">Loading book details...</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Summary Section */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Total Items</p>
                      <p className="text-xl font-bold text-white">{selectedOrder.total_items || 0}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Grand Total</p>
                      <p className="text-2xl font-bold text-white">{formatPrice(selectedOrder.order?.total_price)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Update Status Modal */}
      <AnimatePresence>
        {showUpdateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowUpdateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b border-gray-700 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Update Status</h2>
              </div>
              
              <div className="p-6">
                <p className="text-gray-400 mb-4">
                  Update status for {updateTarget.type}: <span className="text-white font-mono">{updateTarget.id?.slice(0, 8)}...</span>
                </p>
                
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select New Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white mb-6"
                >
                  {updateTarget.type === 'order' && orderStatusOptions.map(opt => (
                    <option key={opt} value={opt}>{opt.toUpperCase()}</option>
                  ))}
                  {updateTarget.type === 'payment' && paymentStatusOptions.map(opt => (
                    <option key={opt} value={opt}>{opt.toUpperCase()}</option>
                  ))}
                  {updateTarget.type === 'item' && itemStatusOptions.map(opt => (
                    <option key={opt} value={opt}>{opt.toUpperCase()}</option>
                  ))}
                </select>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowUpdateModal(false)}
                    className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    disabled={updatingStatus}
                    className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-white font-semibold flex items-center justify-center"
                  >
                    {updatingStatus ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Update
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default Orders;