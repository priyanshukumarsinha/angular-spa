import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component'; // Import the component
import { FooterComponent } from './footer/footer.component'; // Import the component


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-spa';
}

