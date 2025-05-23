<script>
  import Router from 'svelte-spa-router';
  import Home from './pages/Home.svelte';
import Contact from './pages/contact.svelte';
import Projects from './pages/Projects.svelte';
import Services from './pages/Services.svelte';
import Team from './pages/Team.svelte';

const routes = {
  '/': Home,
  '/contact': Contact,
  '/projects': Projects,
  '/services': Services,
  '/team': Team
};
</script>

<header>
    <div class="logo">
        <img src="/images/LogoOG.jfif" alt="Logo MOBY" style="height: 48px; width: auto; display: block;">
    </div>
    <nav>
        <ul>
            <li><a href="#/">Inicio</a></li>
            <li><a href="#/services">Servicios</a></li>
            <li><a href="#/projects">Proyectos</a></li>
            <li><a href="#/contact">Contacto</a></li>
        </ul>
    </nav>
</header>

<Router {routes} />


<main>
    <section class="hero">
        <div class="hero-content">
            <h1>Redefiniendo<br>el mercado Inmobiliario</h1>
            <p>Somos la inmobiliaria por excelencia en Guadalajara</p>
            <div class="hero-buttons">
                <a href="#/projects" class="btn btn-primary">Nuestros Proyectos</a>
                <a href="/contact/contact.html" class="btn btn-secondary">Conócenos</a>
            </div>
        </div>
    </section>

    <section class="featured-projects">
        <div class="section-header">
            <h2>Proyectos Destacados</h2>
            <p>Calificados como la Inmobiliaria más destacada de Guadalajara</p>
        </div>
        <div class="project-grid">
            <a href="#/projects">
                <div class="project-card">
                    <div class="project-image" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"></div>
                    <div class="project-info">
                        <h3>Casa Moderna</h3>
                        <p>Providencia</p>
                    </div>
                </div>
            </a>
            <a href="#/projects">
                <div class="project-card">
                    <div class="project-image" style="background-image: url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"></div>
                    <div class="project-info">
                        <h3>Coat House</h3>
                        <p>Puerto Vallarta | 2023</p>
                    </div>
                </div>
            </a>
            <a href="#/projects">
                <div class="project-card">
                    <div class="project-image" style="background-image: url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"></div>
                    <div class="project-info">
                        <h3>Urban Loft</h3>
                        <p>Midtown Guadalajara | 2023</p>
                    </div>
                </div>
            </a>
        </div>
    </section>
</main>

<footer>
    <div class="footer-content">
        <div class="footer-logo">
            <img src="/images/LogoOG.jfif" alt="Logo MOBY" style="height: 200px; width: auto; display: block;">
        </div>
        <div class="footer-links">
            <div class="footer-column">
                <h4>Estudio</h4>
                <ul>
                    <li><a href="#">Mision y Vision</a></li>
                    <li><a href="#/team">Equipo</a></li>
                    <li><a href="#">Historia</a></li>
                    <li><a href="#">Contáctanos</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Servicios</h4>
                <ul>
                    <li><a href="#">Construccion</a></li>
                    <li><a href="#">Compra y Venta de Inmuebles</a></li>
                    <li><a href="#">Diseño de Interiores</a></li>
                    <li><a href="#">Notaria</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Contacto</h4>
                <p>inmobiliaria@moby.com.mx</p>
                <p>+52 </p>
                <p>Direccion</p>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Estudio de Arquitectura. Todos los derechos reservados.</p>
    </div>
</footer>

<style>
/* Estilos generales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #00B8C8;
    --secondary: #F15A40;
    --neutral-light: #FFFFFF;
    --neutral-dark: #2E3A47;
    --accent: #F4A261;
}

body {
    font-family: 'Poppins', sans-serif;
    color: var(--neutral-dark);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

/* Header y navegación */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5%;
    background-color: #fff;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 48px;
    width: auto;
    margin-right: 1rem;
    display: block;
}

nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

nav ul {
    display: flex;
    gap: 2rem;
    background: rgba(255,255,255,0.95);
    padding: 0.5rem 2rem;
    border-radius: 20px;
    align-items: center;
    margin: 0;
}


nav ul {
    display: flex;
    gap: 2rem;
    background: rgba(255,255,255,0.95);
    padding: 0.5rem 2rem;
    border-radius: 20px;
}

nav ul li a {
    font-weight: 600;
    color: var(--neutral-dark);
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

nav ul li a.active, nav ul li a:hover {
    color: var(--primary);
    text-decoration: underline;
}


.logo {
    display: flex;
    align-items: center;
}

nav ul {
    display: flex;
    gap: 2rem;
}

nav ul li a {
    font-weight: 500;
    transition: color 0.3s ease;
}

nav ul li a:hover, nav ul li a.active {
    color: var(--primary);
}

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: var(--secondary);
    color: var(--neutral-light);
}

.btn-primary:hover {
    background-color: #e04a30;
    transform: translateY(-2px);
}

.btn-secondary {
    background-color: transparent;
    color: var(--neutral-dark);
    border: 1px solid var(--neutral-dark);
}

.btn-secondary:hover {
    background-color: var(--neutral-dark);
    color: var(--neutral-light);
    transform: translateY(-2px);
}

.btn-outline {
    border: 1px solid var(--primary);
    color: var(--primary);
}

.btn-outline:hover {
    background-color: var(--primary);
    color: var(--neutral-light);
}

/* Hero Section */
.hero {
    height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin-left: 5%;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 3rem;
    border-radius: 10px;
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--neutral-dark);
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--neutral-dark);
}

.hero-buttons {
    display: flex;
    gap: 1rem;
}

/* Featured Projects Section */
.featured-projects {
    padding: 5rem 5%;
    background-color: var(--primary);
    color: var(--neutral-light);
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
}

.project-card {
    background-color: var(--neutral-light);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-image {
    height: 250px;
    background-size: cover;
    background-position: center;
}

.project-info {
    padding: 1.5rem;
    color: var(--neutral-dark);
}

.project-info h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.project-info p {
    color: #666;
}

/* Footer */
footer {
    background-color: var(--neutral-dark);
    color: var(--neutral-light);
    padding: 2rem 0 1rem 0;
    margin: 0;
    width: 100vw;
    max-width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    box-sizing: border-box;
}

.footer-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
}

.footer-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
}

.footer-links {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    justify-content: center;
    align-items: flex-start;
}


.footer-logo {
    flex: 0 0 auto;
    display: flex;
    align-items: flex-start;
}

.footer-links {
    flex: 1 1 0;
    display: flex;
    flex-direction: row;
    gap: 4rem;
    justify-content: center;
    align-items: flex-start;
}

.footer-column {
    min-width: 140px;
}

.footer-logo {
    margin-bottom: 1rem;
}

.footer-links {
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
}

.footer-column h4 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
}

.footer-column h4::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: var(--accent);
}

.footer-column ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.footer-column a:hover {
    color: var(--accent);
}

.footer-column p {
    margin-bottom: 0.8rem;
    opacity: 0.8;
}

.footer-bottom {
    text-align: center;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    opacity: 0.7;
    margin-bottom: 0;
}

/* Responsive */
@media (max-width: 768px) {
    header {
        padding: 1rem 5%;
    }
    /* nav { display: none; }  Eliminado para que el nav siempre sea visible */
    .hero-content {
        margin: 0 5%;
        padding: 2rem;
    }
    .hero-content h1 {
        font-size: 2.5rem;
    }
    .footer-content {
        flex-direction: column;
        gap: 2rem;
    }
    .footer-links {
        gap: 2rem;
    }
}

body, html, main {
    width: 100vw;
    min-width: 100vw;
    min-height: 100vh;
    background: var(--neutral-dark);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

main {
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.hero-content {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>