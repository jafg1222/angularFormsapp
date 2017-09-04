import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {FormsComponent} from "./forms/forms.component";
import {SearchComponent} from "./search/search.component";
import {HomeComponent} from "./home/home.component";
import {FormsReactiveComponent} from "./forms-reactive/forms-reactive.component"

const AppRoutes:Routes = [
    {path: '', redirectTo: "/home", pathMatch: "full"},
    {path:'home', component: HomeComponent},
    {path:'forms',component: FormsComponent},
    {path:'search',component: SearchComponent},
    {path: 'forms-reactive', component: FormsReactiveComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(AppRoutes);