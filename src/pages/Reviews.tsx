
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageSquare, ArrowLeft, ThumbsUp, ThumbsDown, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { products } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock reviews data
const mockReviews = [
  {
    id: 'rev-1',
    productId: 'prod-1',
    userName: 'Alex Johnson',
    avatar: null,
    rating: 5,
    title: 'Absolutely fantastic product!',
    comment: "This product exceeded all my expectations. The quality is excellent, and it works exactly as described. I highly recommend it to anyone looking for this type of product.",
    date: '2023-06-15',
    helpful: 24,
    notHelpful: 2
  },
  {
    id: 'rev-2',
    productId: 'prod-1',
    userName: 'Jamie Smith',
    avatar: 'https://randomuser.me/api/portraits/women/54.jpg',
    rating: 4,
    title: 'Great product with minor issues',
    comment: "Overall, I'm very satisfied with this purchase. The quality is good, and it performs well. There are a few minor issues, but nothing that significantly impacts the functionality.",
    date: '2023-05-22',
    helpful: 18,
    notHelpful: 3
  },
  {
    id: 'rev-3',
    productId: 'prod-2',
    userName: 'Taylor Reed',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 3,
    title: 'Decent but has room for improvement',
    comment: "The product is decent for the price. It does what it's supposed to do, but there are definitely areas where it could be improved. The build quality feels a bit flimsy, and the user manual could be clearer.",
    date: '2023-07-03',
    helpful: 12,
    notHelpful: 5
  },
  {
    id: 'rev-4',
    productId: 'prod-3',
    userName: 'Casey Morgan',
    avatar: null,
    rating: 2,
    title: 'Disappointed with the quality',
    comment: "I was really excited to receive this product, but I'm quite disappointed with the quality. It doesn't seem as durable as I expected, and some features don't work as well as advertised.",
    date: '2023-04-18',
    helpful: 8,
    notHelpful: 1
  },
  {
    id: 'rev-5',
    productId: 'prod-4',
    userName: 'Jordan Williams',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    rating: 5,
    title: "Best purchase I've made this year",
    comment: "I can't praise this product enough! It's well-designed, easy to use, and does everything I need it to do. The customer service is also excellent. Definitely worth the investment.",
    date: '2023-06-30',
    helpful: 31,
    notHelpful: 0
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [reviewsData, setReviewsData] = useState(mockReviews);
  
  // Filter reviews by rating
  const filteredReviews = selectedRating === 'all'
    ? reviewsData
    : reviewsData.filter(review => review.rating === parseInt(selectedRating));
  
  // Sort reviews
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === 'highest') {
      return b.rating - a.rating;
    } else if (sortBy === 'lowest') {
      return a.rating - b.rating;
    } else if (sortBy === 'helpful') {
      return b.helpful - a.helpful;
    }
    return 0;
  });
  
  const handleHelpful = (reviewId: string, isHelpful: boolean) => {
    setReviewsData(prevReviews => 
      prevReviews.map(review => 
        review.id === reviewId
          ? {
              ...review,
              helpful: isHelpful ? review.helpful + 1 : review.helpful,
              notHelpful: !isHelpful ? review.notHelpful + 1 : review.notHelpful
            }
          : review
      )
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/products">
              <Button variant="ghost" size="sm" className="group flex items-center text-gray-600">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Products
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center mb-8">
            <MessageSquare className="h-6 w-6 text-shop-indigo mr-2" />
            <h1 className="text-2xl font-bold">Customer Reviews</h1>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">Filter by rating:</span>
              <div className="flex space-x-2">
                <Button 
                  variant={selectedRating === 'all' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedRating('all')}
                >
                  All
                </Button>
                {[5, 4, 3, 2, 1].map(rating => (
                  <Button
                    key={rating}
                    variant={selectedRating === rating.toString() ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedRating(rating.toString())}
                    className="flex items-center"
                  >
                    {rating} <Star className="h-3 w-3 ml-1 fill-current" />
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="highest">Highest Rated</SelectItem>
                  <SelectItem value="lowest">Lowest Rated</SelectItem>
                  <SelectItem value="helpful">Most Helpful</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Reviews List */}
          <div className="space-y-6">
            {sortedReviews.length > 0 ? (
              sortedReviews.map(review => {
                const product = products.find(p => p.id === review.productId);
                return (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={review.avatar || ''} alt={review.userName} />
                          <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{review.userName}</div>
                          <div className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <RatingStars rating={review.rating} />
                    </div>
                    
                    {product && (
                      <Link to={`/product/${product.id}`} className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-md overflow-hidden mr-3">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm text-gray-600 hover:text-shop-indigo">
                          Review for: <span className="font-medium">{product.name}</span>
                        </div>
                      </Link>
                    )}
                    
                    <h3 className="text-lg font-semibold mb-2">{review.title}</h3>
                    <p className="text-gray-700 mb-4">{review.comment}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button 
                          className="flex items-center text-gray-500 hover:text-shop-indigo text-sm"
                          onClick={() => handleHelpful(review.id, true)}
                        >
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                        <button 
                          className="flex items-center text-gray-500 hover:text-shop-indigo text-sm"
                          onClick={() => handleHelpful(review.id, false)}
                        >
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          <span>Not helpful ({review.notHelpful})</span>
                        </button>
                      </div>
                      
                      <Badge 
                        variant="outline" 
                        className={`
                          ${review.rating >= 4 ? 'bg-green-50 text-green-700 border-green-200' : 
                            review.rating >= 3 ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 
                            'bg-red-50 text-red-700 border-red-200'}
                        `}
                      >
                        {review.rating >= 4 ? 'Recommended' : 
                          review.rating >= 3 ? 'Mixed' : 
                          'Not Recommended'}
                      </Badge>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16">
                <h2 className="text-xl font-semibold mb-2">No reviews found</h2>
                <p className="text-gray-600">
                  No reviews match your current filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Reviews;
