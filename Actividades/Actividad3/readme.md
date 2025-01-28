# Tarjeta de Presentación con Efecto Flip

Una elegante tarjeta de presentación interactiva que utiliza efectos 3D para crear una animación de volteado (flip) cuando el usuario pasa el cursor sobre ella. El proyecto incluye una imagen frontal y una parte posterior con información de contacto y enlaces a redes sociales.

## Características

- Efecto de volteado 3D suave
- Diseño responsivo
- Integración con iconos de Font Awesome
- Efectos de hover en los iconos sociales
- Tipografía personalizada de Google Fonts
- Diseño minimalista y moderno

## Tecnologías Utilizadas

- HTML5
- CSS3
- Font Awesome (para iconos)
- Google Fonts (Josefin Sans)

## Instalación

1. Clona este repositorio:
```bash
git clone [URL-del-repositorio]
```

2. Asegúrate de tener los siguientes archivos en tu directorio:
   - `TareaLibre.html`
   - `style.css`
   - `image.jpg` (debes agregar tu propia imagen)

3. Verifica que la estructura del proyecto sea la siguiente:
```
proyecto/
├── TareaLibre.html
├── style.css
└── image.jpg
```

## Uso

1. Abre el archivo `TareaLibre.html` en tu navegador web
2. Pasa el cursor sobre la tarjeta para ver el efecto de volteado
3. La parte posterior mostrará la información de contacto y enlaces a redes sociales

## Personalización

### Cambiar la imagen frontal
Reemplaza el archivo `image.jpg` con tu propia imagen o modifica la ruta en el HTML:
```html
<div class="front"><img src="tu-imagen.jpg"></div>
```

### Modificar la información personal
En el archivo `TareaLibre.html`, actualiza los siguientes campos:
```html
<h2>Tu Nombre<br><span>Tu Cargo</span></h2>
```

### Actualizar enlaces sociales
Modifica los enlaces de redes sociales en el HTML:
```html
<a href="tu-url-de-facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
<a href="tu-url-de-instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
```

## Personalización de Estilos

Puedes modificar los siguientes valores en `style.css` para personalizar la apariencia:

- Dimensiones de la tarjeta:
```css
.card {
    width: 300px;    /* Ancho de la tarjeta */
    height: 400px;   /* Alto de la tarjeta */
}
```

- Colores:
```css
.social-icons a {
    background: #262626;  /* Color de fondo de iconos sociales */
}

.social-icons a:hover {
    background: #e91e63;  /* Color de hover de iconos sociales */
}
```

## Compatibilidad

El proyecto es compatible con los siguientes navegadores:
- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Licencia

Este proyecto está disponible para uso libre. Siéntete libre de modificarlo y adaptarlo a tus necesidades.
