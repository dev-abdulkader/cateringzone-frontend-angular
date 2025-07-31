import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home/home-page";
import { SignupComponent } from "./pages/auth/signup/signup";
import { LoginComponent } from "./pages/auth/login/login";
import { CategoriesComponent } from "./categories/categories";
import { CategoryComponent } from "./pages/caterers/categories/category/category";

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "caterers/categories", component: CategoriesComponent },
  { path: "caterers/categories/:categoryId", component: CategoryComponent },
];
