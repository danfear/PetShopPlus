Algoritmo sin_titulo
	Definir i, n, cantidad, numeros Como Entero
	cantidad<-20
	Dimension numeros[cantidad]
	Para i<-1 Hasta cantidad Con Paso 1 Hacer
		Escribir "Ingrese un número ",i
		leer n
		numeros[i] = n
	Fin Para
	Para i<-1 Hasta cantidad Con Paso 1 Hacer
		Si numeros[i]<=25 Entonces
			Escribir numeros[i], " es menor o igual a 25"
		Fin Si
	FinPara
FinAlgoritmo
