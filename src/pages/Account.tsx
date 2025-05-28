
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Settings, CreditCard, Heart, LogOut, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';

// Mock data for dropdowns
const indiaStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry"
];

const majorIndianCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", 
  "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", 
  "Visakhapatnam", "Patna", "Vadodara", "Ludhiana", "Agra", "New Delhi", "Kochi", "Chandigarh",
  "Coimbatore", "Guwahati", "Varanasi", "Amritsar", "Mysore", "Udaipur", "Rishikesh", "Jaisalmer"
];

const countries = [
  "India", "United States", "United Kingdom", "Canada", "Australia", 
  "Germany", "France", "Japan", "China", "Brazil", "Italy", "Spain", 
  "Russia", "South Africa", "Singapore", "United Arab Emirates"
];

const Account = () => {
  const [profileImage, setProfileImage] = useState("");
  
  const handleSaveChanges = () => {
    toast.success("Profile updated successfully");
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string);
          toast.success("Profile picture updated");
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="md:col-span-1 border-2 border-shop-saffron/20">
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    {profileImage ? (
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={profileImage} alt="Profile picture" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="h-20 w-20 rounded-full bg-gradient-to-r from-shop-saffron to-shop-maroon flex items-center justify-center">
                        <User className="h-10 w-10 text-white" />
                      </div>
                    )}
                    <label htmlFor="profile-upload" className="absolute -bottom-2 -right-2 p-1 bg-white rounded-full border border-gray-200 cursor-pointer hover:bg-gray-50">
                      <Upload className="h-4 w-4 text-gray-600" />
                      <input 
                        id="profile-upload" 
                        type="file" 
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  <h2 className="text-xl font-semibold">John Doe</h2>
                  <p className="text-gray-500">john.doe@example.com</p>
                </div>
                
                <nav className="space-y-1">
                  <Link to="/account" className="flex items-center px-3 py-2 text-white bg-gradient-to-r from-shop-saffron to-shop-maroon rounded-md">
                    <User className="mr-3 h-5 w-5" />
                    <span>Profile</span>
                  </Link>
                  <Link to="/order-history" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <Package className="mr-3 h-5 w-5" />
                    <span>Order History</span>
                  </Link>
                  <Link to="/account" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <Settings className="mr-3 h-5 w-5" />
                    <span>Account Settings</span>
                  </Link>
                  <Link to="/account" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <CreditCard className="mr-3 h-5 w-5" />
                    <span>Payment Methods</span>
                  </Link>
                  <Link to="/account" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <Heart className="mr-3 h-5 w-5" />
                    <span>Wishlist</span>
                  </Link>
                  <div className="pt-6">
                    <Button variant="outline" className="w-full flex items-center justify-center text-red-500 hover:text-red-700 hover:bg-red-50 border-shop-saffron/30">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </nav>
              </CardContent>
            </Card>
            
            <div className="md:col-span-3">
              <Card className="indian-pattern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="chakra-border p-1 bg-white/80 rounded-md">Edit Profile</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="profile">
                    <TabsList className="mb-6 bg-gradient-to-r from-shop-saffron via-white to-shop-chakra">
                      <TabsTrigger value="profile">Personal Info</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                      <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="profile">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" className="border-shop-saffron/30" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" className="border-shop-saffron/30" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" className="border-shop-saffron/30" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" defaultValue="+91 98765 43210" className="border-shop-saffron/30" />
                        </div>
                        <div className="col-span-2 space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" defaultValue="123 Rajpath Avenue" className="border-shop-saffron/30" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Select defaultValue="New Delhi">
                            <SelectTrigger className="border-shop-saffron/30">
                              <SelectValue placeholder="Select city" />
                            </SelectTrigger>
                            <SelectContent>
                              {majorIndianCities.map(city => (
                                <SelectItem key={city} value={city}>{city}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Select defaultValue="Delhi">
                            <SelectTrigger className="border-shop-saffron/30">
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              {indiaStates.map(state => (
                                <SelectItem key={state} value={state}>{state}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">PIN Code</Label>
                          <Input id="zip" defaultValue="110001" className="border-shop-saffron/30" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Select defaultValue="India">
                            <SelectTrigger className="border-shop-saffron/30">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              {countries.map(country => (
                                <SelectItem key={country} value={country}>{country}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <Button 
                          onClick={handleSaveChanges} 
                          className="bg-gradient-to-r from-shop-saffron to-shop-chakra hover:opacity-90 transition-opacity"
                        >
                          Save Changes
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="password">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input id="currentPassword" type="password" className="border-shop-saffron/30" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input id="newPassword" type="password" className="border-shop-saffron/30" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" className="border-shop-saffron/30" />
                        </div>
                        
                        <div className="mt-6 flex justify-end">
                          <Button 
                            onClick={() => toast.success("Password updated successfully")}
                            className="bg-gradient-to-r from-shop-saffron to-shop-chakra hover:opacity-90 transition-opacity"
                          >
                            Update Password
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="notifications">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Email Notifications</h3>
                            <p className="text-sm text-gray-500">Receive emails about your orders and account activities</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" className="border-shop-saffron/30">Off</Button>
                            <Button size="sm" className="bg-shop-saffron text-white">On</Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Marketing Emails</h3>
                            <p className="text-sm text-gray-500">Receive emails about new products, deals and promotions</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" className="bg-shop-saffron text-white">Off</Button>
                            <Button variant="outline" size="sm" className="border-shop-saffron/30">On</Button>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-end">
                          <Button 
                            onClick={() => toast.success("Notification preferences updated")}
                            className="bg-gradient-to-r from-shop-saffron to-shop-chakra hover:opacity-90 transition-opacity"
                          >
                            Save Preferences
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
