import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Save, 
  Edit2, 
  X, 
  ArrowLeft,
  Shield,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Loader2,
  Phone,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../../auth/context/AuthContext';

const UserProfile = () => {
  const navigate = useNavigate();
  const { user, profile, fetchUserProfile, updateProfile, loading: authLoading } = useAuth();
  const [formData, setFormData] = useState({
    full_name: '',
    email: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [userProfile, setUserProfile] = useState(null);

  // Load profile data
  useEffect(() => {
    if (profile && profile.data) {
      setUserProfile(profile.data);
      setFormData({
        full_name: profile.data.full_name || '',
        email: profile.data.email || ''
      });
    } else if (profile) {
      setUserProfile(profile);
      setFormData({
        full_name: profile.full_name || '',
        email: profile.email || ''
      });
    } else if (user) {
      setFormData({
        full_name: user.full_name || user.username || '',
        email: user.email || ''
      });
    }
  }, [profile, user]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });
    
    try {
      const updateData = {};
      
      if (formData.full_name !== (userProfile?.full_name || profile?.full_name || user?.full_name)) {
        updateData.full_name = formData.full_name;
      }
      if (formData.email !== (userProfile?.email || profile?.email || user?.email)) {
        updateData.email = formData.email;
      }
      
      if (Object.keys(updateData).length > 0) {
        const result = await updateProfile(updateData);
        
        if (result.success) {
          setMessage({ type: 'success', text: 'Profile updated successfully!' });
          setIsEditing(false);
          const token = localStorage.getItem('authToken') || document.cookie.match(/authToken=([^;]+)/)?.[1];
          if (token) {
            await fetchUserProfile(token);
          }
        } else {
          setMessage({ type: 'error', text: result.error || 'Failed to update profile' });
        }
      } else {
        setMessage({ type: 'info', text: 'No changes to save' });
      }
      
    } catch (error) {
      console.error('Profile update error:', error);
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Status badge component
  const StatusBadge = ({ isActive }) => {
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        isActive 
          ? 'bg-green-900 text-green-300' 
          : 'bg-red-900 text-red-300'
      }`}>
        {isActive ? (
          <>
            <UserCheck className="w-3 h-3 mr-1" />
            Active
          </>
        ) : (
          <>
            <AlertCircle className="w-3 h-3 mr-1" />
            Inactive
          </>
        )}
      </span>
    );
  };

  const profileData = userProfile || profile?.data || profile;

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-purple-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading profile...</p>
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
                <User className="w-4 h-4 inline mr-2" />
                My Profile
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              User Profile
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              Manage your personal information and account settings
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
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Back to Dashboard</span>
            </button>
            
            <div className="flex gap-3">
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-300 flex items-center space-x-2 text-white shadow-lg"
                >
                  <Edit2 className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              )}
              <button
                onClick={async () => {
                  const token = localStorage.getItem('authToken') || document.cookie.match(/authToken=([^;]+)/)?.[1];
                  if (token) {
                    await fetchUserProfile(token);
                    setMessage({ type: 'success', text: 'Profile refreshed!' });
                    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
                  }
                }}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors flex items-center space-x-2 text-white"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
        >
          {/* Profile Header with Avatar */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8">
            <div className="flex items-center space-x-4">
              <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                <span className="text-white text-3xl font-bold">
                  {profileData?.full_name?.charAt(0).toUpperCase() || 
                   user?.username?.charAt(0).toUpperCase() || 
                   'U'}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">
                  {profileData?.full_name || user?.username || 'User'}
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  <StatusBadge isActive={profileData?.is_active} />
                  {profileData?.role && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-300">
                      <Shield className="w-3 h-3 mr-1" />
                      {profileData.role}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
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

            {/* Profile Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Full Name Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  ) : (
                    <div className="px-4 py-2 bg-slate-900 rounded-lg text-white border border-gray-700">
                      {profileData?.full_name || formData.full_name || 'Not set'}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  ) : (
                    <div className="px-4 py-2 bg-slate-900 rounded-lg text-white border border-gray-700">
                      {profileData?.email || formData.email || 'Not set'}
                    </div>
                  )}
                </div>

                {/* User ID (Read-only) */}
                {profileData?.id && (
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4" />
                      User ID
                    </label>
                    <div className="px-4 py-2 bg-slate-900 rounded-lg text-gray-400 text-sm font-mono border border-gray-700">
                      {profileData.id}
                    </div>
                  </div>
                )}

                {/* Account Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-700">
                  {/* Created At */}
                  {profileData?.created_at && (
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                        <Calendar className="w-4 h-4" />
                        Member Since
                      </label>
                      <div className="px-4 py-2 bg-slate-900 rounded-lg text-gray-300 text-sm border border-gray-700">
                        {formatDate(profileData.created_at)}
                      </div>
                    </div>
                  )}

                  {/* Updated At */}
                  {profileData?.updated_at && (
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                        <Clock className="w-4 h-4" />
                        Last Updated
                      </label>
                      <div className="px-4 py-2 bg-slate-900 rounded-lg text-gray-300 text-sm border border-gray-700">
                        {formatDate(profileData.updated_at)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                {isEditing && (
                  <div className="flex gap-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Save className="w-5 h-5" />
                      )}
                      <span>{loading ? 'Saving...' : 'Save Changes'}</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setMessage({ type: '', text: '' });
                        if (profileData) {
                          setFormData({
                            full_name: profileData.full_name || '',
                            email: profileData.email || ''
                          });
                        }
                      }}
                      className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300"
                    >
                      Cancel
                    </motion.button>
                  </div>
                )}
              </div>
            </form>
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

export default UserProfile;