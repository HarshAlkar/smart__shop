
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import PreferenceForm from '@/components/recommendation/PreferenceForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Preferences = () => {
  const navigate = useNavigate();
  const [isUpdated, setIsUpdated] = useState(false);
  
  const handleSavePreferences = () => {
    setIsUpdated(true);
    
    // After 2 seconds, redirect to recommendations
    setTimeout(() => {
      navigate('/recommendations');
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 text-center">
            <Brain className="h-12 w-12 text-shop-indigo mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Shopping Preferences</h1>
            <p className="text-gray-600">
              Help our AI understand your shopping preferences for more accurate product recommendations
            </p>
          </div>
          
          {isUpdated ? (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold">Preferences Saved!</h3>
                  <p>Redirecting you to your new recommendations...</p>
                </div>
                <p className="text-gray-600">
                  Our AI is analyzing your preferences to provide better recommendations.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Your Shopping Profile</CardTitle>
                <CardDescription>
                  Tell us what you're looking for to receive tailored recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PreferenceForm onSavePreferences={handleSavePreferences} />
              </CardContent>
            </Card>
          )}
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">How Your Data is Used</h3>
            <p className="text-gray-600 mb-4">
              We use your preferences to provide personalized product recommendations. 
              Your data is stored locally and is only used to enhance your shopping experience.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-shop-indigo rounded-full mr-2"></span>
                Recommendations are generated based on your stated preferences
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-shop-indigo rounded-full mr-2"></span>
                You can update or remove your preferences at any time
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-shop-indigo rounded-full mr-2"></span>
                We don't share your preferences with third parties
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Preferences;
