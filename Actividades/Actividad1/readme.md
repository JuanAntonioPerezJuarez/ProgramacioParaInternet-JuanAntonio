# Curriculum Vitae Digital

Un curriculum vitae digital responsive creado con HTML y CSS, con un diseño moderno y profesional que destaca la información profesional de manera efectiva.

## Características

- Diseño limpio y profesional
- Totalmente responsive
- Esquema de colores profesional
- Secciones bien organizadas
- Integración con redes sociales
- Optimizado para diferentes dispositivos

## Tecnologías Utilizadas

- HTML5
- CSS3
- Sistema de fuentes del sistema
- Diseño responsivo

## Estructura del Proyecto

```
curriculum/
├── Curriculum.html
├── Curriculum.css
└── Foto.jpg
```

## Requisitos de Instalación

1. Clona o descarga los archivos del repositorio
2. Asegúrate de tener los siguientes archivos:
   - `Curriculum.html`
   - `Curriculum.css`
   - Una foto personal nombrada como `Foto.jpg`

## Personalización

### Modificar Colores
El tema actual utiliza la siguiente paleta de colores que puedes modificar en `Curriculum.css`:
```css
/* Colores principales */
background-color: #557b83;    /* Color de fondo principal */
background-color: #39AEA9;    /* Color de navegación y footer */
background-color: #E5EFC1;    /* Color de fondo del contenido */
```

### Ajustar Imagen de Perfil
```css
img {
    width: 10%;              /* Ajusta el ancho de la imagen */
    height: 15%;            /* Ajusta la altura de la imagen */
    border: solid 3px #39AEA9; /* Modifica el borde */
}
```

### Modificar Espaciado
```css
p {
    margin: 1.5em;          /* Ajusta el margen */
    padding: 1.5 rem;       /* Ajusta el padding */
}
```

## Estructura HTML

El CV está organizado en las siguientes secciones:
1. Encabezado con nombre
2. Información de contacto
3. Resumen profesional
4. Experiencia laboral
5. Certificaciones
6. Pie de página

## Personalización del Contenido

### Modificar Información Personal
En `Curriculum.html`, actualiza:
```html
<h2>Tu Nombre</h2>
<p>Tu descripción profesional...</p>
```

### Actualizar Información de Contacto
```html
<p>Tu dirección<br>
   Tu ciudad, Estado<br>
   Tu teléfono<br>
   <a href="tu-link-linkedin">LinkedIn</a></p>
```

### Agregar Nueva Experiencia Laboral
```html
<h3 class="MiniTitulo">Nombre de la Empresa</h3>
<p>Período de trabajo</p>
<p>Descripción de responsabilidades...</p>
```

## Compatibilidad

El CV es compatible con:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge
- Dispositivos móviles y tablets

## Consejos de Uso

1. **Imagen de Perfil**: Usa una foto profesional de 400x400 píxeles
2. **Contenido**: Mantén las descripciones concisas y relevantes
3. **Enlaces**: Verifica que todos los enlaces funcionen correctamente
4. **Responsive**: Prueba el CV en diferentes dispositivos

## Consideraciones

- La foto debe estar en el mismo directorio que los archivos HTML y CSS
- Mantén el nombre de archivo `Foto.jpg` o actualiza la referencia en el HTML
- Asegúrate de que los enlaces a redes sociales estén actualizados

## Licencia

Este template de CV está disponible para uso libre y modificación, manteniendo los créditos originales en el footer.
