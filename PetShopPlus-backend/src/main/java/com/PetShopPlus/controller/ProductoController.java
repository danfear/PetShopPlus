package com.PetShopPlus.controller;

import com.PetShopPlus.entities.Producto;

import com.PetShopPlus.entities.Producto;
import com.PetShopPlus.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/producto")
@CrossOrigin("*")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @PostMapping("/")
    public ResponseEntity<Producto> guardarProducto(@RequestBody Producto producto){
        return ResponseEntity.ok(productoService.agregarProducto(producto));
    }

    @PutMapping("/")
    public ResponseEntity<Producto> actualizarProducto(@RequestBody Producto producto){
        return ResponseEntity.ok(productoService.actualizarProducto(producto));
    }

    @GetMapping("/")
    public ResponseEntity<?> listarProductos(){
        return ResponseEntity.ok(productoService.getProductos());
    }
    @GetMapping("/{productoId}")
    public Producto listarProductoPorId(@PathVariable("productoId") Long productoId){
        return productoService.getProducto(productoId);
    }

    @DeleteMapping("/{productoId}")
    public void eliminarProducto(@PathVariable("productoId") Long productoId){
        productoService.eliminarProducto(productoId);
    }

}
