import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  ShoppingCart, 
  Library,
  Package,
  Settings,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../auth/context/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { profile, user } = useAuth();
  
  const userRole = profile?.role || user?.role || 'user';
  const isAdmin = userRole === 'admin';

  // Admin menus
  const adminMenus = [
    { 
      title: 'Users', 
      icon: Users, 
      path: '/dashboard/users',
      gradient: 'from-purple-500 to-purple-600',
      iconGradient: 'from-purple-500 to-purple-600',
      description: 'Manage all users',
      stat: 'Management'
    },
    { 
      title: 'Books', 
      icon: BookOpen, 
      path: '/dashboard/books',
      gradient: 'from-green-500 to-green-600',
      iconGradient: 'from-green-500 to-green-600',
      description: 'Manage books inventory',
      stat: 'Inventory'
    },
    { 
      title: 'Orders', 
      icon: ShoppingCart, 
      path: '/dashboard/orders',
      gradient: 'from-blue-500 to-blue-600',
      iconGradient: 'from-blue-500 to-blue-600',
      description: 'View all orders',
      stat: 'Transactions'
    },
    { 
      title: 'Profile', 
      icon: Settings, 
      path: '/dashboard/profile-settings',
      gradient: 'from-orange-500 to-orange-600',
      iconGradient: 'from-orange-500 to-orange-600',
      description: 'Update your profile',
      stat: 'Settings'
    }
  ];

  // User menus
  const userMenus = [
    { 
      title: 'My Books', 
      icon: Library, 
      path: '/dashboard/my-books',
      gradient: 'from-blue-500 to-blue-600',
      iconGradient: 'from-blue-500 to-blue-600',
      description: 'View your books',
      stat: 'Collection'
    },
    { 
      title: 'My Orders', 
      icon: Package, 
      path: '/dashboard/my-orders',
      gradient: 'from-purple-500 to-purple-600',
      iconGradient: 'from-purple-500 to-purple-600',
      description: 'Track your orders',
      stat: 'History'
    },
    { 
      title: 'Profile', 
      icon: Settings, 
      path: '/dashboard/profile-settings',
      gradient: 'from-orange-500 to-orange-600',
      iconGradient: 'from-orange-500 to-orange-600',
      description: 'Update your profile',
      stat: 'Settings'
    }
  ];

  const menus = isAdmin ? adminMenus : userMenus;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Modern Header Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pt-16 pb-20 overflow-hidden border-b border-gray-700">
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
              <div className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                isAdmin 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
              }`}>
                {isAdmin ? '👑 Administrator Access' : '✨ Member Access'}
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              Dashboard
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              Welcome back, <span className="font-semibold text-white">{user?.username || 'User'}</span>
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        {/* Spacer */}
        <div className="h-8"></div>

        {/* Menu Grid Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {menus.map((menu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => navigate(menu.path)}
              className="group cursor-pointer"
            >
              <div className="relative bg-slate-800 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${menu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} style={{ padding: '2px' }}>
                  <div className="absolute inset-0 bg-slate-800 rounded-xl"></div>
                </div>
                
                <div className="relative p-6">
                  {/* Icon with gradient background */}
                  <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-r ${menu.iconGradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <menu.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {menu.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-3">
                    {menu.description}
                  </p>
                  
                  {/* Stat badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {menu.stat}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transform -skew-x-12 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-gray-700 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">
                {isAdmin ? 'System Overview' : 'Your Activity'}
              </h4>
              <p className="text-sm text-gray-400">
                {isAdmin 
                  ? 'Manage users, books, and monitor all orders from your dashboard'
                  : 'Browse your books, track orders, and manage your profile settings'}
              </p>
            </div>
            <div className={`px-4 py-2 rounded-lg text-sm font-medium ${
              isAdmin ? 'bg-purple-900/50 text-purple-300' : 'bg-blue-900/50 text-blue-300'
            } border border-gray-700`}>
              {isAdmin ? `${menus.length} Management Sections` : `${menus.length} Quick Actions`}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add custom animations */}
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

export default Dashboard;