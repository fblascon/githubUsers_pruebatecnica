import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //  inicializa el formulario (la propiedad y en el constructor)
searchForm: FormGroup;

constructor() {
  this.searchForm = new FormGroup({
    name: new FormControl('', [])
  }, [])
}

//  método que captura los datos del formulario
getData():void {
  console.log(this.searchForm.value);
}
}
