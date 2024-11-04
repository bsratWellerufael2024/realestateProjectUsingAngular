import { Component } from '@angular/core';



import { CommonModule } from '@angular/common';







interface Inquiry {



  id: number;



  name: string;



  email: string;



  propertyId: string;



  message: string;



  date: Date;



  status: 'pending' | 'responded';



}







@Component({



  selector: 'app-manage-inquiries',



  standalone: true,



  imports: [CommonModule],



  templateUrl: './manage-inquiries.component.html',



  styleUrl: './manage-inquiries.component.css'



})



export class ManageInquiriesComponent {



  inquiries: Inquiry[] = [



    {



      id: 1,



      name: 'John Doe',



      email: 'john@example.com',



      propertyId: 'PROP001',



      message: 'I am interested in viewing this property.',



      date: new Date('2024-03-15'),



      status: 'pending'



    },



    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com', 
      propertyId: 'PROP002',
      message: 'What is the best time to schedule a viewing?',
      date: new Date('2024-03-14'),
      status: 'responded'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      propertyId: 'PROP003', 
      message: 'Is this property still available?',
      date: new Date('2024-03-13'),
      status: 'pending'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      propertyId: 'PROP004',
      message: 'I would like to make an offer on this property.',
      date: new Date('2024-03-12'),
      status: 'responded'
    },
    {
      id: 5,
      name: 'Robert Brown',
      email: 'robert@example.com',
      propertyId: 'PROP005',
      message: 'Are there any similar properties in this area?',
      date: new Date('2024-03-11'),
      status: 'pending'
    },
    {
      id: 6,
      name: 'Emma Davis',
      email: 'emma@example.com',
      propertyId: 'PROP006',
      message: 'What are the nearby amenities?',
      date: new Date('2024-03-10'),
      status: 'responded'
    },
    {
      id: 7,
      name: 'Tom Anderson',
      email: 'tom@example.com',
      propertyId: 'PROP007',
      message: 'Can I get more details about the property taxes?',
      date: new Date('2024-03-09'),
      status: 'pending'
    },
    {
      id: 8,
      name: 'Lisa Wilson',
      email: 'lisa@example.com',
      propertyId: 'PROP008',
      message: 'Is parking included with this property?',
      date: new Date('2024-03-08'),
      status: 'responded'
    },
    {
      id: 9,
      name: 'David Miller',
      email: 'david@example.com',
      propertyId: 'PROP009',
      message: 'What is the square footage of this property?',
      date: new Date('2024-03-07'),
      status: 'pending'
    },
    {
      id: 10,
      name: 'Amy Chen',
      email: 'amy@example.com',
      propertyId: 'PROP010',
      message: 'Are pets allowed in this property?',
      date: new Date('2024-03-06'),
      status: 'responded'
    },
    {
      id: 11,
      name: 'James Taylor',
      email: 'james@example.com',
      propertyId: 'PROP011',
      message: 'What is the age of the building?',
      date: new Date('2024-03-05'),
      status: 'pending'
    },



    // Add more sample data as needed



  ];







  markAsResponded(id: number) {



    const inquiry = this.inquiries.find(inq => inq.id === id);



    if (inquiry) {



      inquiry.status = 'responded';



    }



  }







  deleteInquiry(id: number) {



    this.inquiries = this.inquiries.filter(inq => inq.id !== id);



  }







  getPendingCount(): number {



    return this.inquiries.filter(inq => inq.status === 'pending').length;



  }







  getRespondedCount(): number {



    return this.inquiries.filter(inq => inq.status === 'responded').length;



  }



}






