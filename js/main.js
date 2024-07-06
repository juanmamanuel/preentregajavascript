const zapatillas = [
    {id:1, nombre:"jordan 1", precio:300},
    {id:2, nombre:"jordan 12 retro", precio:400},
    {id:3, nombre:"jordan 6", precio:350},
    {id:4, nombre:"jordan 7", precio:550},

];


class Productos {
    constructor(productos) {
        this.items = productos;
    }

    agregarProducto(nombreP, precioP) {
        const producto = {id:this.generarId(), nombre:nombreP, precio:precioP};
        this.items.push(producto);
        console.log("Producto agregado!");
    }

    buscarProducto(id) {
        return this.items.find(item => item.id == id)
    }

    obtenerProductos() {
        return this.items;
    }

    listarProductos() {
        let salida = "";

        for (const producto of this.items) {
            salida += `${producto.id} - ${producto.nombre} $${producto.precio}\n`;
        }

        alert(salida);
    }

    totalProductos() {
        return this.items.length;
    }

     generarId() { productos
        return this.items.length + 1;
    } 

    generarId() {
        let max = 0;

        this.items.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max + 1;
    }

    eliminarProducto(id) {
        let pos = this.items.findIndex(item => item.id == id); 
        this.items.splice(pos, 1); 

        

        console.log("Se eliminó el Producto: #" + id);
    }
}


const catalogo = new Productos(zapatillas)

let nombreProducto = prompt("Ingrese el Nombre del Producto:");
let precioProducto = parseFloat(prompt("Ingrese el Precio del Producto:"));
catalogo.agregarProducto(nombreProducto, precioProducto);


catalogo.agregarProducto("jordan 1", 300);
catalogo.agregarProducto("jordan 12 retro", 400);
console.log(catalogo.obtenerProductos());


catalogo.eliminarProducto(6);




console.log(catalogo.obtenerProductos());

let producto = catalogo.buscarProducto(7)
alert(producto.nombre + " $" + producto.precio);


catalogo.listarProductos();

console.log("Total Productos: " + catalogo.totalProductos());
