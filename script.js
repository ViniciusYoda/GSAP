window.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined') return;

    const quadrado = document.querySelector('.quadrado');
    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduzirMovimento) return;

    gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.etiqueta', { y: 20, opacity: 0, duration: .6 })
        .from('h1', { y: 50, opacity: 0, duration: .9 }, '-=.35')
        .from('.cabecalho p', { y: 25, opacity: 0, duration: .7 }, '-=.5')
        .from('.brilho', { scale: .6, opacity: 0, duration: 1 }, '-=.8')
        .from(quadrado, { scale: 0, rotation: -20, duration: 1, ease: 'back.out(1.6)' }, '-=.75')
        .from('.dica, footer', { opacity: 0, duration: .6 }, '-=.3');

    gsap.to('.brilho', { rotation: 360, duration: 28, repeat: -1, ease: 'none' });

    quadrado.addEventListener('click', () => {
        gsap.timeline()
            .to(quadrado, { rotation: '+=180', scale: .78, borderRadius: '50%', duration: .45, ease: 'power2.in' })
            .to(quadrado, { rotation: '+=180', scale: 1, borderRadius: '28%', duration: .7, ease: 'elastic.out(1, .45)' });
    });

    quadrado.addEventListener('pointermove', (evento) => {
        const caixa = quadrado.getBoundingClientRect();
        const x = (evento.clientX - caixa.left - caixa.width / 2) * .12;
        const y = (evento.clientY - caixa.top - caixa.height / 2) * .12;
        gsap.to(quadrado, { x, y, duration: .35, ease: 'power2.out' });
    });

    quadrado.addEventListener('pointerleave', () => {
        gsap.to(quadrado, { x: 0, y: 0, duration: .7, ease: 'elastic.out(1, .5)' });
    });
});
