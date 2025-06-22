import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from "./components/form/form.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CommonModule, RouterOutlet, HeaderComponent, HeroComponent, FeaturesComponent, PricingComponent, FooterComponent, FormComponent, TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi-landing-bootstrap';
}
