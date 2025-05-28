
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/products?category=${category.id}`}>
      <Card className="group overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-0">
        <div className="relative">
          <div className="aspect-square overflow-hidden">
            <img 
              src={category.image} 
              alt={category.name} 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">{category.name}</h3>
              <p className="text-sm text-gray-200 line-clamp-2 mt-1">{category.description}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
