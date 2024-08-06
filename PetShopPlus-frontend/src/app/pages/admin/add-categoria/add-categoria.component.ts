import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrl: './add-categoria.component.css'
})
export class AddCategoriaComponent implements OnInit{
 
  categoria = {
    nombre : ''
  }

  constructor(private categoriaService:CategoriaService,private snack:MatSnackBar,private router:Router){}

  ngOnInit(): void {
    
  }

  formSubmit(){
    if(this.categoria.nombre.trim() == '' || this.categoria.nombre == null){
      this.snack.open("El nombre es requerido!",'',{
        duration:3000
      })
      return ;
    }

    this.categoriaService.agregarCategoria(this.categoria).subscribe(
      (dato:any) => {
        this.categoria.nombre = '';
        Swal.fire('Categoría agregada','La categoría ha sido agregada con éxito','success');
        this.router.navigate(['/admin/categorias']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al guardar la categoría','error')
      }
    )
  }

}
