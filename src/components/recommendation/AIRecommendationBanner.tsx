
import React from 'react';
import { Sparkles, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AIRecommendationBanner = () => {
  return (
    <div className="bg-gradient-to-r from-shop-indigo to-shop-teal rounded-lg overflow-hidden shadow-lg my-8">
      <div className="px-6 py-8 sm:p-10 text-white">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center">
              <Brain className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">AI-Powered Shopping</h3>
            </div>
            <div className="mt-4 max-w-xl">
              <p className="text-lg">
                Let our advanced AI analyze your preferences and shopping history to recommend products you'll love.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  <span>Personalized recommendations based on your preferences</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  <span>Discover products you might have missed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:flex-col sm:items-center sm:justify-center">
            <Link to="/preferences">
              <Button size="lg" className="bg-white text-shop-indigo hover:bg-gray-100">
                Update Your Preferences
              </Button>
            </Link>
            <Link to="/recommendations" className="mt-4 text-sm underline">
              View My Recommendations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendationBanner;
