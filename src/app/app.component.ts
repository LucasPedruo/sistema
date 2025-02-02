import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuDeNavegacaoComponent } from './features/componentes/menu-de-navegacao/menu-de-navegacao.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            MenuDeNavegacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
