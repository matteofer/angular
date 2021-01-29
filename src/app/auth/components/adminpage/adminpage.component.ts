import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-pageadmin',
    templateUrl: './adminpage.component.html',
    styleUrls: ['./adminpage.component.scss']
  })
  export class AdminpageComponent implements OnInit {
  
  
    constructor(
      
    ) {
    }
    ngOnInit() { 
    }
}