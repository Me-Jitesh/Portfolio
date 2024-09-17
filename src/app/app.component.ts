import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeploymentsComponent } from "./deployments/deployments.component";
import { SkillsComponent } from "./skills/skills.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeploymentsComponent, SkillsComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portofolio-jitesh';
}
