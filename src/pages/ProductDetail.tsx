
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { products, getRecommendedProducts } from '@/lib/data';
import ProductGrid from '@/components/product/ProductGrid';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, the product you are looking for does not exist.</p>
            <Button onClick={() => navigate('/products')}>
              Browse Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Get similar products (would use AI in a real app)
  const similarProducts = getRecommendedProducts({
    category: product.category,
    priceRange: [0, 2000],
    brands: [],
    features: []
  }).filter(p => p.id !== product.id);
  
  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart!`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb and back button */}
          <div className="mb-6">
            <Button
              variant="ghost"
              size="sm"
              className="group flex items-center text-gray-600"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Badge className="bg-shop-indigo text-white capitalize">
                    {product.category}
                  </Badge>
                  <div className="flex items-center ml-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-2xl font-bold text-shop-indigo mb-4">${product.price.toFixed(2)}</p>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <Separator className="my-6" />
              
              {/* Stock Status */}
              <div className="mb-6 flex items-center">
                {product.stock > 0 ? (
                  <>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <Check className="mr-1 h-3 w-3" /> In Stock
                    </Badge>
                    <span className="ml-2 text-sm text-gray-500">
                      {product.stock < 10 ? `Only ${product.stock} left!` : `${product.stock} available`}
                    </span>
                  </>
                ) : (
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    Out of Stock
                  </Badge>
                )}
              </div>
              
              {/* Add to Cart Button */}
              <Button 
                className="w-full mb-4 py-6 text-lg"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              {/* Product Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="capitalize">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              {/* Specifications */}
              <div>
                <div className="flex items-center mb-4">
                  <Info className="h-5 w-5 mr-2 text-shop-indigo" />
                  <h2 className="text-lg font-semibold">Specifications</h2>
                </div>
                <dl className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-3 gap-4">
                      <dt className="text-sm font-medium text-gray-500">{key}</dt>
                      <dd className="text-sm text-gray-900 col-span-2">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          
          {/* Similar Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <ProductGrid products={similarProducts} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
