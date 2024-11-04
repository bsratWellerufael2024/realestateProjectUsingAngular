import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'agent' | 'admin';
  status: 'active' | 'inactive' | 'suspended';
  joinedDate: Date;
  avatarUrl?: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'agent',
      status: 'active',
      joinedDate: new Date('2024-01-15')
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'user',
      status: 'active',
      joinedDate: new Date('2024-02-01')
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'admin',
      status: 'suspended',
      joinedDate: new Date('2023-12-10')
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      role: 'agent',
      status: 'inactive',
      joinedDate: new Date('2024-01-20')
    }
  ];

  // For filtering
  searchTerm: string = '';
  selectedRole: string = '';
  selectedStatus: string = '';
  
  // For editing
  editingUser: User | null = null;
  editUserData: Partial<User> = {};

  get filteredUsers(): User[] {
    return this.users.filter(user => {
      const matchesSearch = !this.searchTerm || 
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesRole = !this.selectedRole || user.role === this.selectedRole;
      const matchesStatus = !this.selectedStatus || user.status === this.selectedStatus;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  startEditing(user: User): void {
    this.editingUser = user;
    this.editUserData = { ...user };
  }

  cancelEditing(): void {
    this.editingUser = null;
    this.editUserData = {};
  }

  saveUser(): void {
    if (this.editingUser && this.editUserData) {
      const index = this.users.findIndex(u => u.id === this.editingUser?.id);
      if (index !== -1) {
        this.users[index] = { ...this.editingUser, ...this.editUserData } as User;
      }
      this.cancelEditing();
    }
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  }
}
