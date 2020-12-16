import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";
import { COURSES } from "../courses";
@Component({
  selector: "app-course-details",
  templateUrl: "./course-details.component.html",
  styleUrls: ["./course-details.component.css"]
})
export class CourseDetailsComponent implements OnInit {
  courses = COURSES;
  course;
  id;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("courseId");
      this.courses.forEach(item => {
        if (this.id == item.courseId) {
          this.course = item;
        }
      });
    });
  }

  addToCart(course) {
    this.cartService.addToCart(course);
  }
}