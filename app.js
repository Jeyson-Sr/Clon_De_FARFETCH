
function cargarProductos() {
    fetch('productos.json')
        .then(response => response.json())
        .then(datos => {
            const contenedor = document.getElementById('productContainer');
            
            datos.productos.forEach(producto => {
                const tarjeta = `
                    <div class="product-card">
                        <div class="product-card__content">
                            <div class="product-card__icon">
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <div class="product-card__image">
                                <img class="product-card__img" src="${producto.imagen}" alt="${producto.nombre}">
                                <img class="product-card__img-hover" src="${producto.imagenHover}" alt="${producto.nombre}">
                            </div>
                        </div>
                        <div class="product-card__info">
                            <p class="product-card__tag">${producto.etiqueta}</p>
                            <h3 class="product-card__title">${producto.nombre}</h3>
                            <p class="product-card__description">${producto.descripcion}</p>
                            <p class="product-card__price">${producto.precio}</p>
                        </div>
                    </div>
                `;
                contenedor.innerHTML += tarjeta;
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
}

// Llamar a la función cuando se carga la página
window.onload = cargarProductos;