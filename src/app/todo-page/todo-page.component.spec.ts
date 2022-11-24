import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ToDoPageComponent } from "./todo-page.component";

describe("HobbiesPageComponent", () => {
  let component: ToDoPageComponent;
  let fixture: ComponentFixture<ToDoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
