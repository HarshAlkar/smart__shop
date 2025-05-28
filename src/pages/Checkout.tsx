
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, CheckCircle, QrCode, Truck, Wallet, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const handlePlaceOrder = () => {
    setIsProcessing(true);
    toast.info("Processing your order...");
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      toast.success("Your order has been placed successfully!");
      // Redirect to confirmation after 2 seconds
      setTimeout(() => {
        navigate('/order-history');
      }, 2000);
    }, 1500);
  };
  
  if (isCompleted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <Card className="max-w-md w-full">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Order Completed!</h2>
              <p className="text-gray-600 mb-6">
                Your order has been placed successfully. You will receive a confirmation email shortly.
              </p>
              <Button 
                className="w-full mb-4"
                onClick={() => navigate('/order-history')}
              >
                View Order History
              </Button>
              <Link to="/" className="text-shop-indigo hover:underline">
                Return to Home
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last Name" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Street Address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">PIN Code</Label>
                      <Input id="zip" placeholder="PIN Code" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="State" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" placeholder="Country" defaultValue="India" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Phone Number" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email for order confirmation" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="card" onValueChange={setPaymentMethod} className="mb-4">
                    <div className="flex items-center space-x-2 border rounded-lg p-4 mb-3 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center cursor-pointer">
                        <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
                        <span>Credit/Debit Card</span>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border rounded-lg p-4 mb-3 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex items-center cursor-pointer">
                        <QrCode className="h-5 w-5 mr-2 text-gray-600" />
                        <span>UPI/QR Payment</span>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border rounded-lg p-4 mb-3 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center cursor-pointer">
                        <Truck className="h-5 w-5 mr-2 text-gray-600" />
                        <span>Cash on Delivery</span>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value="wallet" id="wallet" />
                      <Label htmlFor="wallet" className="flex items-center cursor-pointer">
                        <Wallet className="h-5 w-5 mr-2 text-gray-600" />
                        <span>Wallet/Net Banking</span>
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === 'card' && (
                    <div className="space-y-4 mt-4 p-4 border rounded-md">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiration">Expiration Date</Label>
                          <Input id="expiration" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">Security Code</Label>
                          <Input id="cvv" placeholder="CVV" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <Input id="nameOnCard" placeholder="Name as it appears on card" />
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'upi' && (
                    <div className="p-4 border rounded-md mt-4">
                      <div className="text-center mb-4">
                        <div className="bg-gray-100 p-4 inline-block rounded-lg mb-3">
                          <QrCode className="h-32 w-32 mx-auto text-gray-600" />
                        </div>
                        <p className="font-medium">Scan QR code to pay</p>
                        <p className="text-sm text-gray-500 mt-1">Or use UPI ID</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="upiId">UPI ID</Label>
                          <Input id="upiId" placeholder="yourname@upi" />
                        </div>
                        <Button className="w-full">Verify & Pay</Button>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'cod' && (
                    <div className="p-4 border rounded-md mt-4">
                      <div className="flex items-start mb-4">
                        <Truck className="h-8 w-8 text-shop-indigo mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Cash on Delivery</h3>
                          <p className="text-sm text-gray-500">Pay with cash when your order is delivered</p>
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-md text-sm flex items-start">
                        <ShieldCheck className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                        <span className="text-yellow-800">Additional COD handling fee of ₹40 will be applied</span>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'wallet' && (
                    <div className="p-4 border rounded-md mt-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                          {['Paytm', 'PhonePe', 'Google Pay', 'Amazon Pay', 'Airtel Money', 'Freecharge'].map((wallet) => (
                            <Button key={wallet} variant="outline" className="py-6">
                              {wallet}
                            </Button>
                          ))}
                        </div>
                        <Separator className="my-2" />
                        <div>
                          <Label className="mb-2 block">Select Bank for Net Banking</Label>
                          <select className="w-full p-2 border rounded-md">
                            <option>Select Bank</option>
                            <option>State Bank of India</option>
                            <option>HDFC Bank</option>
                            <option>ICICI Bank</option>
                            <option>Axis Bank</option>
                            <option>Kotak Mahindra Bank</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Wireless Headphones × 1</span>
                        <span>₹9,999</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Smart Watch × 2</span>
                        <span>₹19,998</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>₹29,997</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">GST (18%)</span>
                        <span>₹5,399</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>₹150</span>
                      </div>
                      {paymentMethod === 'cod' && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">COD Fee</span>
                          <span>₹40</span>
                        </div>
                      )}
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-shop-indigo">
                        ₹{paymentMethod === 'cod' ? '35,586' : '35,546'}
                      </span>
                    </div>
                    
                    <Button 
                      className="w-full mt-4" 
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Place Order"}
                    </Button>
                    
                    <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
                      <ShieldCheck className="h-4 w-4 mr-1" />
                      Secure payment processing
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By placing your order, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="pb-4 pt-0">
                  <Link to="/cart" className="text-shop-indigo hover:underline text-sm w-full text-center">
                    ← Return to Cart
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
