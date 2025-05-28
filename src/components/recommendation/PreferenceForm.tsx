
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { categories } from '@/lib/data';

interface PreferenceFormProps {
  onSavePreferences: () => void;
}

const PreferenceForm: React.FC<PreferenceFormProps> = ({ onSavePreferences }) => {
  const [categorySelection, setCategorySelection] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  
  // Mock brand and feature data
  const availableBrands = ["TechPro", "HomeEssentials", "EliteGear", "SmartLife", "PremiumChoice"];
  const availableFeatures = ["Wireless", "Smart Home Compatible", "Energy Efficient", "High Performance", "Compact Design"];
  
  const handleBrandToggle = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };
  
  const handleFeatureToggle = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to an API or local storage
    const preferences = {
      category: categorySelection,
      priceRange,
      brands: selectedBrands,
      features: selectedFeatures
    };
    
    // For demo purposes, save to localStorage
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    
    toast.success('Your preferences have been saved!');
    onSavePreferences();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-lg font-medium">Shopping Preferences</h3>
        <p className="text-sm text-gray-500">Help us understand what you're looking for to provide better recommendations.</p>
      </div>
      
      <Separator />
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="category">Preferred Category</Label>
          <select
            id="category"
            className="w-full p-2 mt-1 border rounded-md"
            value={categorySelection}
            onChange={(e) => setCategorySelection(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <Label>Price Range (${priceRange[0]} - ${priceRange[1]})</Label>
          <Slider
            className="mt-2"
            min={0}
            max={2000}
            step={50}
            value={priceRange}
            onValueChange={setPriceRange}
          />
          <div className="flex justify-between mt-1">
            <span className="text-sm text-gray-500">$0</span>
            <span className="text-sm text-gray-500">$2000</span>
          </div>
        </div>
        
        <div>
          <Label>Preferred Brands</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {availableBrands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => handleBrandToggle(brand)}
                />
                <Label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <Label>Important Features</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {availableFeatures.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={`feature-${feature}`}
                  checked={selectedFeatures.includes(feature)}
                  onCheckedChange={() => handleFeatureToggle(feature)}
                />
                <Label htmlFor={`feature-${feature}`} className="text-sm cursor-pointer">
                  {feature}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Button type="submit" className="w-full">Save Preferences</Button>
    </form>
  );
};

export default PreferenceForm;
