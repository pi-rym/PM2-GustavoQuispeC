class CarritoCompra{
    constructor(){
        this.productos = [];
      
    }
    agregarProductos(productos){
        this.productos.push(productos);
    }

    calcularTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }

    aplicarDescuento(descuento){
        return this.calcularTotal() - (this.calcularTotal() * descuento / 100);
    }
   

};
module.exports = CarritoCompra;

