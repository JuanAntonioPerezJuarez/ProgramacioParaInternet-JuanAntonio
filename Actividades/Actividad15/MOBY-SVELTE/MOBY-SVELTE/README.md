# MOBY - Reporte de Proyecto

## Introducción
MOBY es un portafolio web inmobiliario desarrollado como tarea académica. El objetivo es presentar información relevante sobre la empresa, sus servicios, proyectos, equipo y contacto, utilizando tecnologías modernas para ofrecer una experiencia de usuario fluida y responsiva.

## Objetivos del Proyecto
- Modernizar el sitio migrando de HTML clásico a una Single Page Application (SPA) con Svelte.
- Mantener una estructura visual coherente y profesional.
- Mejorar la navegación y la experiencia de usuario.
- Facilitar la escalabilidad y el mantenimiento del código.

## Tecnologías Utilizadas
- **Svelte**: Framework principal para la construcción de interfaces reactivas.
- **svelte-spa-router**: Librería para navegación tipo SPA sin recarga de página.
- **CSS personalizado**: Para estilos y responsividad.

## Estructura del Proyecto
```
MOBY-SVELTE/
├── src/
│   ├── App.svelte         # Layout principal y router
│   ├── pages/
│   │   ├── Home.svelte    # Página de inicio
│   │   ├── Projects.svelte# Proyectos destacados
│   │   ├── Services.svelte# Servicios inmobiliarios
│   │   ├── Team.svelte    # Equipo de trabajo
│   │   └── Contact.svelte # Página de contacto
│   ├── images/            # Recursos gráficos y favicon
│   └── app.css            # Estilos globales
├── public/
├── package.json
└── README.md
```

## Instalación
1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd MOBY-SVELTE
   ```
2. **Instala las dependencias**
   ```bash
   npm install
   ```
3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```
4. **Abre la aplicación**
   Visita [http://localhost:5173](http://localhost:5173) en tu navegador.

## Migración a SPA
- El proyecto original consistía en archivos HTML independientes.
- Se migró a Svelte, centralizando la navegación con `svelte-spa-router`.
- Los enlaces ahora usan rutas tipo hash (`#/ruta`) para funcionar en cualquier servidor estático.
- Cada página fue convertida a un componente Svelte reutilizable.

## Capturas de Pantalla
A continuación se muestran ejemplos de las principales pantallas del proyecto:

### Página de Inicio
![image](https://github.com/user-attachments/assets/b8fe39af-d318-4649-8be5-e1811263e010)
![image](https://github.com/user-attachments/assets/bb7d26ea-674e-4086-a9ac-ea486111eaf0)


### Página de Proyectos
![image](https://github.com/user-attachments/assets/55d99628-0439-49be-be03-8475686b05c3)


### Página de Servicios
![image](https://github.com/user-attachments/assets/eb340a38-146a-4e54-8e51-be0c783fc37e)


### Página de Contacto
![image](https://github.com/user-attachments/assets/c3a1f9fa-a0c1-41d9-a4a3-a26a1e79dae1)


> **Nota:** Guarda tus capturas en `src/images/` y usa la ruta relativa para agregarlas al README.

## Consideraciones
- El diseño es responsivo y puede adaptarse fácilmente a nuevas secciones.
- Para íconos, se recomienda usar FontAwesome vía CDN o instalar el paquete correspondiente.

## Autor y Créditos
- Proyecto realizado por [Tu Nombre] para la materia de [Nombre de la materia o curso].
- Imágenes de Unsplash y avatares de randomuser.me.

---
