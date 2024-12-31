// Array de proyectos
const proyectos = [
    {
        titulo: "Portafolio Personal",
        descripcion: "Primer proyecto para presentar mis habilidades de programación.",
        imagen: "images/portafolio.png",
        tecnologias: [
            {
                nombre: "HTML",
                url: "https://developer.mozilla.org/es/docs/Web/HTML",
                icono: "devicon-html5-plain"
            },
            {
                nombre: "CSS",
                url: "https://developer.mozilla.org/es/docs/Web/CSS",
                icono: "devicon-css3-plain"
            },
            {
                nombre: "JavaScript",
                url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
                icono: "devicon-javascript-plain"
            }
        ],
        codigoFuente: "https://github.com/User/Repository"
    }
];

// Función para crear una imagen
function crearImagen(src, alt, clase) {
    const imagen = document.createElement("img");
    imagen.src = src;
    imagen.alt = alt;
    imagen.classList.add(clase);
    return imagen;
}

// Función para crear un título (h3)
function crearTitulo(texto, clase) {
    const titulo = document.createElement("h3");
    titulo.classList.add(clase);
    titulo.textContent = texto;
    return titulo;
}

// Función para crear una descripción (p)
function crearDescripcion(texto, clase) {
    const descripcion = document.createElement("p");
    descripcion.classList.add(clase);
    descripcion.textContent = texto;
    return descripcion;
}

// Función para crear un enlace a las tecnologías
function crearEnlaceTecnologia(url, clase, icono, nombre) {
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.classList.add(clase);
    enlace.target = "_blank";

    const iconoElemento = document.createElement("i");
    iconoElemento.classList.add(icono);

    enlace.appendChild(iconoElemento);
    enlace.appendChild(document.createTextNode(" " + nombre));

    return enlace;
}

// Función para crear el enlace al código fuente
function crearEnlaceCodigo(url, clase) {
    const enlaceCodigo = document.createElement("a");
    enlaceCodigo.classList.add(clase);
    enlaceCodigo.href = url;
    enlaceCodigo.textContent = "Código Fuente";
    return enlaceCodigo;
}

// Función para crear un div de proyecto
function crearProyecto(proyecto) {
    const divProyecto = document.createElement("div");
    divProyecto.classList.add("proyecto");

    const imagen = crearImagen(proyecto.imagen, "Imagen del proyecto", "proyecto-imagen");
    const titulo = crearTitulo(proyecto.titulo, "proyecto-titulo");
    const descripcion = crearDescripcion(proyecto.descripcion, "proyecto-descripcion");

    const divTecnologias = document.createElement("div");
    divTecnologias.classList.add("proyecto-tecnologias");

    proyecto.tecnologias.forEach(function(tecnologia) {
        const enlaceTecnologia = crearEnlaceTecnologia(tecnologia.url, "tecnologia", tecnologia.icono, tecnologia.nombre);
        divTecnologias.appendChild(enlaceTecnologia);
    });

    const enlaceCodigo = crearEnlaceCodigo(proyecto.codigoFuente, "proyecto-codigo");

    divProyecto.appendChild(imagen);
    divProyecto.appendChild(titulo);
    divProyecto.appendChild(descripcion);
    divProyecto.appendChild(divTecnologias);
    divProyecto.appendChild(enlaceCodigo);

    return divProyecto;
}

/* PROGRAMA PRINCIPAL */
const contenedorProyectos = document.getElementById("proyectos");

proyectos.forEach(function(proyecto) {
    const divProyecto = crearProyecto(proyecto);
    contenedorProyectos.appendChild(divProyecto);
});
