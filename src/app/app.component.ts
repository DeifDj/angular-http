import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
obtenerDatos() {
throw new Error('Method not implemented.');
}
pregunta: any;
respuesta: any;
  constructor(private appService: AppService) {
    
  }
  onSubmit() {
    this.appService.obtenerRespuesta().subscribe(res => this.respuesta = res);
  }
}
