
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronRight, Search, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock order data
const orders = [
  {
    id: 'ORD-2023-1234',
    date: '2023-10-15',
    status: 'delivered',
    total: 249.97,
    items: [
      { id: 'prod-1', name: 'Wireless Bluetooth Headphones', quantity: 1, price: 129.99 },
      { id: 'prod-3', name: 'Portable Bluetooth Speaker', quantity: 1, price: 89.99 }
    ]
  },
  {
    id: 'ORD-2023-1156',
    date: '2023-09-28',
    status: 'processing',
    total: 399.98,
    items: [
      { id: 'prod-2', name: 'Smart Watch with Heart Rate Monitor', quantity: 2, price: 199.99 }
    ]
  },
  {
    id: 'ORD-2023-0987',
    date: '2023-08-12',
    status: 'delivered',
    total: 159.99,
    items: [
      { id: 'prod-5', name: 'Wireless Charging Pad', quantity: 1, price: 49.99 },
      { id: 'prod-7', name: 'Smart Home Security Camera', quantity: 1, price: 110.00 }
    ]
  }
];

const OrderStatus = ({ status }: { status: string }) => {
  switch (status) {
    case 'delivered':
      return <Badge className="bg-green-500">Delivered</Badge>;
    case 'processing':
      return <Badge className="bg-blue-500">Processing</Badge>;
    case 'shipped':
      return <Badge className="bg-purple-500">Shipped</Badge>;
    case 'cancelled':
      return <Badge className="bg-red-500">Cancelled</Badge>;
    default:
      return <Badge className="bg-gray-500">{status}</Badge>;
  }
};

const OrderHistory = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedOrder, setExpandedOrder] = React.useState<string | null>(null);
  
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const toggleOrderDetails = (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Order History</h1>
            <div className="relative w-full md:w-80">
              <Input
                type="text"
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {filteredOrders.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">No Orders Found</h2>
                <p className="text-gray-600 mb-6">
                  {searchQuery 
                    ? `No orders match your search for "${searchQuery}"`
                    : "You haven't placed any orders yet."}
                </p>
                <Link to="/products">
                  <Button>Start Shopping</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredOrders.map((order) => (
                <Card key={order.id}>
                  <CardHeader className="p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-lg mb-1">{order.id}</CardTitle>
                      <p className="text-sm text-gray-500">
                        Ordered on {new Date(order.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                      <OrderStatus status={order.status} />
                      <p className="font-medium">${order.total.toFixed(2)}</p>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => toggleOrderDetails(order.id)}
                      >
                        <ChevronRight className={`h-5 w-5 transition-transform ${expandedOrder === order.id ? 'rotate-90' : ''}`} />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {expandedOrder === order.id && (
                    <CardContent className="p-4 md:p-6 pt-0 border-t">
                      <div className="space-y-4">
                        <h3 className="font-medium">Order Items</h3>
                        <div className="space-y-3">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Link to={`/product/${item.id}`} className="flex items-center hover:text-shop-indigo">
                                  <Eye className="h-4 w-4 mr-2" />
                                  <span>{item.name}</span>
                                </Link>
                                <span className="text-gray-500 ml-2">× {item.quantity}</span>
                              </div>
                              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between pt-4 border-t text-sm">
                          <span className="text-gray-600">Subtotal</span>
                          <span>${order.total.toFixed(2)}</span>
                        </div>
                        
                        <div className="pt-4 flex justify-end space-x-4">
                          <Button variant="outline" size="sm">
                            Track Order
                          </Button>
                          <Button size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need help with an order?</p>
            <Link to="/contact">
              <Button variant="outline">Contact Support</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderHistory;
