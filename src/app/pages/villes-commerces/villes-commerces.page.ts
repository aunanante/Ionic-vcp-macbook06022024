import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villes-commerces',
  templateUrl: './villes-commerces.page.html',
  styleUrls: ['./villes-commerces.page.scss'],
})
export class VillesCommercesPage implements OnInit {

  constructor(
    private router: Router,
    
    ) { }

  ngOnInit() {
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

}
