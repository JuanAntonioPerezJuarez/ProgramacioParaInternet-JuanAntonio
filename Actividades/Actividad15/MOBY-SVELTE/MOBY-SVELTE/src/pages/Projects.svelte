<main>
    <section class="projects-hero">
        <h1>Proyectos</h1>
        <p>Descubre algunos de nuestros proyectos inmobiliarios más destacados.</p>
    </section>
    <section class="projects-list">
        <div class="project-card">
            <div class="project-image" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')"></div>
            <div class="project-info">
                <h3>Casa Moderna</h3>
                <p>Providencia</p>
            </div>
        </div>
        <div class="project-card">
            <div class="project-image" style="background-image: url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')"></div>
            <div class="project-info">
                <h3>Coat House</h3>
                <p>Puerto Vallarta | 2023</p>
            </div>
        </div>
        <div class="project-card">
            <div class="project-image" style="background-image: url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')"></div>
            <div class="project-info">
                <h3>Urban Loft</h3>
                <p>Midtown Guadalajara | 2023</p>
            </div>
        </div>
    </section>
</main>

<style>
.projects-hero {
    background: var(--primary);
    color: var(--neutral-light);
    padding: 4rem 0 2rem 0;
    text-align: center;
}
.projects-list {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 0;
}
.project-card {
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
.project-image {
    width: 100%;
    height: 180px;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    margin-bottom: 1rem;
}
</style>
