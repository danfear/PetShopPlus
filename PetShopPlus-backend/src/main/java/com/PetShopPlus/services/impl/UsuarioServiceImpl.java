package com.PetShopPlus.services.impl;

import com.PetShopPlus.entities.Usuario;
import com.PetShopPlus.entities.UsuarioRol;
import com.PetShopPlus.exceptions.UsuarioFoundException;
import com.PetShopPlus.repositories.RolRepository;
import com.PetShopPlus.repositories.UsuarioRepository;
import com.PetShopPlus.services.UsuarioService;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Set;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RolRepository rolRepository;

    @Override
    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception {
        Usuario usuarioLocal = usuarioRepository.findByUsername(usuario.getUsername());
        if (usuarioLocal != null) {
            System.out.println("El usuario ya existe");
            throw new UsuarioFoundException("El usuario ya esta presente");
        }
        else{
            for(UsuarioRol usuarioRol:usuarioRoles){
                rolRepository.save(usuarioRol.getRol());
                /*guardar roles en db-usuariorol*/
            }
            usuario.getUsuarioRoles().addAll(usuarioRoles); /*adicion de roles al usuario*/
            usuarioLocal = usuarioRepository.save(usuario); /*asigna el usuario para retornarlo*/
        }
        return usuarioLocal;
    }

    @Override
    public Usuario obtenerUsuario(String username) {
        return usuarioRepository.findByUsername(username);
    }

    @Override
    public void eliminarUsuario(Long usuarioId) {
        usuarioRepository.deleteById(usuarioId);

    }
}
