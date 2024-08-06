import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-productos',
  templateUrl: './view-productos.component.html',
  styleUrl: './view-productos.component.css'
})
export class ViewProductosComponent implements OnInit{
  
  productos : any = [
  ]

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.listarProductos().subscribe(
      (dato:any) => {
        this.productos = dato;
        console.log(this.productos);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los productos','error');
      }
    )
  }

}
