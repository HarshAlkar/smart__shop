
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import ProductGrid from '@/components/product/ProductGrid';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock recently viewed data - in a real app, this would come from localStorage or a database
const recentlyViewedIds = ['prod-1', 'prod-3', 'prod-5', 'prod-7'];
const recentlyViewedProducts = products.filter(product => 
  recentlyViewedIds.includes(product.id)
);

const RecentlyViewed = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm" className="group flex items-center text-gray-600">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center mb-8">
            <Clock className="h-6 w-6 text-shop-indigo mr-2" />
            <h1 className="text-2xl font-bold">
              Recently Viewed Products
            </h1>
          </div>
          
          {recentlyViewedProducts.length > 0 ? (
            <>
              <p className="text-gray-600 mb-6">Products you've viewed recently</p>
              <ProductGrid products={recentlyViewedProducts} />
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-xl font-semibold mb-2">No recently viewed products</h2>
              <p className="text-gray-600 mb-8">
                Browse our products to see your viewing history here.
              </p>
              <Link to="/products">
                <Button>Browse Products</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RecentlyViewed;
