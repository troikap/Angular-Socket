import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import {enableProdMode} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  socket;

  constructor() {
    this.socket = io();
  }
}