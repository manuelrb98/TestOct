import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  imgIcon: string = "assets/images/Imagen 6.png";
  imgFooter: string = "assets/images/Trazado 6.png";

  constructor() { }

  ngOnInit() { }
 
}