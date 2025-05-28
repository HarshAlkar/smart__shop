
import React, { useState } from 'react';
import { Product } from '@/lib/data';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface ProductGridProps {
  products: Product[];
  featuredProductId?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, featuredProductId }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const navigate = useNavigate();
  
  const toggleProductSelection = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(prev => prev.filter(id => id !== productId));
    } else {
      if (selectedProducts.length >= 3) {
        toast.error("You can only compare up to 3 products at a time");
        return;
      }
      setSelectedProducts(prev => [...prev, productId]);
    }
  };
  
  const handleCompare = () => {
    if (selectedProducts.length < 2) {
      toast.error("Please select at least 2 products to compare");
      return;
    }
    
    // In a real app, we would pass the selected product IDs to the compare page via URL or state
    // For now, we'll just navigate to the compare page
    navigate('/compare');
  };
  
  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No products found</p>
      </div>
    );
  }

  return (
    <div>
      {selectedProducts.length > 0 && (
        <div className="flex justify-between items-center mb-6 p-3 bg-gray-50 rounded-lg">
          <div>
            <span className="text-sm text-gray-600">
              {selectedProducts.length} product{selectedProducts.length > 1 ? 's' : ''} selected
            </span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleCompare}
            className="flex items-center"
            disabled={selectedProducts.length < 2}
          >
            <SlidersHorizontal className="mr-1 h-4 w-4" />
            Compare Selected
          </Button>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            featured={product.id === featuredProductId}
            isSelected={selectedProducts.includes(product.id)}
            onToggleSelect={() => toggleProductSelection(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
