<svelte:head>
    <title>MOBY</title>
    <link rel="icon" type="image/x-icon" href="/images/icon.ico" />
</svelte:head>

<script>
// Aquí puedes agregar lógica de Svelte si lo necesitas
</script>

<style>
.contact-hero {
    background: var(--primary);
    color: var(--neutral-light);
    padding: 4rem 0 2rem 0;
    text-align: center;
}
.contact-hero h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
.contact-hero p {
    font-size: 1.2rem;
    opacity: 0.9;
}

.contact-info {
    padding: 2rem 0;
    background: var(--neutral-light);
}
.contact-grid {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}
.contact-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    padding: 2rem 1.5rem;
    min-width: 240px;
    max-width: 320px;
    flex: 1 1 260px;
    text-align: center;
    margin-bottom: 1rem;
}
.icon-container {
    background: var(--primary);
    color: #fff;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem auto;
    font-size: 1.5rem;
}
.btn-architect {
    background: var(--secondary);
    color: #fff;
    border: none;
    border-radius: 24px;
    padding: 0.5rem 1.5rem;
    margin-top: 1rem;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
    text-decoration: none;
}
.btn-architect:hover {
    background: var(--primary);
}
.btn-icon {
    margin-left: 0.5rem;
}

@media (max-width: 900px) {
    .contact-grid {
        flex-direction: column;
        align-items: center;
    }
}
</style>

<!-- Hero Section -->
<section class="contact-hero">
    <div class="container">
        <h1>Estamos aquí para ayudarte</h1>
        <p>Comunícate con nosotros para encontrar tu hogar ideal o para cualquier consulta inmobiliaria</p>
    </div>
</section>

<!-- Contact Info Cards -->
<section class="contact-info">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-card">
                <div class="icon-container">
                    <i class="fas fa-map-marker-alt fa-lg"></i>
                </div>
                <h3>Visítanos</h3>
                <p>Av. Principal 123, Colonia Centro<br>Ciudad de México, CP 12345</p>
                <a href="#map-section" class="btn-architect small">
                    <span class="btn-text">Ver en mapa</span>
                    <i class="fas fa-arrow-right btn-icon"></i>
                </a>
            </div>
            <div class="contact-card">
                <div class="icon-container">
                    <i class="fas fa-phone-alt fa-lg"></i>
                </div>
                <h3>Llámanos</h3>
                <p>+52 55 1234 5678<br>Lun-Vie: 9am - 6pm</p>
                <a href="tel:+525512345678" class="btn-architect small">
                    <span class="btn-text">Llamar ahora</span>
                    <i class="fas fa-arrow-right btn-icon"></i>
                </a>
            </div>
            <div class="contact-card">
                <div class="icon-container">
                    <i class="fas fa-envelope fa-lg"></i>
                </div>
                <h3>Escríbenos</h3>
                <p>contacto@arquitecturainmobiliaria.com<br>Respuesta en menos de 24h</p>
                <a href="mailto:contacto@arquitecturainmobiliaria.com" class="btn-architect small">
                    <span class="btn-text">Enviar correo</span>
                    <i class="fas fa-arrow-right btn-icon"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Si tienes una sección de mapa, agrégala aquí -->
<!-- <section id="map-section">...</section> -->

<!-- IMPORTANTE: Para los íconos FontAwesome, instala el paquete o usa un CDN en tu layout principal -->
