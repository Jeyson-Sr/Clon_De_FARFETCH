# Clon de Farfetch: Catálogo de Productos de Moda de Lujo

Este proyecto es una recreación de la página web de Farfetch (https://www.farfetch.com/), una plataforma de comercio electrónico de moda de lujo. Utiliza HTML, CSS y JavaScript para mostrar un catálogo dinámico de productos y secciones adicionales inspiradas en el diseño de Farfetch.

## Características

- Carga dinámica de productos de lujo desde un archivo JSON
- Diseño responsivo similar al de Farfetch
- Efecto de hover en las imágenes de los productos
- Iconos interactivos para "me gusta"
- Secciones adicionales: colaboración con diseñadores, estilos destacados y pasarela
- Múltiples contenedores de productos de marcas de lujo

## Estructura del Proyecto
├── index.html
├── css/
│   ├── main.css
│   ├── colaboración.css
│   ├── estilos.css
│   └── pasarela.css
├── js/
│   └── app.js
├── productos.json
└── img/
    ├── burberry.webp
    ├── burberryModel.webp
    ├── Lente.webp
    ├── lenteHover.webp
    ├── modelo2.webp
    ├── modelo3.webp
    ├── modelo4.webp
    └── modelo5.webp

## Funcionamiento

1. `index.html` proporciona la estructura básica, imitando el diseño de Farfetch.
2. Los archivos CSS en `css/` contienen los estilos para replicar la apariencia de Farfetch.
3. `app.js` carga los datos de productos de lujo desde `productos.json` y genera dinámicamente las tarjetas de productos.
4. `productos.json` almacena la información de productos de marcas de lujo, similar a los que se encuentran en Farfetch.

## Uso

1. Clona este repositorio en tu máquina local.
2. Abre `index.html` en tu navegador web para ver la recreación de Farfetch.
3. Los productos de lujo se cargarán automáticamente en dos contenedores diferentes.

## Personalización

Para añadir o modificar productos de lujo, edita `productos.json`. Mantén el formato consistente para cada producto en los arrays "productos1" y "productos2".

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome para iconos (como en Farfetch)
- Google Fonts para tipografías similares a las de Farfetch

## Secciones principales (inspiradas en Farfetch)

1. Catálogo de productos de lujo (dos secciones)
2. Colaboración con diseñadores (El mundo de Brunello Cucinelli)
3. Estilos destacados (Camisas con personalidad y Boggi Milano)
4. Lo mejor de la pasarela (Dolce & Gabbana)

## Contribuciones

Las contribuciones para mejorar esta recreación de Farfetch son bienvenidas. Por favor, abre un issue primero para discutir los cambios propuestos.

Nota: Este proyecto es una recreación educativa y no está afiliado oficialmente con Farfetch.
