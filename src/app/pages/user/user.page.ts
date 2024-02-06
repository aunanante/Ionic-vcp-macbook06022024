import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  businessOwners: any[] = [];

  constructor(private userService: UserService) { }

  async ngOnInit() {
    // Fetch business owners associated with the current user's email
    await this.fetchBusinessOwners();
  }

  async fetchBusinessOwners() {
    // Retrieve the current user's email from the UserService
    const currentUserEmail = await this.userService.getCurrentUserEmail();

    // Fetch all business owners associated with the current user's email
    if (currentUserEmail) {
      this.businessOwners = await this.userService.getAllBusinessOwners();

      // Display the first business owner in the array
      if (this.businessOwners.length > 0) {
        console.log('First business owner:', this.businessOwners[0]);
      }
    }
  }

  async addBusinessOwner() {
    // Example business owner data (modify as needed)
    const newBusinessOwner = {
      email: 'new_owner@mail.com',
      name: 'New Business Owner',
      // Add other properties as needed
    };

    // Add the new business owner
    const addedBusinessOwner = await this.userService.addBusinessOwner(newBusinessOwner);

    if (addedBusinessOwner) {
      console.log('New business owner added:', addedBusinessOwner);

      // Refresh the business owners list after adding a new one
      await this.fetchBusinessOwners();
    } else {
      console.error('Failed to add new business owner');
      // Handle error or display an alert to the user
    }
  }

  async deleteBusinessOwner(id: string) {
    // Delete the business owner by ID
    const isDeleted = await this.userService.deleteBusinessOwner(id);

    if (isDeleted) {
      console.log('Business owner deleted successfully');

      // Refresh the business owners list after deletion
      await this.fetchBusinessOwners();
    } else {
      console.error('Failed to delete business owner');
      // Handle error or display an alert to the user
    }
  }

}
