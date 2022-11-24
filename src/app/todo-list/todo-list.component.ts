import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class ToDoListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() items: Array<any>;
  @Output() deleteItem = new EventEmitter<any>();
  removeItem(item: { id: string; value: string }) {
    this.deleteItem.emit(item);
  }
}
