import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from '../../../services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrl: './add-producto.component.css'
})
export class AddProductoComponent implements OnInit{
  
  categorias:any = [];

  productoData = {
    nombre:'',
    descripcion:'',
    existencias:0,
    precio:0,
    disponible:true,
    imagen:'',
    categoria:{
      categoriaId:0
    }
  }

  constructor(private categoriaService:CategoriaService,
    private snack:MatSnackBar,
    private productoService:ProductoService,
    private router:Router){}

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categorias = dato;
        console.log(this.categorias);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )
  }

  guardarProducto(){
    console.log(this.productoData);
    if(this.productoData.nombre.trim() == '' || this.productoData.nombre == null){
      this.snack.open('El nombre es requerido','',{
        duration:3000
      });
      return ;
    }

    this.productoService.agregarProducto(this.productoData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Producto guardado','El producto ha sido guardado con éxito','success');
        this.productoData = {
          nombre:'',
          descripcion:'',
          existencias:0,
          precio:0,
          disponible:true,
          imagen:'',
          categoria:{
            categoriaId:0
          }
        }
        this.router.navigate(['/admin/productos']);
      },
      (error) => {
        Swal.fire('Error','Error al guardar el producto','error');
      }
    )
  }


}
