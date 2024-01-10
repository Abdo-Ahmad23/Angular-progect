import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { skillsComponent } from './skills/skills.component';
import { progectsComponent } from './progects/progects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"skills",component:skillsComponent},
  {path:"progects",component:progectsComponent},
  {path:"",component:HomeComponent},
  {path:"**",component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
