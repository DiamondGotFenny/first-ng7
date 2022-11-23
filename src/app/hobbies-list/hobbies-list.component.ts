import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-hobbies-list",
  templateUrl: "./hobbies-list.component.html",
  styleUrls: ["./hobbies-list.component.css"],
})
export class HobbiesListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() items: Array<any>;
  @Output() deleteItem = new EventEmitter<any>();
  removeItem(item: { id: string; value: string }) {
    this.deleteItem.emit(item);
  }
}
