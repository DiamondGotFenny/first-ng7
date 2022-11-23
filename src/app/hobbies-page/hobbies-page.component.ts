import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
@Component({
  selector: "app-hobbies-page",
  templateUrl: "./hobbies-page.component.html",
  styleUrls: ["./hobbies-page.component.css"],
})
export class HobbiesPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  userInput: string;
  hobbiesArray = [
    { id: "3248", value: "music" },
    { id: "32238", value: "movies" },
    { id: "32438", value: "video games" },
  ];
  checkHobbiesNum: boolean = this.hobbiesArray.length >= 3;
  operationNoticeStyle = { hidden: true, deleted: false, add: false };
  operationNoticeMsg: string;
  addNewHobbies() {
    if (this.userInput.trim() === "") {
      return;
    }

    const newHobby = { id: _.uniqueId(), value: this.userInput };
    this.hobbiesArray.push(newHobby);
    this.operationNoticeMsg = "A hobby has been added";
    this.isDeletedStyle(false);
    this.userInput = "";
    console.log(this.hobbiesArray);
  }
  handleRemoveItem(item: { id: string; value: string }) {
    console.log(item);
    _.remove(this.hobbiesArray, (hobby) => hobby.id === item.id);
    this.operationNoticeMsg = "A hobby has been deleted";
    this.isDeletedStyle(true);

    console.log(this.operationNoticeMsg);
  }
  isDeletedStyle(isDeleted: boolean) {
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
