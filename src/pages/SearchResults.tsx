
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { searchProducts, Product } from '@/lib/data';
import ProductGrid from '@/components/product/ProductGrid';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (query) {
      setIsLoading(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        const searchResults = searchProducts(query);
        setResults(searchResults);
        setIsLoading(false);
      }, 500);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm" className="group flex items-center text-gray-600">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center mb-8">
            <Search className="h-6 w-6 text-gray-400 mr-2" />
            <h1 className="text-2xl font-bold">
              Search Results for "{query}"
            </h1>
          </div>
          
          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="product-grid">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-200 rounded-lg h-80"></div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {results.length > 0 ? (
                <>
                  <p className="text-gray-600 mb-6">Found {results.length} results</p>
                  <ProductGrid products={results} />
                </>
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-xl font-semibold mb-2">No results found</h2>
                  <p className="text-gray-600 mb-8">
                    We couldn't find any products matching your search query.
                  </p>
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-gray-600">Try:</p>
                    <ul className="text-gray-600 space-y-2 text-left">
                      <li>• Checking your spelling</li>
                      <li>• Using more generic keywords</li>
                      <li>• Browsing our product categories</li>
                    </ul>
                    <Link to="/products">
                      <Button className="mt-4">Browse All Products</Button>
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
