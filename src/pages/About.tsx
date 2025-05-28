
import React from 'react';
import { ShoppingBag, Users, ShieldCheck, Truck, Gift, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-shop-indigo py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About SmartShop</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're revolutionizing online shopping with AI-powered recommendations
              that help you find exactly what you need, when you need it.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2023, SmartShop was born from a simple idea: shopping online should be as 
                  personalized and intuitive as shopping with a knowledgeable friend who understands your taste.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of tech enthusiasts and retail experts came together to create a platform that 
                  leverages the latest advancements in artificial intelligence to provide shoppers with 
                  recommendations that truly reflect their preferences and needs.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to offer a shopping experience that continuously learns and adapts 
                  to provide you with the most relevant products, saving you time and helping you discover 
                  items you'll love.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop" 
                  alt="SmartShop Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We're guided by a set of core principles that inform everything we do, 
                from product selection to customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-shop-indigo/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-shop-indigo" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customer-First</h3>
                  <p className="text-gray-600">
                    We prioritize your needs and preferences in every decision we make, 
                    striving to exceed your expectations at every touchpoint.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-shop-indigo/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-shop-indigo" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality & Trust</h3>
                  <p className="text-gray-600">
                    We carefully curate our products and ensure that our AI recommendations 
                    are transparent, helpful, and respect your privacy.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-shop-indigo/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Gift className="h-6 w-6 text-shop-indigo" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously improve our technology to create shopping experiences 
                    that are smarter, more intuitive, and truly personalized.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose SmartShop</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We're more than just another online store. Here's what sets us apart:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-shop-indigo/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-shop-indigo" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Recommendations</h3>
                <p className="text-gray-600">
                  Our AI learns from your preferences to suggest products you'll love.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-shop-indigo/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-shop-indigo" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
                <p className="text-gray-600">
                  Get your orders quickly with our efficient delivery network.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-shop-indigo/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-shop-indigo" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Shopping</h3>
                <p className="text-gray-600">
                  Shop with confidence knowing your data and transactions are protected.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-shop-indigo/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-shop-indigo" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our customer care team is always available to help with any issues.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-shop-indigo py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to experience smarter shopping?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have discovered the perfect products for their needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-white text-shop-indigo hover:bg-gray-100">
                  Start Shopping
                </Button>
              </Link>
              <Link to="/preferences">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Set Your Preferences
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
