class CarritoCompra{
    constructor(){
        this.productos = [];
      
    }
    agregarProductos(productos){
        this.productos.push(productos);
    }

    calcularTotal() {
        let total = 0;
        for (const item of this.productos) {
            total += item.precio * item.Cantidad;
            
        }
       
        return total;
    }

    aplicarDescuento(descuento){
        return this.calcularTotal() - (this.calcularTotal() * descuento / 100);
    }
   

};
module.exports = CarritoCompra;

