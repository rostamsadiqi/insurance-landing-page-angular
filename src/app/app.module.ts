import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartnerComponent } from './components/partner/partner.component';
import { PackagesComponent } from './components/packages/packages.component';
import { TestimoniComponent } from './components/testimoni/testimoni.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { CardComponent } from './pages/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PartnerComponent,
    PackagesComponent,
    TestimoniComponent,
    TeamMemberComponent,
    CardComponent,
    HomeComponent,
    HerosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
