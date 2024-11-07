import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

interface RealEstateListing {
  id: number;

  title: string;

  address: string;

  price: number;

  postedBy: string;

  postedDate: Date;

  status: 'pending' | 'approved' | 'rejected';

  imageUrl: string;

  selected?: boolean;

  propertyType: 'house' | 'apartment' | 'condo' | 'land';
}

@Component({
  selector: 'app-approve-listings',

  standalone: true,

  imports: [CommonModule, FormsModule],

  templateUrl: './approve-listings.component.html',

  styleUrl: './approve-listings.component.css',
})
export class ApproveListingsComponent {
  listings: RealEstateListing[] = [
    {
      id: 1,

      title: 'Modern Apartment in Downtown',

      address: '123 Main St, City Center',

      price: 350000,

      postedBy: 'John Doe',

      postedDate: new Date('2024-01-20'),

      status: 'pending',

      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',

      propertyType: 'apartment',
    },

    {
      id: 2,

      title: 'Luxury Villa with Pool',

      address: '456 Ocean View, Beach Area',

      price: 1200000,

      postedBy: 'Jane Smith',

      postedDate: new Date('2024-01-22'),

      status: 'pending',

      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',

      propertyType: 'house',
    },

    {
      id: 3,

      title: 'Cozy Studio Apartment',

      address: '789 Park Ave, Downtown',

      price: 180000,

      postedBy: 'Mike Johnson',

      postedDate: new Date('2024-01-23'),

      status: 'pending',

      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',

      propertyType: 'apartment',
    },

    {
      id: 4,

      title: 'Waterfront Condo',

      address: '101 Harbor View, Marina District',

      price: 550000,

      postedBy: 'Sarah Wilson',

      postedDate: new Date('2024-01-24'),

      status: 'pending',

      imageUrl: 'https://images.unsplash.com/photo-1515263487990-61b07816b324',

      propertyType: 'condo',
    },

    {
      id: 5,

      title: 'Commercial Land Plot',

      address: '202 Business Park, Industrial Zone',

      price: 800000,

      postedBy: 'Robert Brown',

      postedDate: new Date('2024-01-25'),

      status: 'pending',

      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',

      propertyType: 'land',
    },

    {
      id: 6,

      title: 'Mountain View House',

      address: '303 Highland Road, Hill District',

      price: 450000,

      postedBy: 'Emma Davis',

      postedDate: new Date('2024-01-26'),

      status: 'pending',

      imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233',

      propertyType: 'house',
    },

    {
      id: 7,
      title: 'Urban Loft Apartment',
      address: '404 Artist Row, Creative District',
      price: 275000,
      postedBy: 'Tom Anderson',
      postedDate: new Date('2024-01-27'),
      status: 'pending',
      imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      propertyType: 'apartment',
    },
    {
      id: 8,
      title: 'Luxury Penthouse Suite',
      address: '505 Skyline Ave, Downtown',
      price: 850000,
      postedBy: 'Sarah Miller',
      postedDate: new Date('2024-01-28'),
      status: 'pending',
      imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd',
      propertyType: 'apartment',
    },
    {
      id: 9,
      title: 'Garden View Condo',
      address: '606 Park Place, Green Zone',
      price: 325000,
      postedBy: 'David Wilson',
      postedDate: new Date('2024-01-29'),
      status: 'pending',
      imageUrl: 'https://images.unsplash.com/photo-1515263487990-61b07816b324',
      propertyType: 'condo',
    },
    {
      id: 10,
      title: 'Beachfront Villa',
      address: '707 Coastal Road, Seaside',
      price: 1200000,
      postedBy: 'Jessica Lee',
      postedDate: new Date('2024-01-30'),
      status: 'pending',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      propertyType: 'house',
    },
  ];

  // Filter properties

  selectedPropertyType: string = '';

  searchTerm: string = '';

  // Add pagination properties

  currentPage: number = 1;

  itemsPerPage: number = 6;

  get filteredListings(): RealEstateListing[] {
    const filtered = this.listings.filter((listing) => {
      const matchesSearch =
        !this.searchTerm ||
        listing.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        listing.address.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesType =
        !this.selectedPropertyType ||
        listing.propertyType === this.selectedPropertyType;

      return matchesSearch && matchesType && listing.status === 'pending';
    });

    // Apply pagination

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;

    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Add pagination methods

  get totalPages(): number {
    const filteredCount = this.listings.filter((listing) => {
      const matchesSearch =
        !this.searchTerm ||
        listing.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        listing.address.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesType =
        !this.selectedPropertyType ||
        listing.propertyType === this.selectedPropertyType;

      return matchesSearch && matchesType && listing.status === 'pending';
    }).length;

    return Math.ceil(filteredCount / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Approval methods

  approveListing(listingId: number): void {
    const listing = this.listings.find((l) => l.id === listingId);

    if (listing) {
      listing.status = 'approved';
    }
  }

  rejectListing(listingId: number): void {
    const listing = this.listings.find((l) => l.id === listingId);

    if (listing) {
      listing.status = 'rejected';
    }
  }

  // Bulk actions

  toggleSelection(listing: RealEstateListing): void {
    listing.selected = !listing.selected;
  }

  approveSelected(): void {
    this.listings

      .filter((listing) => listing.selected)

      .forEach((listing) => {
        listing.status = 'approved';

        listing.selected = false;
      });
  }

  rejectSelected(): void {
    this.listings

      .filter((listing) => listing.selected)

      .forEach((listing) => {
        listing.status = 'rejected';

        listing.selected = false;
      });
  }

  get hasSelectedListings(): boolean {
    return this.listings.some((listing) => listing.selected);
  }
}
