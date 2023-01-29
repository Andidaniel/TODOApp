import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.scss']
})
export class TodoComponentComponent implements OnInit {

  constructor() { }
  id:number =0;
  ngOnInit(): void {
  }

}
