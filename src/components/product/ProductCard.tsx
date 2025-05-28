
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, IndianRupee } from 'lucide-react';
import { Product } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
  isSelected?: boolean;
  onToggleSelect?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  featured = false,
  isSelected = false,
  onToggleSelect
}) => {
  return (
    <Card className={`overflow-hidden h-full transition-all duration-300 hover:shadow-lg ${featured ? 'border-shop-teal border-2' : ''} ${isSelected ? 'ring-2 ring-shop-indigo' : ''}`}>
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-shop-teal hover:bg-shop-teal/90">
            Featured
          </Badge>
        )}
        {product.stock < 10 && (
          <Badge variant="destructive" className="absolute top-2 left-2">
            Low Stock
          </Badge>
        )}
        {isSelected && (
          <Badge className="absolute bottom-2 right-2 bg-shop-indigo">
            <Check className="h-3 w-3 mr-1" /> Selected
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-500 capitalize">{product.category}</span>
        </div>
        <h3 className="font-semibold text-lg mb-1 text-gray-900">{product.name}</h3>
        <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <span className="text-lg font-bold text-shop-indigo flex items-center">
          <IndianRupee className="h-4 w-4 mr-1" />
          {product.price.toFixed(2)}
        </span>
        <div className="flex space-x-2">
          {onToggleSelect && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleSelect();
              }}
              className={`px-2 py-1 rounded-md text-sm border ${
                isSelected 
                  ? 'bg-shop-indigo text-white border-shop-indigo' 
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {isSelected ? 'Selected' : 'Select'}
            </button>
          )}
          <Link 
            to={`/product/${product.id}`}
            className="px-3 py-1.5 bg-shop-indigo text-white rounded-md text-sm hover:bg-shop-indigo/90 transition-colors"
          >
            View Details
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
