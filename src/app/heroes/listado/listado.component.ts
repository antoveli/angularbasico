import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {

  heroes: string[] = ['spidermna', 'Hulk', 'Rambo', 'Terminator']; 
  heroeBorrado: string = '';
  

  borrarHeroe():void{

    //remueve ultimo elemento del arrego 
    this.heroeBorrado = this.heroes.shift() || '';
     
  }

}
