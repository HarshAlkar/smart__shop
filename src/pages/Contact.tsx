
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    toast.success("Your message has been sent. We'll respond shortly!");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-shop-indigo py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions or feedback? We're here to help. Reach out to our team.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-shop-indigo/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-shop-indigo" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">
                    Our support team is available to help you with any questions.
                  </p>
                  <a href="mailto:support@smartshop.com" className="text-shop-indigo hover:underline">
                    support@smartshop.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-shop-indigo/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-shop-indigo" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-4">
                    Need immediate assistance? Call our customer service line.
                  </p>
                  <a href="tel:+18001234567" className="text-shop-indigo hover:underline">
                    +1 (800) 123-4567
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Mon-Fri, 9am-6pm EST
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-shop-indigo/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-shop-indigo" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-4">
                    Come visit our headquarters for in-person assistance.
                  </p>
                  <address className="text-shop-indigo not-italic">
                    123 Tech Way<br />
                    San Francisco, CA 94107
                  </address>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-6">
                  We value your feedback and are always ready to answer your questions. 
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-shop-indigo" />
                    Frequently Asked Questions
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="font-medium mb-1">How do AI recommendations work?</h4>
                      <p className="text-sm text-gray-600">
                        Our AI analyzes your preferences and shopping behavior to suggest products that match your taste.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-medium mb-1">What's your return policy?</h4>
                      <p className="text-sm text-gray-600">
                        We offer a 30-day return policy for most items. Visit our returns page for more information.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-medium mb-1">How can I track my order?</h4>
                      <p className="text-sm text-gray-600">
                        You can track your order by logging into your account and visiting the order history section.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-500 text-sm">
                  For press inquiries, please contact our PR team at 
                  <a href="mailto:press@smartshop.com" className="text-shop-indigo hover:underline ml-1">
                    press@smartshop.com
                  </a>
                </p>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {formSubmitted ? (
                      <div className="text-center py-8">
                        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                          <h3 className="font-semibold mb-1">Thank you for reaching out!</h3>
                          <p>We've received your message and will get back to you shortly.</p>
                        </div>
                        <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" required />
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" required />
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <Label htmlFor="phone">Phone (optional)</Label>
                          <Input id="phone" type="tel" />
                        </div>
                        
                        <div className="space-y-2 mb-6">
                          <Label>What can we help you with?</Label>
                          <RadioGroup defaultValue="question">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="question" id="question" />
                              <Label htmlFor="question">General Question</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="order" id="order" />
                              <Label htmlFor="order">Order Support</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="tech" id="tech" />
                              <Label htmlFor="tech">Technical Support</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="feedback" id="feedback" />
                              <Label htmlFor="feedback">Feedback</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        
                        <div className="space-y-2 mb-6">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" rows={5} required />
                        </div>
                        
                        <Button type="submit" className="w-full flex items-center justify-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Our Location</h2>
              <p className="text-gray-600">Visit our headquarters in San Francisco</p>
            </div>
            
            <div className="h-80 bg-gray-300 rounded-lg overflow-hidden">
              {/* This would be replaced with an actual map component in a real application */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <MapPin className="h-12 w-12 text-shop-indigo" />
                <span className="ml-2 text-lg text-gray-800">123 Tech Way, San Francisco, CA 94107</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
