import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-de-navegacao',
  imports: [],
  templateUrl: './menu-de-navegacao.component.html',
  styleUrl: './menu-de-navegacao.component.scss'
})
export class MenuDeNavegacaoComponent {
  links: any = [
    {label: 'Inicio', path: '', icon: 'icons/home.svg'},
    {label: 'Funcionários', path: '', icon: 'icons/funcionarios.svg'},
    {label: 'Afastamento', path: '', icon: 'icons/afastamento.svg'},
    {label: 'Impontualidade', path: '', icon: 'icons/impontualidade.svg'},
    {label: 'Faltas', path: '', icon: 'icons/faltas.svg'},
    {label: 'Adicional noturno', path: '', icon: 'icons/adicional.svg'},
    {label: 'Extra 50%', path: '', icon: 'icons/extra.svg'},
    {label: 'Extra 100%', path: '', icon: 'icons/extra.svg'},
    {label: 'Memorandos', path: '', icon: 'icons/memorandos.svg'},
  
  ];
}
