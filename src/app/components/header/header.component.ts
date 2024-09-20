import { Component, EventEmitter, Output, output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //  inicializa el formulario (la propiedad y en el constructor)
searchForm: FormGroup;

@Output() nombreEmitido: EventEmitter<string>;

constructor() {
  this.searchForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      this.miValidador
    ])
  }, [])

  this.nombreEmitido = new EventEmitter<string>();
}

miValidador(control: AbstractControl) { 
  if (control.value === 'mariogiron') {
    return { miValidador: true }
  }
  return null
}

getData(): void {
  //emitmos el nombre de usuario al componente padre
  this.nombreEmitido.emit(this.searchForm.value.name);
}
}

//  método que captura los datos del formulario
// async getData():Promise <void> {
//   try {
//     let name=this.searchForm.value.name;
//   let response= await this.UsersService.getUsersByName(name);
//   console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
  
// }
// }
