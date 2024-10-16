# Catálogo de Productos Dinámicos

Este proyecto es una página web que muestra un catálogo de productos de manera dinámica, utilizando HTML, CSS y JavaScript.

## Características

- Carga dinámica de productos desde un archivo JSON
- Diseño responsivo
- Efecto de hover en las imágenes de los productos
- Iconos interactivos para "me gusta"

## Estructura del Proyecto
├── index.html
├── main.css
├── main.js
├── productos.json
└── img/
├── burberry.webp
├── burberryModel.webp
├── Lente.webp
└── lenteHover.webp

## Cómo funciona

1. El archivo `index.html` proporciona la estructura básica de la página.
2. `main.css` contiene todos los estilos para la presentación de los productos.
3. `main.js` se encarga de cargar los datos de los productos desde `productos.json` y generar dinámicamente las tarjetas de productos en el DOM.
4. `productos.json` almacena la información de los productos, incluyendo nombres, descripciones, precios e imágenes.

## Cómo usar

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. Los productos se cargarán automáticamente desde el archivo JSON.

## Personalización

Para añadir o modificar productos, edita el archivo `productos.json`. Asegúrate de seguir el mismo formato para cada producto:

json
{
"id": 3,
"nombre": "Nombre del Producto",
"descripcion": "Descripción del producto",
"precio": "$XXX",
"etiqueta": "Etiqueta del producto",
"imagen": "ruta/a/la/imagen.webp",
"imagenHover": "ruta/a/la/imagen-hover.webp"
}


## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome para los iconos

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir qué te gustaría cambiar.


