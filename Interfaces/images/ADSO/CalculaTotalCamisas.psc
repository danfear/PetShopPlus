Algoritmo sin_titulo
	Definir i, n, numerocamisas, totalDolares, totalPesos, tasaDolar Como Entero
	numerocamisas<-5
	totalDolares<-0
	tasaDolar<-3950
	Para i<-1 Hasta numerocamisas Con Paso 1 Hacer
		Escribir "Ingrese el valor de la camisa no.",i, " en dólares."
		leer n
		totalDolares = totalDolares + n
	Fin Para
	totalPesos<-totalDolares*tasaDolar
	Escribir "El valor total de las camisas es de: $", totalPesos, " COP."

FinAlgoritmo
