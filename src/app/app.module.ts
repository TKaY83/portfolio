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
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { ContactSuccessComponent } from './contact-success/contact-success.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeSectionComponent,
    MySkillsSectionComponent,
    MyWorkSectionComponent,
    AboutMeSectionComponent,
    ContactMeComponent,
    FooterComponent,
    ImprintComponent,
    HomeComponent,
    ContactSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
