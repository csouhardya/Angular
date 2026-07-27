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

  messageToChild1: string | null = null
  messageToChild2: string | null = null;
  child1Message: string | null =null;
  child2Message: string | null = null;

  sendMessageToChild1() {
    this.messageToChild1 = "Notification to child1";
  }

  sendMessageToChild2() {
    this.messageToChild2 = "Notification to child2";
  }

  receiveDataFromChild1(message: string) {
    this.child1Message = message;
  }

  receiveDataFromChild2(message: string){
    this.child2Message = message;
  }

}
