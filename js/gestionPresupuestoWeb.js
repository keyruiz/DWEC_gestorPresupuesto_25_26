function mostrarDatoEnId(idElemento, valor) {
    const elemento = document.getElementById(idElemento);

    if (elemento) {
        elemento.textContent = valor;
    } else {
        console.warn(`No se encontró ningún elemento con id: ${idElemento}`);
    }
}

function mostrarGastoWeb(idElemento, gasto) {
    let contenedor = document.getElementById(idElemento);

    let divGasto = document.createElement("div");
    divGasto.classList.add("gasto");

    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("gasto-descripcion");
    divDescripcion.textContent = gasto.descripcion;
    divGasto.appendChild(divDescripcion);

    let divFecha = document.createElement("div");
    divFecha.classList.add("gasto-fecha");
    divFecha.textContent = gasto.fecha;
    divGasto.appendChild(divFecha);

    let divValor = document.createElement("div");
    divValor.classList.add("gasto-valor");
    divValor.textContent = gasto.valor;
    divGasto.appendChild(divValor);

    let divEtiquetas = document.createElement("div");
    divEtiquetas.classList.add("gasto-etiquetas");
    gasto.etiquetas.forEach(etiqueta => {
        let spanEtiqueta = document.createElement('span');
        spanEtiqueta.classList.add('gasto-etiquetas-etiqueta');
        spanEtiqueta.textContent = etiqueta;
        divEtiquetas.appendChild(spanEtiqueta);
      });
      divGasto.appendChild(divEtiquetas);
    contenedor.appendChild(divGasto);
}



function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {
    let contenedor = document.getElementById(idElemento);

    let divAgrup = document.createElement("div");
    divAgrup.classList.add("agrupacion");
    let titulo = document.createElement('h1');
    let textoPeriodo = '';
    if (periodo === 'mes') {
        textoPeriodo = 'mes';
    } else if (periodo === 'dia') {
        textoPeriodo = 'día';
    } else if (periodo === 'anyo') {
        textoPeriodo = 'año';
    }
    titulo.textContent = `Gastos agrupados por ${textoPeriodo}`;
    divAgrup.appendChild(titulo);
    Object.entries(agrup).forEach(([clave, valor]) => {
        let divDato = document.createElement('div');
        divDato.classList.add('agrupacion-dato');
    
        let spanClave = document.createElement('span');
        spanClave.classList.add('agrupacion-dato-clave');
        spanClave.textContent = clave;
    
        let spanValor = document.createElement('span');
        spanValor.classList.add('agrupacion-dato-valor');
        spanValor.textContent = valor;
        divDato.appendChild(spanClave);
        divDato.appendChild(spanValor);
    
        divAgrup.appendChild(divDato);
      });
    contenedor.appendChild(divAgrup);
}

export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}