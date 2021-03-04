import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { ContentComponent } from './landing-page/content/content.component';
import { PicsComponent } from './landing-page/pics/pics.component';
import { ServicesOfferedComponent } from './landing-page/services-offered/services-offered.component';
import { AppIntegrationComponent } from './landing-page/app-integration/app-integration.component';
import { FreeTrialComponent } from './landing-page/free-trial/free-trial.component';
import { FooterComponent } from './landing-page/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    ContentComponent,
    PicsComponent,
    ServicesOfferedComponent,
    AppIntegrationComponent,
    FreeTrialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
