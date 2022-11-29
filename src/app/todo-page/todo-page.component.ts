import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
@Component({
  selector: "app-todo-page",
  templateUrl: "./todo-page.component.html",
  styleUrls: ["./todo-page.component.css"],
})
export class ToDoPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  userInput: string;
  todoArray = [
    { id: "3248", value: "Running", isDone: false },
    { id: "32238", value: "watch movies", isDone: true },
    { id: "32438", value: "play video games", isDone: false },
  ];
  checkHobbiesNum: boolean = this.todoArray.length >= 3;
  operationNoticeStyle = { hidden: true, deleted: false, add: false };
  operationNoticeMsg: string;
  addNewHobbies() {
    if (this.userInput.trim() === "") {
      return;
    }

    const newHobby = { id: _.uniqueId(), value: this.userInput, isDone: false };
    this.todoArray.push(newHobby);
    this.operationNoticeMsg = "A to-do Item has been added";
    this.setNoticeMsgStyle(false);
    this.userInput = "";
  }
  handleRemoveItem(item: { id: string; value: string; isDone: boolean }) {
    _.remove(this.todoArray, (hobby) => hobby.id === item.id);
    this.operationNoticeMsg = "A to-do Item has been deleted";
    this.setNoticeMsgStyle(true);
  }
  handleItemDone(item: { id: string; value: string; isDone: boolean }) {
    this.todoArray = this.todoArray.map((ele) => {
      if (ele.id === item.id) {
        ele.isDone = !item.isDone;
      }
      return ele;
    });
  }
  setNoticeMsgStyle(isDeleted: boolean) {
    this.operationNoticeStyle.hidden = false;
    this.operationNoticeStyle.add = !isDeleted;
    this.operationNoticeStyle.deleted = isDeleted;
    setTimeout(() => {
      this.operationNoticeStyle.hidden = true;
      this.operationNoticeStyle.add = isDeleted;
      this.operationNoticeStyle.deleted = !isDeleted;
    }, 1300);
  }
}
