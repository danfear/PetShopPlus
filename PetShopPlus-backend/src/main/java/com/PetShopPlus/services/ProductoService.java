package com.PetShopPlus.services;

import com.PetShopPlus.entities.Producto;

import java.util.Set;

public interface ProductoService {

    Producto agregarProducto(Producto producto);

    Producto actualizarProducto(Producto producto);

    Set<Producto> getProductos();

    Producto getProducto(Long productoId);

    void eliminarProducto(Long productoId);
}
