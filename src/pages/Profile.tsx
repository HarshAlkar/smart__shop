
import React, { useState } from 'react';
import { User, Bell, Heart, History, LogOut, Settings, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';

// Mock user data
const userData = {
  name: 'Alex Morgan',
  email: 'alex.morgan@example.com',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  joined: 'January 2023',
  address: {
    street: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94103',
    country: 'United States'
  },
  notifications: {
    orderUpdates: true,
    promotions: false,
    newProducts: true,
    reviews: false
  }
};

const Profile = () => {
  const [user, setUser] = useState(userData);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user.name,
    email: user.email,
    street: user.address.street,
    city: user.address.city,
    state: user.address.state,
    zip: user.address.zip,
    country: user.address.country
  });
  
  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSaveProfile = () => {
    setUser({
      ...user,
      name: editForm.name,
      email: editForm.email,
      address: {
        street: editForm.street,
        city: editForm.city,
        state: editForm.state,
        zip: editForm.zip,
        country: editForm.country
      }
    });
    
    setIsEditing(false);
    toast.success('Profile updated successfully');
  };
  
  const toggleNotification = (type: keyof typeof user.notifications) => {
    setUser(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
    
    toast.success('Notification preferences updated');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">My Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center pb-6">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-gray-500 text-sm">Member since {user.joined}</p>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Profile Information
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Heart className="mr-2 h-4 w-4" />
                      My Wishlist
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <History className="mr-2 h-4 w-4" />
                      Order History
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Account Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <Tabs defaultValue="profile">
                <TabsList className="mb-6">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="addresses">Addresses</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="space-y-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-xl">Profile Information</CardTitle>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        {isEditing ? 'Cancel' : (
                          <>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Profile
                          </>
                        )}
                      </Button>
                    </CardHeader>
                    <CardContent>
                      {isEditing ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Full Name</label>
                              <Input
                                name="name"
                                value={editForm.name}
                                onChange={handleEditFormChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Email</label>
                              <Input
                                name="email"
                                type="email"
                                value={editForm.email}
                                onChange={handleEditFormChange}
                              />
                            </div>
                          </div>
                          
                          <Button 
                            className="mt-4"
                            onClick={handleSaveProfile}
                          >
                            Save Changes
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                              <p>{user.name}</p>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-500">Email</h3>
                              <p>{user.email}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Account Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Password</h3>
                          <Button variant="outline">Change Password</Button>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium mb-2">Two-Factor Authentication</h3>
                          <Button variant="outline">Enable 2FA</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="addresses" className="space-y-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-xl">Shipping Address</CardTitle>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        {isEditing ? 'Cancel' : (
                          <>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Address
                          </>
                        )}
                      </Button>
                    </CardHeader>
                    <CardContent>
                      {isEditing ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2 sm:col-span-2">
                              <label className="text-sm font-medium">Street Address</label>
                              <Input
                                name="street"
                                value={editForm.street}
                                onChange={handleEditFormChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">City</label>
                              <Input
                                name="city"
                                value={editForm.city}
                                onChange={handleEditFormChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">State</label>
                              <Input
                                name="state"
                                value={editForm.state}
                                onChange={handleEditFormChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">ZIP Code</label>
                              <Input
                                name="zip"
                                value={editForm.zip}
                                onChange={handleEditFormChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Country</label>
                              <Input
                                name="country"
                                value={editForm.country}
                                onChange={handleEditFormChange}
                              />
                            </div>
                          </div>
                          
                          <Button 
                            className="mt-4"
                            onClick={handleSaveProfile}
                          >
                            Save Address
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <p>{user.address.street}</p>
                          <p>{user.address.city}, {user.address.state} {user.address.zip}</p>
                          <p>{user.address.country}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  <Button>Add New Address</Button>
                </TabsContent>
                
                <TabsContent value="notifications" className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Order Updates</h3>
                            <p className="text-sm text-gray-500">Receive updates on your order status</p>
                          </div>
                          <Switch 
                            checked={user.notifications.orderUpdates}
                            onCheckedChange={() => toggleNotification('orderUpdates')}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Promotions</h3>
                            <p className="text-sm text-gray-500">Receive special offers and discounts</p>
                          </div>
                          <Switch 
                            checked={user.notifications.promotions}
                            onCheckedChange={() => toggleNotification('promotions')}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">New Products</h3>
                            <p className="text-sm text-gray-500">Be the first to know about new products</p>
                          </div>
                          <Switch 
                            checked={user.notifications.newProducts}
                            onCheckedChange={() => toggleNotification('newProducts')}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Reviews</h3>
                            <p className="text-sm text-gray-500">Get notified about new product reviews</p>
                          </div>
                          <Switch 
                            checked={user.notifications.reviews}
                            onCheckedChange={() => toggleNotification('reviews')}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
