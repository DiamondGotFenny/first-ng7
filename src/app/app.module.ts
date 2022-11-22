import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { HobbiesListComponent } from "./hobbies-list/hobbies-list.component";
import { HobbiesPageComponent } from "./hobbies-page/hobbies-page.component";
import { UserComponent } from "./user/user.component";
import { BlogComponent } from "./blog/blog.component";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "", component: HobbiesListComponent },
  { path: "user", component: UserComponent },
  { path: "blog", component: BlogComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HobbiesListComponent,
    HobbiesPageComponent,
    UserComponent,
    BlogComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
