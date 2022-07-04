import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';
import { MyWorkSectionComponent } from './my-work-section/my-work-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeSectionComponent,
    MySkillsSectionComponent,
    MyWorkSectionComponent,
    AboutMeSectionComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
