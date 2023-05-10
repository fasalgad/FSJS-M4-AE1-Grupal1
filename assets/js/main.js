document.addEventListener('DOMContentLoaded', function () {
  renderTable();

  const formAddBussines = document.getElementById('formAddBussines');
  formAddBussines.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const nombre = document.getElementById('nombre').value;
    const rut = document.getElementById('rut').value;
    const empresas = obtenerLocalStorage('empresas');
    console.log(empresas.length, nombre, rut)
    const empresa = new Empresa(empresas.length + 1, nombre, rut);

    agregarEmpresaLocalStorage(empresa);
    renderTable()
  });


  // const botonSendForm = document.getElementById('botonSendForm');
  // botonSendForm.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   alert('paso')
  //   const nombre = document.getElementById('nombre').value;
  //   const rut = document.getElementById('rut').value;
  //   const empresas = obtenerLocalStorage('empresas');
  //   console.log(empresas.length, nombre, rut)
  //   const empresa = new Empresa(empresas.length + 1, nombre, rut);

  //   agregarEmpresaLocalStorage(empresa);
  //   renderTable()
  // });

  

  


});

