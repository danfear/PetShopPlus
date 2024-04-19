package com.PetShopPlus;

import com.PetShopPlus.entities.Rol;
import com.PetShopPlus.entities.Usuario;
import com.PetShopPlus.entities.UsuarioRol;
import com.PetShopPlus.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;


@SpringBootApplication
public class PetShopPlusBackendApplication implements CommandLineRunner {

	@Autowired
	private UsuarioService usuarioService;

	public static void main(String[] args) {
		SpringApplication.run(PetShopPlusBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*Usuario usuario = new Usuario();
		usuario.setNombre("Daniel");
		usuario.setApellido("Arias");
		usuario.setUsername("daniel");
		usuario.setPassword("12345");
		usuario.setEmail("daniel96@gmail.com");
		usuario.setTelefono("12345678");
		usuario.setDireccion("Calle 1 #1-1");

		Rol rol = new Rol();
		rol.setRolId(1L);
		rol.setNombre("ADMIN");

		Set<UsuarioRol> usuarioRoles = new HashSet<>();
		UsuarioRol usuarioRol = new UsuarioRol();
		usuarioRol.setRol(rol);
		usuarioRol.setUsuario(usuario);
		usuarioRoles.add(usuarioRol);

		Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario,usuarioRoles);
		System.out.println(usuarioGuardado.getUsername());*/
	}
}
