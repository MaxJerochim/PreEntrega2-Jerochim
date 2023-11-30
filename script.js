var edad = prompt("Bienvenido usuario, por favor ingrese su edad!");

if (edad >= 18 && edad <= 150) {
    alert("Bienvenido a nuestra tienda querido usuario.");

    class Libro {
      constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
      }
    }
    
    class Auto {
      constructor(marcaAuto, modelo) {
        this.marcaAuto = marcaAuto;
        this.modelo = modelo;
      }
    }
    
    class Mochila {
      constructor(marcaMochila, capacidad) {
        this.marcaMochila = marcaMochila;
        this.capacidad = capacidad;
      }
    }
    
    let carritoDeCompras = []; 
    
    function agregarAlCarrito(item) {
      carritoDeCompras.push(item);
      if (item instanceof Libro) {
        alert(`¡Libro agregado al carrito! Título: ${item.titulo} - Autor: ${item.autor}. Si tenemos el producto disponible, le enviaremos un mail con lo correspondiente a pagar. Muchas Gracias!`);
      } else if (item instanceof Auto) {
        alert(`¡Auto agregado al carrito! Marca: ${item.marcaAuto} - Modelo: ${item.modelo}. Si tenemos el producto disponible, le enviaremos un mail con lo correspondiente a pagar. Muchas Gracias!`);
      } else if (item instanceof Mochila) {
        alert(`¡Mochila agregada al carrito! Marca: ${item.marcaMochila} - Capacidad: ${item.capacidad}. Si tenemos el producto disponible, le enviaremos un mail con lo correspondiente a pagar. Muchas Gracias!`);
      }
    }
    
    
    let opcionDeCompra = prompt("Diganos que producto desea comprar, ingrese por: 'Auto', 'Libro' o 'Mochila'");
    
    switch (opcionDeCompra.toLowerCase()) {
        case "libro":
          let titulo = prompt("Ingresa el título del libro:");
          let autor = prompt("Ingresa el autor del libro:");
          let nuevoLibro = new Libro(titulo, autor);
          agregarAlCarrito(nuevoLibro);
          break;
        case "auto":
          let marcaAuto = prompt("Ingresa la marca del auto:");
          let modelo = prompt("Ingresa el modelo del auto:");
          let nuevoAuto = new Auto(marcaAuto, modelo);
          agregarAlCarrito(nuevoAuto);
          break;
        case "mochila":
          let marcaMochila = prompt("Ingresa la marca de la mochila:");
          let capacidad = prompt("Ingresa la capacidad de la mochila (en kg):");
          let nuevaMochila = new Mochila(marcaMochila, capacidad);
          agregarAlCarrito(nuevaMochila);
          break;
        default:
          alert("Opción no válida");
          break;
    }
    
} 
else {
    alert("Lo sentimos mucho, a nuestro sistema solo ingresan mayores de edad, o seres humanos que realmente existan.");
}