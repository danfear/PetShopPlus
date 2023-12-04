Algoritmo sin_titulo
	Definir totalMinutos, kilometros Como Entero
	Definir totalKm, minutos Como Real
	totalMinutos<-145
	totalKm<-42.195
	Escribir "Ingrese el numero de kilometros para los que desea calcular el tiempo "
	leer kilometros
	minutos<-kilometros*totalMinutos/totalKm
	Escribir "Para ", kilometros, " km recorridos, el tiempo es de: ", trunc(minutos), " minutos."
FinAlgoritmo
