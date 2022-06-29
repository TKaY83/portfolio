import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeSectionComponent,
    MySkillsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
