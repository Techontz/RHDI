import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag, Home } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Order Placed Successfully!
          </h1>
          
          <p className="text-gray-600 mb-2">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <p className="text-sm text-gray-500 mb-1">Order ID</p>
            <p className="text-lg font-mono font-semibold text-gray-900">{orderId}</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => navigate('/orders')}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              View My Orders
            </button>
            
            <button
              onClick={() => navigate('/books')}
              className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-green-600 hover:text-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Continue Shopping
            </button>
          </div>

          {/* Order Info */}
          <div className="mt-8 text-sm text-gray-500">
            <p>A confirmation email has been sent to your registered email address.</p>
            <p>You can track your order status in your dashboard.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderSuccess;