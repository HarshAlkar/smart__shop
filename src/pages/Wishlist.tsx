
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import ProductGrid from '@/components/product/ProductGrid';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';

// Mock wishlist data - in a real app this would come from a database or local storage
const initialWishlistItems = [
  products[0],
  products[2],
  products[5]
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  
  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast.success("Item removed from wishlist");
  };
  
  const addToCart = (productId: string) => {
    const product = wishlistItems.find(item => item.id === productId);
    if (product) {
      toast.success(`${product.name} added to cart`);
    }
  };
  
  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <Heart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-6">Save items you're interested in for later</p>
              <Link to="/products">
                <Button>Browse Products</Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Heart className="mr-2 h-6 w-6 text-shop-indigo" />
            Your Wishlist
          </h1>
          
          <div className="space-y-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="flex items-center border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="w-20 h-20 rounded-md overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <Link to={`/product/${item.id}`} className="text-lg font-medium text-gray-900 hover:text-shop-indigo">
                    {item.name}
                  </Link>
                  <p className="text-shop-indigo font-medium mt-1">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => addToCart(item.id)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-400 hover:text-red-500"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">You might also like</h2>
            <ProductGrid products={products.slice(6, 10)} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
