// JavaScript Document
function ItemShow(Elemento, Accion) {
		top.document.getElementById(Elemento).style.display = 'block'

	}

function LlenaPag() {
		top.document.getElementById("dvproceso").innerHTML = '<iframe src="/TiendaFinal/LlenaPag.html"></iframe>'
	
	}

function CamPagina(Ide) {
		if (Ide == 'in')
			{
				PagDest = '/tiendafinal/tienda.html'

			}

		else if (Ide == 'dc')
			{
				PagDest = '/tiendafinal/tienda.html'
				top.document.getElementById("dvbody").innerHTML = 'El contenido ha cambiado ahora'

			}




		//top.window.location.href = PagDest // redirecciona a una siguiente pagina (es como si fuera un enlace)
		//top.location.replace(PagDest) // replace reemplaza la pagina, y elimina la navegacion por las paginas

	}

function Bienvenida()
	{
/*		Visita = prompt('Bienvenido, me compartes tu nombre') //solicita algun dato al usuario (visitante)
		document.title = 'Mi Tienda | ' + Visita */
		document.title = 'Mi Tienda'

	}

function ValidaElemento(Destino)
	{
// en este punto estoy validndo que el objeto exista
		if (top.document.getElementById(Destino)) //que si exista
			{
				alert(Destino + ' EXISTE')
				Variable = top.document.getElementById(Destino) //asigna el objeto a la variable para trabajar con el
				Variable.innerHTML = 'Hola'

			}

		else if (!top.document.getElementById(Destino)) //que no exista. el signo ! es una negacion.
			{
				alert(Destino + ' NO EXISTE')

			}

	}

function dfCatg(CntElementos, Destino)
	{
		var CatHTML = '' //Inicializando la variable que va a contener todo de manera ciclica, es indispensable iniciarla si se va a esta forma

		ContDS = top.document.getElementById(Destino) //Es una variable de objeto, donde le estoy asignando el OBJETO tal cual.
		PrcBS = '213|222|253.5|230.44|245.02|241.44|278.03|345.22|306.99|221.09|120.44|243.09' //lista de datos (Precios)
		DscBS = 'Mesa Giratoria|Silla Reclinable|Sillón 3 Plazas|Mesa de Centro|Escritorio Grande|Escritorio Mediano|Refrigerador 20"|Pantalla 50"|Juego de 6 Tazas|Mochila Modelo A|Juego de 4 Almohadas|Juego de 6 Vasos' //lista de datos (Nombre Producto)
		ProBS = 'P0001|P0344|P0101|P1101|P0221|P1201|P5555|P7771|P5031|P2201|P3201|P0002' //lista de datos (Num Codigo)

		PrcMT = PrcBS.split('|') //la lista (de arriba) la vuelvo MATRIZ
		DscMT = DscBS.split('|') //una matriz siempre empieza a almacenar en la casilla 0
		ProMT = ProBS.split('|')

		for (c = 0; c <= (CntElementos - 1); c++) // entro en un ciclo FOR para recorrer cada elemento
			{
				TstHTML = '<div class="dvcrdsh"><div class="dvcatim" style="background-image:url(/images/img' + c + '.jpg)"></div><div class="dvcatdt"><h3 class="txhrzcn">' + DscMT[c] + '</h3><div class="txhrzcn"><button onClick="DetCant(' + "'l', '" + c + "'" + ')" id="btcntls' + c + '" class="pdsidla pdsidra">-</button><input type="number" value="0" onChange="DetCant(' + "'k', '" + c + "'" + ')" id="txcntsh' + c + '" /><button onClick="DetCant(' + "'a', '" + c + "'" + ')" id="btcntad' + c + '" class="pdsidla pdsidra">+</button><input type="hidden" id="hdprec' + c + '" value="' + PrcMT[c] + '" /><input type="hidden" id="hdprod' + c + '" value="' + ProMT[c] + '" /><input type="hidden" id="hddesc' + c + '" value="' + DscMT[c] + '" /></div><div class="dvpbse" id="dvpbse' + c + '">$ ' + FormNum(PrcMT[c]) + '</div><div id="dvpfin' + c + '" class="dvpfin"></div><div class="txhrzcn"><button onClick="AgregaPR(' + "'dvdetb', '" + c + "'" + ')"><span class="pdsidla pdsidra">Agregar</span></button></div></div></div>'

				CatHTML += TstHTML

			}

		ContDS.innerHTML = CatHTML

	}

function FormNum(Valor)
	{
		CantVL = Math.abs(Valor)
		CantDC = CantVL.toFixed(2)
		CantIN = CantDC.substr(0, (CantDC.length - 3))
		CantPR = CantDC.substr(CantDC.length - 3)
		ValorN = new Intl.NumberFormat('es-MX').format(CantIN) + CantPR

		return ValorN

	}

function DetCant(Origen, Diferenciador)
	{
		//Parametros:
		//	ORIGEN:se refiere al valor de la accion (SUMA o RESTA), puede ser como tu lo quieras manejar
		//	DIFERENCIADOR:se refiere al digito verificador que identifica cada grupo de elementos

		CantAC = top.document.getElementById('txcntsh' + Diferenciador).value //voy a tomar el valor correspondiente a la cantidad de cada uno segun el DIFERENCIADOR
		PrecAC = top.document.getElementById('hdprec' + Diferenciador).value //voy a tomar el valor correspondiente al precio de cada uno segun el DIFERENCIADOR

		//si Origen trae un valor diferente a 'l' o a 'a', entonces, el valor se mantiene como estaba originalmente

		if (Origen == 'l') //validar el valor de la variable ORIGEN
			{
				CantAC-- //esta restando uno a cada uno, menos menos quita un valor al numero

			}

		else if (Origen == 'a') //validar el valor de la variable ORIGEN
			{
				CantAC++ //esta sumando uno a cada uno, mas mas suma un valor al numero

			}

		//La variable CantAC esta almancenando el valor final

		if (CantAC < 0)
			{
				 // validando que si queda abajo del 0, entonces, me devuelva el valor 0, con la intencion de no tener valores negativos
				CantAC = 0

			}

		ImprT = CantAC * PrecAC //Aqui estoy obteniendo el importe total del rubro, multiplicando la cantidad por el precio.

		top.document.getElementById('txcntsh' + Diferenciador).value = CantAC //aqui estoy vaciando el valor final, en cuanto a la cantidad en el campo correspondiente
		top.document.getElementById('dvpfin' + Diferenciador).innerHTML = '$ ' + FormNum(ImprT) //estoy escribiendo en el DIV que contendra el total del rubro, el importe correspondiente formateado con la funcion FormNum.

	}

function AgregaPR(Destino, Ident)
	{
		//DESTINO, que se refiere al elemento que va a recibir el HTML, IDENT, que se refiere al numero identificador del elemento

		if (top.document.getElementById('txcntsh' + Ident).value > 0) //valido que el elemento que contiene la cantidad sea mayor a 0, es decir, si fuera 0 no lo agregaria
			{
				ImpTT = 0 //Inicializo variable que contendra el total del rubro, inicia en 0

				Prec = top.document.getElementById('hdprec' + Ident).value //identifico el precio de cada producto
				Cant = top.document.getElementById('txcntsh' + Ident).value //identifico la cantidad de cada producto
				Prod = top.document.getElementById('hddesc' + Ident).value //identifico el producto, es decir, el numero de producto
				Code = top.document.getElementById('hdprod' + Ident).value //identifico el codigo de cada producto

				top.document.getElementById('lstprod').value += '|' + Code //aqui voy escribir en el input el valor resultante del ciclo, es decir, selecciono un codigo, lo adiciono al input, precedido de un pipe, que separá cada uno de los elmento seleccionados
				top.document.getElementById('cntprod').value += '|' + Cant
				top.document.getElementById('prcprod').value += '|' + Prec
				top.document.getElementById('nmeprod').value += '|' + Prod

				GenHTML() //Llamar la funcion que genera el HTML, tanto en este que es la adicion, como en la funcion que elimina elementos.

				top.document.getElementById('txcntsh' + Ident).value = 0 // Reseteo el contenedor de cantidades a 0
				top.document.getElementById('dvpfin' + Ident).innerHTML = '' // Vacio el elemento que contiene el importe de cada productol

			}

	}

function GenHTML()
	{
		ResHTML = '<table width="100%">' // Definir el encabezado de la tabla que contendra la lista de productos
		CodeA = top.document.getElementById('lstprod').value.split('|') //Tomo el valor dividido por pipes (|) para crear la matriz correspondiente
		CantA = top.document.getElementById('cntprod').value.split('|')
		PrecA = top.document.getElementById('prcprod').value.split('|')
		ProdA = top.document.getElementById('nmeprod').value.split('|')

		for (c = 0; c <= (CodeA.length - 1); c++)
			{
				//Recorro las variable (Matrices), donde la variable c contiene el recorrido, arrancando en 0 en este caso
				//CodeA.length me dice cuantos elementos existen en la matriz, para saber cuantas veces debo recorrerlo, considerando que arranca en 0 la ejecucion, es decir, que si length me dice que son 4, debo recorrer hasta 3 (de 0 a 3)
				// al mismo tiempo estoy condicionando que c se encuentre menor o igual a la cantidad de elementos.
				// al final, a cada ciclo le sumo un valor a c (c++)

				if (CodeA[c].length > 0) // validando que en cada espacio (casilla) haya algun dato en la matriz
					{
						TotCM = Math.abs(PrecA[c]) * Math.abs(CantA[c]) // la variable TotCM contiene el importe de cada rubro, multiplicando el valor del precio por la cantidad. A cada elemento que estoy leyendo le estoy pasando un Math.abs
						// el Math.abs() convierte el valor almacenado como texto en valor numerico para poder operarlo. Uso el metodo ABS del objeto Math
						ImpTT += TotCM // agrego (sumo) el nuevo TotCM al existente durante el ciclo

						ResHTML += '<tr><td><span class="icon-cross" style="cursor:pointer" onClick="EliminaPR(' + "'" + c + "'" + ')"></span></td><td><div>' + ProdA[c] + '</div><div>' + CodeA[c] + '</div></td><td>' + Math.abs(CantA[c]) + '</td><td>' + Math.abs(PrecA[c]) + '</td><td>' + FormNum(TotCM) + '</td></tr>';
						// en la funcion ELIMINA estoy pasando el parametro INDICE conforme a la posicion que cada valor tiene dentro de la matriz.

					}

			}

		ResHTML += '<tr><td colspan="4"></td><td>' + FormNum(ImpTT) + '</td></tr>' // agrego la fila a la tabla que contendra el importe total de todos los productos seleccionados.

		ResHTML += '<tr><td colspan="5">' + MuestraVL(ImpTT) + '</td></tr>' // agrego la fila a la tabla que contendra el importe total de todos los productos seleccionados.

		top.document.getElementById('dvdetb').innerHTML = ResHTML // el HTML resultante lo escribo en este elemento (DIV)

	}

function EliminaPR(Indice)
	{
		//INDICE es la posicion del valor dentro de la matriz, y asi dentro de la lista. Asi sabre que valor quitar de la matriz
		ImpTT = 0 //inicializo variable en valor 0
		CodeG = '' //inicializo variables que contienen cada elemento en VACIO
		CantG = ''
		PrecG = ''
		ProdG = ''

		CodeA = top.document.getElementById('lstprod').value.split('|') //exploto (split) el contenido en una matriz
		CantA = top.document.getElementById('cntprod').value.split('|')
		PrecA = top.document.getElementById('prcprod').value.split('|')
		ProdA = top.document.getElementById('nmeprod').value.split('|')

		for (c = 0; c <= (CodeA.length - 1); c++)
			{
				if (CodeA[c].length > 0) //valido que el indice que estoy leyendo contenga valor
					{
						if (Indice == c)
						// comparo el indice actual con el indice que pase como parametro, para saber si lo mantengo o lo elimino
						// break, sale del ciclo for
						// return, sale de la funcion
							{
								CodeG += '|'
								CantG += '|'
								PrecG += '|'
								ProdG += '|'

							} else {
								CodeG += '|' + CodeA[c]
								CantG += '|' + CantA[c]
								PrecG += '|' + PrecA[c]
								ProdG += '|' + ProdA[c]

							}

						top.document.getElementById('lstprod').value = CodeG
						top.document.getElementById('cntprod').value = CantG
						top.document.getElementById('prcprod').value = PrecG
						top.document.getElementById('nmeprod').value = ProdG

					}

			}

		GenHTML()

	}









