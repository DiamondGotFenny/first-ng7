import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  blogTitle: string = "How to make deal with a deamon?";
  blogContent: string = "Better Call Saul!";
}
