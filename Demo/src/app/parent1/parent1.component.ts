import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.css'
})
export class Parent1Component {
  /**
   *
   */

  router = inject(Router);
  navigateToTemplate() {
    this.router.navigate(['child1'])
  }

  navigateToReactive() {
    this.router.navigate(['child2'])
  }
}
