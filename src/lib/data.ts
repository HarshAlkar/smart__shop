
// Mock data for the Smart Shopping Advisor application

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  tags: string[];
  image: string;
  specifications: Record<string, string>;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface UserPreference {
  category: string;
  priceRange: [number, number];
  brands: string[];
  features: string[];
}

// Mock products
export const products: Product[] = [
  {
    id: 'p1',
    name: 'Ultra HD Smart TV',
    description: 'Experience crystal clear visuals with this 55-inch Ultra HD Smart TV. Perfect for movie nights and gaming sessions.',
    price: 799.99,
    rating: 4.7,
    category: 'electronics',
    tags: ['tv', 'entertainment', 'smart home'],
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop',
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '3840 x 2160 (4K)',
      'HDR': 'Yes',
      'Smart Features': 'Voice control, App support',
      'Connections': 'HDMI x3, USB x2, Ethernet',
    },
    stock: 15
  },
  {
    id: 'p2',
    name: 'Professional Digital Camera',
    description: 'Capture stunning photos and videos with this professional-grade digital camera with 24MP sensor and 4K recording.',
    price: 1299.99,
    rating: 4.9,
    category: 'electronics',
    tags: ['camera', 'photography', 'professional'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2073&auto=format&fit=crop',
    specifications: {
      'Sensor': '24.2MP APS-C CMOS',
      'Video': '4K Ultra HD',
      'ISO Range': '100-51200',
      'Viewfinder': 'OLED Electronic Viewfinder',
      'Battery Life': 'Approx. 500 shots',
    },
    stock: 8
  },
  {
    id: 'p3',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Immerse yourself in music with these premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    price: 299.99,
    rating: 4.6,
    category: 'electronics',
    tags: ['audio', 'headphones', 'wireless'],
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop',
    specifications: {
      'Type': 'Over-ear',
      'Noise Cancellation': 'Active (ANC)',
      'Battery Life': '30 hours',
      'Bluetooth': '5.0',
      'Controls': 'Touch and voice',
    },
    stock: 22
  },
  {
    id: 'p4',
    name: 'Smart Fitness Tracker',
    description: 'Track your health and fitness metrics with this advanced smartwatch featuring heart rate monitoring and GPS.',
    price: 149.99,
    rating: 4.5,
    category: 'wearables',
    tags: ['fitness', 'smartwatch', 'health'],
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e97fd29?q=80&w=2088&auto=format&fit=crop',
    specifications: {
      'Display': '1.3" AMOLED',
      'Sensors': 'Heart rate, GPS, Accelerometer',
      'Battery Life': '7 days',
      'Water Resistance': '5 ATM',
      'Compatibility': 'iOS and Android',
    },
    stock: 30
  },
  {
    id: 'p5',
    name: 'High-Performance Gaming Laptop',
    description: 'Experience smooth gaming with this powerful laptop featuring the latest GPU and a high-refresh rate display.',
    price: 1799.99,
    rating: 4.8,
    category: 'computers',
    tags: ['gaming', 'laptop', 'high-performance'],
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop',
    specifications: {
      'Processor': 'Intel Core i7-12700H',
      'Graphics': 'NVIDIA RTX 3080',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Display': '15.6" 165Hz QHD',
    },
    stock: 5
  },
  {
    id: 'p6',
    name: 'Smart Home Security System',
    description: 'Keep your home safe with this comprehensive security system including cameras, sensors, and smart alerts.',
    price: 399.99,
    rating: 4.4,
    category: 'smart home',
    tags: ['security', 'cameras', 'sensors'],
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?q=80&w=2070&auto=format&fit=crop',
    specifications: {
      'Components': 'Base station, 4 cameras, 2 motion sensors',
      'Resolution': '1080p HD',
      'Storage': 'Cloud + 64GB local',
      'Connectivity': 'Wi-Fi, Ethernet',
      'Power': 'Wired with battery backup',
    },
    stock: 12
  },
  {
    id: 'p7',
    name: 'Professional Blender',
    description: 'Make perfect smoothies, soups, and more with this high-powered professional blender with multiple settings.',
    price: 249.99,
    rating: 4.7,
    category: 'kitchen',
    tags: ['appliance', 'cooking', 'blender'],
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=2070&auto=format&fit=crop',
    specifications: {
      'Power': '1500W',
      'Capacity': '64 oz',
      'Material': 'BPA-free Tritan',
      'Programs': '5 preset programs',
      'Warranty': '7 years',
    },
    stock: 18
  },
  {
    id: 'p8',
    name: 'Ergonomic Office Chair',
    description: 'Work comfortably with this ergonomic office chair featuring lumbar support and adjustable height.',
    price: 349.99,
    rating: 4.5,
    category: 'furniture',
    tags: ['office', 'chair', 'ergonomic'],
    image: 'https://images.unsplash.com/photo-1505797149-43e9ca6b75e3?q=80&w=2069&auto=format&fit=crop',
    specifications: {
      'Material': 'Mesh and premium foam',
      'Adjustments': 'Height, armrests, recline',
      'Lumbar Support': 'Yes, adjustable',
      'Weight Capacity': '300 lbs',
      'Assembly': 'Required, tools included',
    },
    stock: 9
  }
];

// Categories
export const categories: Category[] = [
  {
    id: 'c1',
    name: 'Electronics',
    description: 'TVs, cameras, audio equipment, and more',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2101&auto=format&fit=crop'
  },
  {
    id: 'c2',
    name: 'Computers',
    description: 'Laptops, desktops, and computer accessories',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2126&auto=format&fit=crop'
  },
  {
    id: 'c3',
    name: 'Wearables',
    description: 'Smartwatches, fitness trackers, and wearable technology',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop'
  },
  {
    id: 'c4',
    name: 'Smart Home',
    description: 'Smart speakers, security systems, and home automation',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'c5',
    name: 'Kitchen',
    description: 'Appliances and tools for your kitchen',
    image: 'https://images.unsplash.com/photo-1556910585-09baa3a3998e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'c6',
    name: 'Furniture',
    description: 'Home and office furniture',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2074&auto=format&fit=crop'
  }
];

// Function to get recommended products (mock implementation)
export function getRecommendedProducts(preferences?: UserPreference): Product[] {
  // In a real application, this would use AI to analyze preferences and return personalized recommendations
  // For now, we'll just return a subset of products as a simulation
  
  if (!preferences) {
    // If no preferences, return highest rated products
    return [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  }
  
  // Filter by category if specified
  let filtered = products;
  if (preferences.category) {
    filtered = filtered.filter(p => p.category === preferences.category.toLowerCase());
  }
  
  // Filter by price range if specified
  if (preferences.priceRange) {
    filtered = filtered.filter(p => 
      p.price >= preferences.priceRange[0] && 
      p.price <= preferences.priceRange[1]
    );
  }
  
  // If we have less than 2 products after filtering, add more recommendations
  if (filtered.length < 2) {
    const additional = products
      .filter(p => !filtered.some(f => f.id === p.id))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4 - filtered.length);
    
    filtered = [...filtered, ...additional];
  }
  
  return filtered.slice(0, 4);
}

// Search function
export function searchProducts(query: string): Product[] {
  if (!query || query.trim() === '') return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return products.filter(product => 
    product.name.toLowerCase().includes(normalizedQuery) ||
    product.description.toLowerCase().includes(normalizedQuery) ||
    product.category.toLowerCase().includes(normalizedQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
  );
}
