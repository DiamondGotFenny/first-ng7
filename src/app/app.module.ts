import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import bootstrap from "bootstrap";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { ToDoListComponent } from "./todo-list/todo-list.component";
import { ToDoPageComponent } from "./todo-page/todo-page.component";
import { UserComponent } from "./user/user.component";
import { BlogComponent } from "./blog/blog.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "to-do", component: ToDoPageComponent },
  { path: "user", component: UserComponent },
  { path: "blog", component: BlogComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoPageComponent,
    UserComponent,
    BlogComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
