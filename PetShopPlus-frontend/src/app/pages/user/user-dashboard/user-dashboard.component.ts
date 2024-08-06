import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {

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
