package com.PetShopPlus.exceptions;

public class UsuarioNotFoundException extends Exception{
    public UsuarioNotFoundException(){
        super("No existe un usuario con ese username en base de datos!");
    }

    public UsuarioNotFoundException(String mensaje){
        super(mensaje);
    }
}

