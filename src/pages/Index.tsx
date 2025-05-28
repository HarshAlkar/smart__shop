
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { categories, products, getRecommendedProducts } from '@/lib/data';
import ProductGrid from '@/components/product/ProductGrid';
import CategoryCard from '@/components/recommendation/CategoryCard';
import AIRecommendationBanner from '@/components/recommendation/AIRecommendationBanner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  // Get top rated products for the featured section
  const featuredProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  
  // Get recommended products based on no preferences (default recommendations)
  const recommendedProducts = getRecommendedProducts();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="bg-cover bg-center h-96" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070&auto=format&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-shop-indigo/80 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-lg">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Smart Shopping, <br />Smarter Recommendations
                </h1>
                <p className="text-white/90 text-xl mb-6">
                  Experience AI-powered shopping recommendations tailored just for you.
                </p>
                <div className="space-x-4">
                  <Link to="/products">
                    <Button className="bg-white text-shop-indigo hover:bg-gray-100">
                      Browse Products
                    </Button>
                  </Link>
                  <Link to="/recommendations">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      My Recommendations
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
              <p className="text-gray-600 mt-1">Find exactly what you're looking for</p>
            </div>
            <Link to="/products" className="flex items-center text-shop-indigo hover:text-shop-indigo/80">
              <span>View all</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Recommendation Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AIRecommendationBanner />
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Top Rated Products</h2>
              <p className="text-gray-600 mt-1">Discover our most popular items</p>
            </div>
            <Link to="/products" className="flex items-center text-shop-indigo hover:text-shop-indigo/80">
              <span>View all products</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} featuredProductId={featuredProducts[0]?.id} />
        </div>
      </section>
      
      {/* Recommended Products Preview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
              <p className="text-gray-600 mt-1">Based on trending products and top sellers</p>
            </div>
            <Link to="/recommendations" className="flex items-center text-shop-indigo hover:text-shop-indigo/80">
              <span>View personalized recommendations</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <ProductGrid products={recommendedProducts} />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
