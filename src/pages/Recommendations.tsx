
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getRecommendedProducts, Product, UserPreference } from '@/lib/data';
import ProductGrid from '@/components/product/ProductGrid';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const RecommendationMessage = ({ hasPreferences }: { hasPreferences: boolean }) => {
  if (hasPreferences) {
    return (
      <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
        <Brain className="h-6 w-6 text-shop-indigo mt-1" />
        <div>
          <h3 className="font-medium">Personalized Recommendations</h3>
          <p className="text-sm text-gray-500">
            These recommendations are based on your preferences. Our AI has analyzed your profile and selected products that match your interests.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
      <Brain className="h-6 w-6 text-shop-indigo mt-1" />
      <div>
        <h3 className="font-medium">Default Recommendations</h3>
        <p className="text-sm text-gray-500">
          These are our current best picks. For personalized recommendations, 
          <Link to="/preferences" className="text-shop-indigo hover:underline ml-1">update your preferences</Link>.
        </p>
      </div>
    </div>
  );
};

const RecommendationSkeleton = () => {
  return (
    <div className="animate-pulse-slow product-grid">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-gray-200 rounded-lg h-96"></div>
      ))}
    </div>
  );
};

const Recommendations = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [userPreferences, setUserPreferences] = useState<UserPreference | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call delay
    const fetchData = async () => {
      setIsLoading(true);
      
      try {
        // Get user preferences from localStorage (would be from API in real app)
        const storedPreferences = localStorage.getItem('userPreferences');
        const preferences = storedPreferences ? JSON.parse(storedPreferences) : null;
        setUserPreferences(preferences);
        
        // Wait to simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Get recommendations based on preferences
        const recommendations = getRecommendedProducts(preferences);
        setRecommendedProducts(recommendations);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Your Recommendations</h1>
            <Link to="/preferences">
              <Button variant="outline" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                Update Preferences
              </Button>
            </Link>
          </div>
          
          <RecommendationMessage hasPreferences={!!userPreferences} />
          
          <div className="my-8">
            {isLoading ? (
              <RecommendationSkeleton />
            ) : (
              <ProductGrid products={recommendedProducts} />
            )}
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-3">
              Want more accurate recommendations?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Update your preferences to help our AI understand what you're looking for 
              and discover products that better match your needs.
            </p>
            <Link to="/preferences">
              <Button size="lg" className="flex items-center">
                Customize Your Preferences
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Recommendations;
