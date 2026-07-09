import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import LoadingSpinner from './LoadingSpinner';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user profile
  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch('http://172.104.135.141:8000/user/profile/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setProfile(data.data);
        return data.data;
      } else {
        throw new Error(data.message || 'Failed to fetch profile');
      }
    } catch (err) {
      console.error('Profile fetch error:', err);
      setError(err.message);
      return null;
    }
  };

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('authToken');
      const userData = Cookies.get('userData');
      
      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
        
        // Fetch user profile
        await fetchUserProfile(token);
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = async (identifier, password, rememberMe = false) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://172.104.135.141:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          identifier: identifier.trim(),
          password: password
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const cookieExpiration = rememberMe ? 30 : 1;
        
        // Store tokens in cookies
        Cookies.set('authToken', data.data.tokens.access_token, {
          expires: cookieExpiration,
          secure: true,
          sameSite: 'Lax',
          path: '/'
        });
        
        Cookies.set('refreshToken', data.data.tokens.refresh_token, {
          expires: cookieExpiration,
          secure: true,
          sameSite: 'Lax',
          path: '/'
        });
        
        // Store user data
        const userData = {
          id: data.data.user.id,
          username: data.data.user.username,
          email: data.data.user.email,
          phone_number: data.data.user.phone_number,
          status: data.data.user.status,
          last_login_at: data.data.user.last_login_at,
          avatar_url: data.data.user.avatar_url,
        };
        
        Cookies.set('userData', JSON.stringify(userData), {
          expires: cookieExpiration,
          secure: true,
          sameSite: 'Lax',
          path: '/'
        });
        
        setUser(userData);
        setIsAuthenticated(true);
        
        // Fetch user profile
        await fetchUserProfile(data.data.tokens.access_token);
        
        return { success: true, data: data.data };
      } else {
        setError(data.message || 'Login failed');
        return { success: false, error: data.message };
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please check your connection.');
      return { success: false, error: 'Network error' };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    // Remove all auth cookies
    Cookies.remove('authToken');
    Cookies.remove('refreshToken');
    Cookies.remove('userData');
    Cookies.remove('userContacts');
    
    setUser(null);
    setProfile(null);
    setIsAuthenticated(false);
    setError(null);
  };

  // Update profile function
  const updateProfile = async (profileData) => {
    const token = Cookies.get('authToken');
    if (!token) {
      setError('No authentication token');
      return { success: false, error: 'Not authenticated' };
    }
    
    setLoading(true);
    
    try {
      const response = await fetch('http://172.104.135.141:8000/user/profile/me', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setProfile(data.data);
        return { success: true, data: data.data };
      } else {
        setError(data.message || 'Failed to update profile');
        return { success: false, error: data.message };
      }
    } catch (err) {
      console.error('Profile update error:', err);
      setError('Network error');
      return { success: false, error: 'Network error' };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    profile,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
    updateProfile,
    fetchUserProfile
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" color="primary" message="Loading..." />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;