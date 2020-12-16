import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  cartArray = [];

  constructor() {}

  addToCart(course) {
    this.cartArray.push(course);
    window.alert("Your product has been added to the cart!");
    alert("Name of course : " + course.courseName);
  }

  getCourses() {
    return this.cartArray;
  }
}
