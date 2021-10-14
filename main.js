

// console.log(document);
// console.log(document.body);


// // Entrar por ID - getElementById()
// console.log(document.getElementById("unico"))
// //ME TRAE SOLO UN OBJETO HTML (EL ID ES UNICO, NO SE PUEDE REPETIR)





// // Entrar por CLASE - getElementsByClassName()
// console.log(document.getElementsByClassName("clase1"))
// //ME TRAE UN ARRAY DE OBJEROS HTML(COLECCION DE TODOS LOS ELEMENTOS QUE TIENEN ESA CLASE)





// //Entrar por ETIQUETA -getElementsByTagName()
// console.log(document.getElementsByTagName("p"))
// //ME TRAE UN ARRAY DE OBJEROS HTML

// //para seleccionar un elemento del array (el array contiene todos los p del documento)
// //lo seleccionamos por la posicion en el array
// console.log(document.getElementsByTagName("p")[3])


// // para modificar el texto de ese elemento en particular:

// document.getElementsByTagName("p")[3].textContent = "Este es el nuevo texto"


// //querySelector

// // document.querySelector("")
// //Dentro del parentesis se selecciona como en CSS
// //Solamente me trae un elemento - el primero q me encuentra
// console.log(document.querySelector("#unico"));
// console.log(document.querySelector(".clase1"));
// console.log(document.querySelector("p"));

// // Para traer todos los elementos = document.querySelectorAll("")
// console.log(document.querySelectorAll("p"));



// //
// // cambiar contenido
// document.getElementById("unico").textContent = "Este es el nuevo contenido" 

// // cambiar estilo a algo
// //document.getElementById("unico").style.color = "pink"

// // ocultar
// // document.getElementById("unico").style.display = "none"

// // Agregar una clase con JS
// //document.getElementById("unico").setAttribute("clave "","valor")
// document.getElementById("unico").setAttribute("class", "truco")





// // Insertar un elemento dentro del div con id="aca"
// // 1ero creo el elemento que quiero inyectar y asignarle un espacio de memoria (con una constante - variable)
// const h2 = document.createElement("h2")


// //darle un atributo al elemento que cree ( en este caso le vamos a dar un id)
// h2.setAttribute("id","elementoAgregado")


// //Darle contenido al elemento que cree
// h2.textContent = "Elemento nuevo"
// console.log(h2);

// //selecciono el div y le agrego el h2 que creamos (div es el padre, h2 es hijo del div)
// //Para seleccionar = document.getElementById("id del elemento que seleccionamos")
// //para agregarle el hijo = .appendChild("elemento que agregamos")
// document.getElementById("aca").appendChild(h2)





// // Ocultar elementos del index

document.getElementById("unico").style.display = "none"


//Formularios

class Producto {
    
    constructor({nombre,categoria,precio,stock}){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}

const guardarDatos = () => {

    const producto = new Producto (
        {
            nombre : document.getElementById("nombre").value,
            categoria : document.getElementById("categoria").value,
            precio : document.getElementById("precio").value,
            stock : document.getElementById("stock").value,
        })

        const productoAgregadoPadre = document.createElement("div")

        const nombreProductoAgregado = document.createElement("h3")
        nombreProductoAgregado.textContent = producto.nombre
        productoAgregadoPadre.appendChild(nombreProductoAgregado)

        const categoriaProductoAgregado = document.createElement("h4")
        categoriaProductoAgregado.textContent = producto.categoria
        productoAgregadoPadre.appendChild(categoriaProductoAgregado)

        const precioProductoAgregado = document.createElement("h5")
        precioProductoAgregado.textContent = producto.precio
        productoAgregadoPadre.appendChild(precioProductoAgregado)

        document.getElementById("productosAgregados").appendChild(productoAgregadoPadre)

    return producto
}


document.getElementById("btn").addEventListener("click", () => {
    guardarDatos()
}   )