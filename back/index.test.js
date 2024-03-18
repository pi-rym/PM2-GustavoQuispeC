const CarritoCompra = require("../index");

describe("Clase carritoCompra", () => {
  let carritoCompra;
  beforeEach(() => {
    carritoCompra = new CarritoCompra();
  });

  describe("Sobre el constructor de la clase", () => {
    it("debería ser una clase", () => {
      expect(typeof CarritoCompra.prototype.constructor).toBe("function");
    });

    it("carritoCompra deberia ser una instancia de la clase CarritoCompra", () => {
      expect(carritoCompra instanceof CarritoCompra).toBe(true);
    });

    it("Deberia guardar productos en una lista", () => {
      expect(carritoCompra.productos).toEqual([]);
    });
  });

  describe("metodos de la clase", () => {
    const producto1 = { nombre: "celular", precio: 4000, Cantidad: 10 };
    const producto2 = { nombre: "cargador", precio: 100, Cantidad: 20 };
    const producto3 = { nombre: "mochila", precio: 100, Cantidad: 30 };

    it("debería agregar productos", () => {
      expect(typeof carritoCompra.agregarProductos).toBe("function");
    });

    it("Deberia calcular el total", () => {
      expect(typeof carritoCompra.calcularTotal).toBe("function");
    });

    it("Deberia aplicar descuento", () => {
      expect(typeof carritoCompra.aplicarDescuento).toBe("function");
    });

    it("El metodo agregarProductos deberia agregar productos", () => {
      carritoCompra.agregarProductos(producto1);
      expect(carritoCompra.productos).toEqual([producto1]);
    });

    it("El metodo calcularTotal deberia calcular el total", () => {
      carritoCompra.agregarProductos(producto1);
      carritoCompra.agregarProductos(producto2);
      const totalExpect =
        producto1.precio * producto1.Cantidad +
        producto2.precio * producto2.Cantidad;
      const total = carritoCompra.calcularTotal();
      expect(total).toBe(totalExpect);
    });

    it("El metodo aplicarDescuento deberia aplicar el descuento", () => {
      carritoCompra.agregarProductos(producto1);
      carritoCompra.agregarProductos(producto2);
      carritoCompra.agregarProductos(producto3);
      const subTotal =
        producto1.precio * producto1.Cantidad +
        producto2.precio * producto2.Cantidad +
        producto3.precio * producto3.Cantidad;
      const descuento = 10;
      const totalExpect = subTotal - (subTotal * descuento) / 100;
      const total = carritoCompra.aplicarDescuento(descuento);
      expect(totalExpect).toBe(total);
    });
  });
});
