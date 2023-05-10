class Empresa {
  constructor(id, nombre, rut) {
    this._id = id;
    this._nombre = nombre;
    this._rut = rut;
    this._importaciones = [];
  }

  getTotalImportaciones() {
    let total = 0;
    for (let importacion of this._importaciones) {
      total += importacion.cantidad * importacion.precio_unitario;
    }
    return total;
  }

  getTotalPorProducto() {
    const totalPorProducto = {};
    for (let importacion of this._importaciones) {
      const { producto, cantidad, precio_unitario } = importacion;
      if (!totalPorProducto[producto]) {
        totalPorProducto[producto] = cantidad * precio_unitario;
      } else {
        totalPorProducto[producto] += cantidad * precio_unitario;
      }
    }
    return totalPorProducto;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get rut() {
    return this._rut;
  }

  set rut(value) {
    this._rut = value;
  }

  get importaciones() {
    return this._importaciones;
  }

  set importaciones(value) {
    this._importaciones = value;
  }
}

class Importacion {
  constructor(id, producto, cantidad, precio_unitario) {
    this._id = id;
    this._producto = producto;
    this._cantidad = cantidad;
    this._precio_unitario = precio_unitario;
  }

  getInfo() {
    return `ID: ${this._id}, Producto: ${this._producto}, Cantidad: ${this._cantidad}, Precio Unitario: ${this._precio_unitario}`;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get producto() {
    return this._producto;
  }

  set producto(value) {
    this._producto = value;
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(value) {
    this._cantidad = value;
  }

  get precio_unitario() {
    return this._precio_unitario;
  }

  set precio_unitario(value) {
    this._precio_unitario = value;
  }

  getTotal() {
    return this._cantidad * this._precio_unitario;
  }
}

// const empresa = new Empresa(1, 'Mi Empresa', '12.345.678-9');

// empresa.agregarImportacion(1, 'Producto A', 10, 100);
// empresa.agregarImportacion(2, 'Producto A', 5, 80);
// empresa.agregarImportacion(3, 'Producto B', 8, 200);
// empresa.agregarImportacion(4, 'Producto B', 15, 180);

// const totalPorProducto = empresa.getTotalPorProducto();
 
