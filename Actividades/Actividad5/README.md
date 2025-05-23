# MOBY Inmobiliaria

![Logo de MOBY Inmobiliaria](assets/images/logo.png)

## Descripción

Sitio web informativo para MOBY Inmobiliaria, una empresa dedicada a la compra, venta y alquiler de propiedades inmobiliarias. Esta versión inicial es un sitio estático desarrollado con HTML, CSS y JavaScript que presenta información sobre la empresa, propiedades disponibles y datos de contacto.

## Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Despliegue](#despliegue)
- [Roadmap](#roadmap)
- [Contacto](#contacto)
- [Licencia](#licencia)

## Estructura del Proyecto

```
moby-inmobiliaria/
│
├── index.html              # Página principal
├── about.html              # Acerca de nosotros
├── properties.html         # Listado de propiedades
├── contact.html            # Página de contacto
│
├── assets/
│   ├── css/
│   │   ├── styles.css      # Estilos principales
│   │   └── responsive.css  # Estilos responsivos
│   │
│   ├── js/
│   │   ├── main.js         # Funcionalidades principales
│   │   └── slider.js       # Script para el slider de imágenes
│   │
│   ├── images/             # Imágenes del sitio
│   │   ├── logo.png
│   │   ├── properties/     # Imágenes de propiedades
│   │   └── team/           # Imágenes del equipo
│   │
│   └── fonts/              # Fuentes utilizadas
│
└── README.md               # Este archivo
```

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- [FontAwesome](https://fontawesome.com/) - Para iconos
- [Google Fonts](https://fonts.google.com/) - Para tipografías

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/moby-inmobiliaria.git
   cd moby-inmobiliaria
   ```

2. No se requieren dependencias adicionales para ejecutar el proyecto en su versión actual.

## Uso

Para ver el sitio localmente, simplemente abre el archivo `index.html` en tu navegador web:

```bash
# En sistemas Linux/macOS
open index.html

# En Windows
start index.html
```

También puedes utilizar un servidor local para una experiencia más cercana a la producción:

```bash
# Si tienes Python instalado
python -m http.server

# Si tienes Node.js instalado
npx serve
```

## Despliegue

### Despliegue en AWS (Próximo paso)

El sitio será desplegado en Amazon Web Services siguiendo estos pasos:

1. **Almacenamiento**: Amazon S3 para alojar los archivos estáticos
2. **Distribución**: CloudFront para la entrega de contenido
3. **Dominio**: Route 53 para gestionar el dominio
4. **SSL/TLS**: AWS Certificate Manager para certificado HTTPS

#### Instrucciones básicas para despliegue en S3:

1. Crear un bucket en S3:
   ```
   aws s3 mb s3://moby-inmobiliaria-website --region tu-region
   ```

2. Configurar el bucket para alojamiento web estático:
   ```
   aws s3 website s3://moby-inmobiliaria-website/ --index-document index.html --error-document error.html
   ```

3. Subir los archivos:
   ```
   aws s3 sync ./ s3://moby-inmobiliaria-website/ --exclude ".git/*" --acl public-read
   ```

## Roadmap

El desarrollo futuro de MOBY Inmobiliaria está planificado como sigue:

### Fase 1: Sitio Web Estático (Actual)
- Desarrollo de sitio informativo con HTML, CSS y JS
- Despliegue en AWS
- Optimización SEO básica

### Fase 2: Migración a Laravel (6 meses)
- Migración a framework Laravel
- Implementación de backend para gestión de propiedades
- Sistema de autenticación para administradores
- Panel de administración
- Base de datos de propiedades y clientes

### Fase 3: Aplicación Móvil (10+ meses)
- Desarrollo de API RESTful
- Aplicación móvil para Android e iOS
- Funcionalidades avanzadas de búsqueda de propiedades
- Notificaciones push para nuevas propiedades
- Integración con servicios de mapas

## Contacto

Para cualquier consulta relacionada con el desarrollo del proyecto:

- **Desarrollador**: [Tu Nombre]
- **Email**: [tu@email.com]
- **Web**: [www.tudominio.com]

## Licencia

Este proyecto está bajo la licencia [incluir licencia]. Consulta el archivo LICENSE para más detalles.

---

&copy; 2025 MOBY Inmobiliaria. Todos los derechos reservados.
