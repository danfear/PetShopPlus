package com.PetShopPlus.services;

import com.PetShopPlus.entities.Categoria;

import java.util.Set;

public interface CategoriaService {

    Categoria agregarCategoria(Categoria categoria);

    Categoria actualizarCategoria(Categoria categoria);

    Set<Categoria> getCategorias();

    Categoria getCategoria(Long categoriaId);

    void eliminarCategoria(Long categoriaId);
}
