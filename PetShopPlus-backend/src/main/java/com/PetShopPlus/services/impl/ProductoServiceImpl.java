package com.PetShopPlus.services.impl;

import com.PetShopPlus.entities.Producto;
import com.PetShopPlus.repositories.ProductoRepository;
import com.PetShopPlus.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public Producto agregarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Producto actualizarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Set<Producto> getProductos() {
        return new LinkedHashSet<>(productoRepository.findAll());
    }

    @Override
    public Producto getProducto(Long productoId) {
        return productoRepository.findById(productoId).get();
    }

    @Override
    public void eliminarProducto(Long productoId) {
        Producto producto = new Producto();
        producto.setProductoId(productoId);
        productoRepository.delete(producto);
    }
}
