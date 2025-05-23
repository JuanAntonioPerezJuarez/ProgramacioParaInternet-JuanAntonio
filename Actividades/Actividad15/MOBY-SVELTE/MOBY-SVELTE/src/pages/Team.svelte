<main>
    <section class="team-hero">
        <h1>Nuestro Equipo</h1>
        <p>Conoce a los profesionales que hacen posible nuestra misión inmobiliaria.</p>
    </section>
    <section class="team-list">
        <div class="team-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Socio 1" class="team-photo">
            <h3>Juan Pérez</h3>
            <p>Director General</p>
        </div>
        <div class="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Socia 2" class="team-photo">
            <h3>María López</h3>
            <p>Arquitecta Principal</p>
        </div>
        <div class="team-card">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Socio 3" class="team-photo">
            <h3>Carlos Gómez</h3>
            <p>Asesor Inmobiliario</p>
        </div>
    </section>
</main>

<style>
.team-hero {
    background: var(--primary);
    color: var(--neutral-light);
    padding: 4rem 0 2rem 0;
    text-align: center;
}
.team-list {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 0;
}
.team-card {
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
.team-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
}
</style>
