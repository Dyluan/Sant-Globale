import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { SafeResourceUrlPipe } from '../../safe-resource-url.pipe';

@Component({
  selector: 'app-contact',
  imports: [
    SafeResourceUrlPipe,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  googleMapsApiKey: string = environment.googleMapsApiKey;
  
}
