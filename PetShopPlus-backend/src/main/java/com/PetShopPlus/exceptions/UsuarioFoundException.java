package com.PetShopPlus.exceptions;

public class UsuarioFoundException extends Exception{

    public UsuarioFoundException(){
        super("Ya existe un usuario con ese username!");
    }

    public UsuarioFoundException(String mensaje){
        super(mensaje);
    }
}
