
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { products } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';

// Mock comparison data - in a real app this would come from URL params or state
const comparedProductIds = ['prod-2', 'prod-4', 'prod-6'];
const comparedProducts = products.filter(product => 
  comparedProductIds.includes(product.id)
);

const Compare = () => {
  const addToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      toast.success(`${product.name} added to cart`);
    }
  };
  
  // Get all possible specification keys from all products
  const allSpecKeys = comparedProducts.reduce((keys, product) => {
    const productKeys = Object.keys(product.specifications);
    productKeys.forEach(key => {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    });
    return keys;
  }, [] as string[]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/products">
              <Button variant="ghost" size="sm" className="group flex items-center text-gray-600">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Products
              </Button>
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Compare Products</h1>
          
          {comparedProducts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="w-1/4 p-4 border-b text-left font-semibold">Product</th>
                    {comparedProducts.map(product => (
                      <th key={product.id} className="w-1/4 p-4 border-b text-center">
                        <div className="flex flex-col items-center">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-32 h-32 object-cover mb-2 rounded-md"
                          />
                          <Link 
                            to={`/product/${product.id}`}
                            className="font-medium text-shop-indigo hover:underline"
                          >
                            {product.name}
                          </Link>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b font-semibold">Price</td>
                    {comparedProducts.map(product => (
                      <td key={product.id} className="p-4 border-b text-center font-bold text-shop-indigo">
                        ${product.price.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b font-semibold">Category</td>
                    {comparedProducts.map(product => (
                      <td key={product.id} className="p-4 border-b text-center">
                        {product.category}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b font-semibold">Rating</td>
                    {comparedProducts.map(product => (
                      <td key={product.id} className="p-4 border-b text-center">
                        {product.rating} / 5
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border-b font-semibold">Description</td>
                    {comparedProducts.map(product => (
                      <td key={product.id} className="p-4 border-b text-center">
                        {product.description}
                      </td>
                    ))}
                  </tr>
                  
                  {allSpecKeys.map(key => (
                    <tr key={key}>
                      <td className="p-4 border-b font-semibold capitalize">{key}</td>
                      {comparedProducts.map(product => (
                        <td key={product.id} className="p-4 border-b text-center">
                          {product.specifications[key] || 'N/A'}
                        </td>
                      ))}
                    </tr>
                  ))}
                  
                  <tr>
                    <td className="p-4 border-b font-semibold">Actions</td>
                    {comparedProducts.map(product => (
                      <td key={product.id} className="p-4 border-b text-center">
                        <Button 
                          className="mb-2 w-full"
                          onClick={() => addToCart(product.id)}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-xl font-semibold mb-2">No products to compare</h2>
              <p className="text-gray-600 mb-8">
                Select products to compare from the product pages.
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

export default Compare;
