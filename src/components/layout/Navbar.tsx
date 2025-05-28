
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, User, ShoppingCart, Phone, Info, ClipboardList } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <ShoppingBag className="h-8 w-8 text-shop-indigo" />
              <span className="ml-2 text-xl font-bold text-shop-indigo">SmartShop</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-transparent text-gray-700 hover:text-shop-indigo px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/products" className="border-transparent text-gray-700 hover:text-shop-indigo px-3 py-2 text-sm font-medium">
                Products
              </Link>
              <Link to="/recommendations" className="border-transparent text-gray-700 hover:text-shop-indigo px-3 py-2 text-sm font-medium">
                Recommendations
              </Link>
              <Link to="/about" className="border-transparent text-gray-700 hover:text-shop-indigo px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="border-transparent text-gray-700 hover:text-shop-indigo px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-64 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-10 w-10"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
            <Link to="/account">
              <Button variant="ghost" size="icon" className="text-gray-600">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-gray-600">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-shop-indigo"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-indigo"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-indigo"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/recommendations" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-indigo"
              onClick={() => setIsMenuOpen(false)}
            >
              Recommendations
            </Link>
            <Link 
              to="/preferences" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-indigo"
              onClick={() => setIsMenuOpen(false)}
            >
              My Preferences
            </Link>
            <Link 
              to="/about" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-indigo"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-indigo"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/account" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-indigo"
              onClick={() => setIsMenuOpen(false)}
            >
              My Account
            </Link>
            <Link 
              to="/order-history" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-indigo"
              onClick={() => setIsMenuOpen(false)}
            >
              Order History
            </Link>
            <Link 
              to="/cart" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-indigo"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <form onSubmit={handleSearch} className="px-4 flex">
              <Input
                type="text"
                placeholder="Search products..."
                className="flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
