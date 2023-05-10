//Función para agregar una empresa en el LocalStorage
const agregarEmpresaLocalStorage = (empresa)=> {
  let empresas;
  empresas = obtenerLocalStorage('empresas');
  empresas.push(empresa);
  localStorage.setItem('empresas', JSON.stringify(empresas));
}

//Función para obtener las empresas del LocalStorage
const obtenerLocalStorage= (value) =>{
  let values;
  if (localStorage.getItem(value) === null) {
    values = [];
  } else {
    values = JSON.parse(localStorage.getItem(value));
  }
  return values;
}

const renderTable = () => {
  
  const listaEmpresas = document.getElementById('listaEmpresas');
  const empresas = obtenerLocalStorage('empresas');
  listaEmpresas.innerHTML=''
  empresas.forEach((empresa) => {
    const { _id, _nombre, _rut } = empresa;
    const oEmpresa = new Empresa(_id, _nombre, _rut);
    console.log(oEmpresa)
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${oEmpresa.id}</td>
    <td>${oEmpresa.nombre}</td>
    <td>${oEmpresa.rut}</td>
    <td>
      <button class="btn btn-danger" onclick="modal(${oEmpresa.id})">Agregar Importaciones</button>
    </td>
    `;
    listaEmpresas.appendChild(row);
  }
  );
}
const modal=(idEmpresa)=>{

  const myModal = new bootstrap.Modal('#modalImportaciones', {
    keyboard: false
  })
  console.log(idEmpresa)
  
  myModal.show()

}