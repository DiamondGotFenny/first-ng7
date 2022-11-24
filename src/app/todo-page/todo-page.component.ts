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
    { id: "3248", value: "music" },
    { id: "32238", value: "movies" },
    { id: "32438", value: "video games" },
  ];
  checkHobbiesNum: boolean = this.todoArray.length >= 3;
  operationNoticeStyle = { hidden: true, deleted: false, add: false };
  operationNoticeMsg: string;
  addNewHobbies() {
    if (this.userInput.trim() === "") {
      return;
    }

    const newHobby = { id: _.uniqueId(), value: this.userInput };
    this.todoArray.push(newHobby);
    this.operationNoticeMsg = "A hobby has been added";
    this.setNoticeMsgStyle(false);
    this.userInput = "";
    console.log(this.todoArray);
  }
  handleRemoveItem(item: { id: string; value: string }) {
    console.log(item);
    _.remove(this.todoArray, (hobby) => hobby.id === item.id);
    this.operationNoticeMsg = "A hobby has been deleted";
    this.setNoticeMsgStyle(true);

    console.log(this.operationNoticeMsg);
  }
  setNoticeMsgStyle(isDeleted: boolean) {
    this.operationNoticeStyle.hidden = false;
    this.operationNoticeStyle.add = !isDeleted;
    this.operationNoticeStyle.deleted = isDeleted;
    setTimeout(() => {
      this.operationNoticeStyle.hidden = true;
      this.operationNoticeStyle.add = isDeleted;
      this.operationNoticeStyle.deleted = !isDeleted;
    }, 1000);
  }
}
