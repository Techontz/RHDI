import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  X,
  RefreshCw,
  BookOpen as BookIcon,
  Plus,
  Edit,
  Trash2,
  ArrowLeft,
  Save,
  AlertCircle,
  CheckCircle,
  XCircle,
  Image as ImageIcon
} from 'lucide-react';

const DashboardBooks = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [itemsPerPage] = useState(10);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    cover: '',
    total_copies: '',
    price: '',
    is_active: true
  });

  // Fetch books
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://172.104.135.141:8000/books/books?page=1&page_size=100');
      const data = await response.json();
      if (data.success) {
        setBooks(data.data);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      showNotification('error', 'Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  // Create book
  const createBook = async () => {
    try {
      const response = await fetch('http://172.104.135.141:8000/books/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          author: formData.author,
          description: formData.description,
          cover: formData.cover,
          total_copies: parseInt(formData.total_copies),
          price: parseFloat(formData.price),
          is_active: formData.is_active
        }),
      });
      const data = await response.json();
      if (data.success) {
        showNotification('success', 'Book created successfully');
        setShowCreateModal(false);
        resetForm();
        fetchBooks();
      } else {
        showNotification('error', 'Failed to create book');
      }
    } catch (error) {
      console.error('Error creating book:', error);
      showNotification('error', 'Failed to create book');
    }
  };

  // Update book
  const updateBook = async () => {
    try {
      const response = await fetch(`http://172.104.135.141:8000/books/books/${selectedBook.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          author: formData.author,
          description: formData.description,
          cover: formData.cover,
          total_copies: parseInt(formData.total_copies),
          price: parseFloat(formData.price),
          is_active: formData.is_active
        }),
      });
      const data = await response.json();
      if (data.success) {
        showNotification('success', 'Book updated successfully');
        setShowEditModal(false);
        resetForm();
        fetchBooks();
      } else {
        showNotification('error', 'Failed to update book');
      }
    } catch (error) {
      console.error('Error updating book:', error);
      showNotification('error', 'Failed to update book');
    }
  };

  // Delete book
  const deleteBook = async () => {
    try {
      const response = await fetch(`http://172.104.135.141:8000/books/books/${bookToDelete.id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        showNotification('success', 'Book deleted successfully');
        setShowDeleteConfirm(false);
        setBookToDelete(null);
        fetchBooks();
      } else {
        showNotification('error', 'Failed to delete book');
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      showNotification('error', 'Failed to delete book');
    }
  };

  // Fetch book details
  const fetchBookDetails = async (bookId) => {
    try {
      const response = await fetch(`http://172.104.135.141:8000/books/books/${bookId}`);
      const data = await response.json();
      if (data.success) {
        setSelectedBook(data.data);
        setShowDetailsModal(true);
      }
    } catch (error) {
      console.error('Error fetching book details:', error);
      showNotification('error', 'Failed to fetch book details');
    }
  };

  // Edit book
  const editBook = (book) => {
    setSelectedBook(book);
    setFormData({
      title: book.title,
      author: book.author,
      description: book.description,
      cover: book.cover || '',
      total_copies: book.total_copies,
      price: book.price,
      is_active: book.is_active
    });
    setShowEditModal(true);
  };

  // Show notification
  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 3000);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      author: '',
      description: '',
      cover: '',
      total_copies: '',
      price: '',
      is_active: true
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Filter books based on search and status
  const filteredBooks = books.filter(book => {
    const matchesSearch = 
      book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'active' && book.is_active) ||
      (statusFilter === 'inactive' && !book.is_active);
    
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalFilteredPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    });
  };

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  // Status badge component
  const StatusBadge = ({ isActive }) => {
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        isActive ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
      }`}>
        {isActive ? 'Active' : 'Inactive'}
      </span>
    );
  };

  // Availability badge
  const AvailabilityBadge = ({ available, total }) => {
    const percentage = (available / total) * 100;
    let color = 'bg-green-900 text-green-300';
    if (percentage === 0) color = 'bg-red-900 text-red-300';
    else if (percentage < 30) color = 'bg-yellow-900 text-yellow-300';
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
        {available} / {total} available
      </span>
    );
  };

  // Book cover component with fallback
  const BookCover = ({ cover, title, className = "h-12 w-10" }) => {
    const [imageError, setImageError] = useState(false);
    
    if (!cover || imageError) {
      return (
        <div className={`${className} rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center`}>
          <BookIcon className="w-5 h-5 text-white" />
        </div>
      );
    }
    
    return (
      <img 
        src={cover} 
        alt={title}
        className={`${className} rounded-lg object-cover`}
        onError={() => setImageError(true)}
      />
    );
  };

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
              <div className="px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
                <BookIcon className="w-4 h-4 inline mr-2" />
                Book Management
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              Books
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              Manage your book inventory
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="h-8"></div>

        {/* Filters and Actions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800 rounded-xl shadow-lg border border-gray-700 p-4 mb-8"
        >
          {/* Back Button Row */}
          <div className="mb-4 pb-3 border-b border-gray-700">
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Back to Dashboard</span>
            </button>
          </div>

          {/* Search and Filters Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <button
              onClick={fetchBooks}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors flex items-center space-x-2 text-white"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>

            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg transition-colors flex items-center space-x-2 text-white"
            >
              <Plus className="w-4 h-4" />
              <span>Add Book</span>
            </button>
          </div>
        </motion.div>

        {/* Books Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
        >
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <RefreshCw className="w-12 h-12 text-green-500 animate-spin mx-auto mb-4" />
                <p className="text-gray-400">Loading books...</p>
              </div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-slate-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Book
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Availability
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Created
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-800 divide-y divide-gray-700">
                    <AnimatePresence>
                      {currentBooks.map((book, index) => (
                        <motion.tr
                          key={book.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="hover:bg-slate-700 transition-colors cursor-pointer"
                          onClick={() => fetchBookDetails(book.id)}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <BookCover 
                                cover={book.cover} 
                                title={book.title}
                                className="h-12 w-10"
                              />
                              <div className="ml-3">
                                <div className="text-sm font-medium text-white">
                                  {book.title}
                                </div>
                                <div className="text-sm text-gray-400">
                                  ID: {book.id?.slice(0, 8)}...
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {book.author}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {formatPrice(book.price)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <AvailabilityBadge available={book.stock_quantity} total={book.total_copies} />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <StatusBadge isActive={book.is_active} />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                            {formatDate(book.created_at)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center justify-end space-x-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  editBook(book);
                                }}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                <Edit className="w-5 h-5" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setBookToDelete(book);
                                  setShowDeleteConfirm(true);
                                }}
                                className="text-red-400 hover:text-red-300 transition-colors"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  fetchBookDetails(book.id);
                                }}
                                className="text-green-400 hover:text-green-300 transition-colors"
                              >
                                <Eye className="w-5 h-5" />
                              </button>
                            </div>
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
                          Showing <span className="font-medium text-white">{indexOfFirstBook + 1}</span> to{' '}
                          <span className="font-medium text-white">
                            {Math.min(indexOfLastBook, filteredBooks.length)}
                          </span>{' '}
                          of <span className="font-medium text-white">{filteredBooks.length}</span> results
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
                                  ? 'z-10 bg-green-600 border-green-500 text-white'
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

      {/* Create Book Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transparent z-50 flex items-center justify-center p-4"
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-slate-800/95 backdrop-blur-sm border-b border-gray-700 px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Add New Book</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-1 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Author *</label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({...formData, author: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows="3"
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Cover URL</label>
                    <input
                      type="text"
                      value={formData.cover}
                      onChange={(e) => setFormData({...formData, cover: e.target.value})}
                      placeholder="https://example.com/cover.jpg"
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    />
                    {formData.cover && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-400 mb-1">Preview:</p>
                        <img 
                          src={formData.cover} 
                          alt="Cover preview"
                          className="h-20 w-16 rounded-lg object-cover border border-gray-600"
                          onError={(e) => {
                            e.target.src = '';
                            e.target.alt = 'Invalid image URL';
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Total Copies *</label>
                      <input
                        type="number"
                        value={formData.total_copies}
                        onChange={(e) => setFormData({...formData, total_copies: e.target.value})}
                        className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Price *</label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.is_active}
                        onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                        className="w-4 h-4 bg-slate-900 border-gray-600 rounded focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-300">Active</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-700">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={createBook}
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg transition-colors flex items-center space-x-2 text-white"
                  >
                    <Save className="w-4 h-4" />
                    <span>Create Book</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Book Modal */}
      <AnimatePresence>
        {showEditModal && selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transparent z-50 flex items-center justify-center p-4"
            onClick={() => setShowEditModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-slate-800/95 backdrop-blur-sm border-b border-gray-700 px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Edit Book</h2>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="p-1 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Author *</label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({...formData, author: e.target.value})}
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows="3"
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Cover URL</label>
                    <input
                      type="text"
                      value={formData.cover}
                      onChange={(e) => setFormData({...formData, cover: e.target.value})}
                      placeholder="https://example.com/cover.jpg"
                      className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    />
                    {formData.cover && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-400 mb-1">Preview:</p>
                        <img 
                          src={formData.cover} 
                          alt="Cover preview"
                          className="h-20 w-16 rounded-lg object-cover border border-gray-600"
                          onError={(e) => {
                            e.target.src = '';
                            e.target.alt = 'Invalid image URL';
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Total Copies *</label>
                      <input
                        type="number"
                        value={formData.total_copies}
                        onChange={(e) => setFormData({...formData, total_copies: e.target.value})}
                        className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Price *</label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        className="w-full px-4 py-2 bg-slate-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.is_active}
                        onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                        className="w-4 h-4 bg-slate-900 border-gray-600 rounded focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-300">Active</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-700">
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={updateBook}
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg transition-colors flex items-center space-x-2 text-white"
                  >
                    <Save className="w-4 h-4" />
                    <span>Update Book</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && bookToDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transparent z-50 flex items-center justify-center p-4"
            onClick={() => setShowDeleteConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-red-900/50 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">Delete Book</h3>
                <p className="text-gray-400 text-center mb-6">
                  Are you sure you want to delete "{bookToDelete.title}"? This action cannot be undone.
                </p>
                <div className="flex justify-center space-x-3">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={deleteBook}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book Details Modal with Cover Image */}
      <AnimatePresence>
        {showDetailsModal && selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transparent z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetailsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-slate-800/95 backdrop-blur-sm border-b border-gray-700 px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Book Details</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="p-1 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-6 mb-6">
                  {/* Book Cover */}
                  <div className="flex-shrink-0">
                    <BookCover 
                      cover={selectedBook.cover} 
                      title={selectedBook.title}
                      className="h-32 w-24"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedBook.title}</h3>
                    <p className="text-gray-400 mb-3">by {selectedBook.author}</p>
                    <div className="flex items-center space-x-3">
                      <StatusBadge isActive={selectedBook.is_active} />
                      <AvailabilityBadge available={selectedBook.available_copies} total={selectedBook.total_copies} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Description</p>
                    <p className="text-white mt-1 leading-relaxed">{selectedBook.description || 'No description available'}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-gray-700">
                      <p className="text-sm font-medium text-gray-400">Price</p>
                      <p className="text-white text-xl font-bold mt-1">{formatPrice(selectedBook.price)}</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-gray-700">
                      <p className="text-sm font-medium text-gray-400">Availability</p>
                      <p className="text-white text-xl font-bold mt-1">{selectedBook.available_copies} / {selectedBook.total_copies}</p>
                      <p className="text-xs text-gray-400 mt-1">copies available</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-400">Created At</p>
                      <p className="text-sm text-gray-300 mt-1">{formatDate(selectedBook.created_at)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400">Last Updated</p>
                      <p className="text-sm text-gray-300 mt-1">{formatDate(selectedBook.updated_at)}</p>
                    </div>
                  </div>

                  {selectedBook.cover && (
                    <div>
                      <p className="text-sm font-medium text-gray-400">Cover URL</p>
                      <a 
                        href={selectedBook.cover} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 mt-1 break-all inline-block"
                      >
                        {selectedBook.cover}
                      </a>
                    </div>
                  )}

                  <div className="bg-slate-800 rounded-lg p-4 border border-gray-700">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Book ID</p>
                    <p className="text-sm text-white mt-1 font-mono break-all">{selectedBook.id}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom animations */}
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

export default DashboardBooks;