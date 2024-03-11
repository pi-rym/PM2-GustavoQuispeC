 const CarritoCompra  = require('../index');

//Agregar al Carrito
const AgregarCarrito = new CarritoCompra();
AgregarCarrito.agregarProductos = jest.fn();

AgregarCarrito.agregarProductos({ nombre: 'celular', precio: 4000 });
AgregarCarrito.agregarProductos({ nombre: 'cargador', precio: 100 });

describe('Agregar al Carrito de Compra', () => {
    it('debería agregar celular', () => {
        expect(AgregarCarrito.agregarProductos).toHaveBeenCalledWith({ nombre: 'celular', precio: 4000 });
    });

    it('debería agregar cargador', () => {
        expect(AgregarCarrito.agregarProductos).toHaveBeenCalledWith({ nombre: 'cargador', precio: 100 });
    });
});



//Calcular total

const CalcularCarrito = new CarritoCompra();
CalcularCarrito.agregarProductos({ nombre: 'mochila', precio: 100 });
CalcularCarrito.agregarProductos({ nombre: 'zapatillas', precio: 200 });
CalcularCarrito.agregarProductos({ nombre: 'pantalom', precio: 700 });

describe('calcular total Carrito de Compra', () => {
    it('debería calcular el total correctamente', () => {
        expect(CalcularCarrito.calcularTotal()).toBe(1000);
    });
});

//Aplicar descuento
const CalcularDescuento = new CarritoCompra();
CalcularDescuento.agregarProductos({ nombre: 'mochila', precio: 100 });
CalcularDescuento.agregarProductos({ nombre: 'zapatillas', precio: 200 });
CalcularDescuento.agregarProductos({ nombre: 'casaca', precio: 500 });
CalcularDescuento.calcularTotal();
CalcularDescuento.aplicarDescuento(10);

describe('calcular descuento del Carrito de Compra', () => {
    it('debería calcular el descuento total correctamente', () => {
        expect(CalcularDescuento.aplicarDescuento(10)).toBe(720);
    });
});
