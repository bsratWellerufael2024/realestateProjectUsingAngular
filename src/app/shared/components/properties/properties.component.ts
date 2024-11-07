import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  type: string;
  status: 'For Sale' | 'For Rent';
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  priceType: 'sale' | 'rent';
}

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
})
export class PropertiesComponent implements OnInit {
  // Filter models
  searchLocation: string = '';
  selectedPriceRange: string = '';
  selectedPropertyType: string = '';

  // Properties array
  allProperties: Property[] = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills',
      price: 1250000,
      type: 'villa',
      status: 'For Sale',
      beds: 4,
      baths: 3,
      sqft: 2500,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
      priceType: 'sale',
    },
    {
      id: 2,
      title: 'Cozy Downtown Apartment',
      location: 'Downtown',
      price: 2800,
      type: 'apartment',
      status: 'For Rent',
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      priceType: 'rent',
    },
    {
      id: 3,
      title: 'Luxury Beachfront Villa',
      location: 'Malibu',
      price: 3500000,
      type: 'villa',
      status: 'For Sale',
      beds: 5,
      baths: 4,
      sqft: 4000,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      priceType: 'sale',
    },
    {
      id: 4,
      title: 'Modern City Loft',
      location: 'Manhattan',
      price: 3500,
      type: 'apartment',
      status: 'For Rent',
      beds: 1,
      baths: 1,
      sqft: 850,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      priceType: 'rent',
    },
    {
      id: 5,
      title: 'Suburban Family Home',
      location: 'Westchester',
      price: 750000,
      type: 'house',
      status: 'For Sale',
      beds: 4,
      baths: 3,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126',
      priceType: 'sale',
    },
    {
      id: 6,
      title: 'Penthouse Suite',
      location: 'Downtown',
      price: 5000,
      type: 'apartment',
      status: 'For Rent',
      beds: 3,
      baths: 3,
      sqft: 2000,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      priceType: 'rent',
    },
    {
      id: 7,
      title: 'Mediterranean Villa',
      location: 'Santa Barbara',
      price: 2750000,
      type: 'villa',
      status: 'For Sale',
      beds: 6,
      baths: 5,
      sqft: 5000,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      priceType: 'sale',
    },
    {
      id: 8,
      title: 'Urban Studio Apartment',
      location: 'Brooklyn',
      price: 2200,
      type: 'apartment',
      status: 'For Rent',
      beds: 1,
      baths: 1,
      sqft: 600,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      priceType: 'rent',
    },
    {
      id: 9,
      title: 'Historic Townhouse',
      location: 'Boston',
      price: 1850000,
      type: 'house',
      status: 'For Sale',
      beds: 4,
      baths: 4,
      sqft: 3200,
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6',
      priceType: 'sale',
    },
    {
      id: 10,
      title: 'Waterfront Condo',
      location: 'Miami',
      price: 4200,
      type: 'apartment',
      status: 'For Rent',
      beds: 2,
      baths: 2,
      sqft: 1500,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      priceType: 'rent',
    },
    // ... add more properties as needed
  ];

  filteredProperties: Property[] = this.allProperties;

  // Price range options
  priceRanges = [
    { label: 'Price Range', value: '' },
    { label: '$100k - $200k', value: '100-200' },
    { label: '$200k - $500k', value: '200-500' },
    { label: '$500k+', value: '500+' },
  ];

  // Property type options
  propertyTypes = [
    { label: 'Property Type', value: '' },
    { label: 'House', value: 'house' },
    { label: 'Apartment', value: 'apartment' },
    { label: 'Villa', value: 'villa' },
  ];

  ngOnInit() {
    // Pre-load images
    this.allProperties.forEach((property) => {
      const img = new Image();
      img.src = property.image;
    });

    this.filteredProperties = this.allProperties.slice(0, 6); // Initial load of 6 items
  }

  searchProperties() {
    const filtered = this.allProperties.filter((property) => {
      // Location filter
      const locationMatch =
        !this.searchLocation ||
        property.location
          .toLowerCase()
          .includes(this.searchLocation.toLowerCase()) ||
        property.title
          .toLowerCase()
          .includes(this.searchLocation.toLowerCase());

      // Price range filter
      let priceMatch = true;
      if (this.selectedPriceRange) {
        const [min, max] = this.selectedPriceRange.split('-');
        if (property.priceType === 'sale') {
          if (max === '+') {
            priceMatch = property.price >= Number(min) * 1000;
          } else {
            priceMatch =
              property.price >= Number(min) * 1000 &&
              property.price <= Number(max) * 1000;
          }
        }
      }

      // Property type filter
      const typeMatch =
        !this.selectedPropertyType ||
        property.type === this.selectedPropertyType;

      return locationMatch && priceMatch && typeMatch;
    });

    this.filteredProperties = filtered.slice(0, 6); // Show first 6 results
  }
}
