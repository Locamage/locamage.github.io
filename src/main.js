const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

$$('.query-strip, .approach-list, .usecase-list').forEach(group =>
    [...group.children].forEach((el, i) => el.style.setProperty('--reveal-index', Math.min(i, 6)))
);

if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('reveal-ready');
    const io = new IntersectionObserver(entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('visible');
        io.unobserve(e.target);
    }), { threshold: 0.08 });
    $$('.reveal').forEach(el => io.observe(el));
} else {
    $$('.reveal').forEach(el => el.classList.add('visible'));
}

{
    const nav = $('nav');
    let lastY = 0;
    addEventListener('scroll', () => {
        nav.classList.toggle('nav-hidden', scrollY > 80 && scrollY > lastY);
        lastY = scrollY;
    }, { passive: true });
}

{
    const stage = $('.slider-stage');
    let pct = 50;
    let dragging = false;

    const set = value => {
        pct = Math.max(2, Math.min(98, value));
        stage.style.setProperty('--slider-pct', pct + '%');
        stage.setAttribute('aria-valuenow', Math.round(pct));
        stage.setAttribute('aria-valuetext', Math.round(pct) + '% predictions visible');
    };
    const setFromX = x => {
        const rect = stage.getBoundingClientRect();
        set((x - rect.left) / rect.width * 100);
    };
    const end = () => {
        dragging = false;
        stage.classList.remove('is-dragging');
    };

    stage.addEventListener('pointerdown', e => {
        dragging = true;
        stage.classList.add('is-dragging');
        stage.setPointerCapture(e.pointerId);
        setFromX(e.clientX);
        e.preventDefault();
    });
    stage.addEventListener('pointermove', e => { if (dragging) setFromX(e.clientX); });
    stage.addEventListener('pointerup', end);
    stage.addEventListener('pointercancel', end);
    stage.addEventListener('keydown', e => {
        const step = e.shiftKey ? 10 : 4;
        const moves = { ArrowLeft: pct - step, ArrowDown: pct - step, ArrowRight: pct + step, ArrowUp: pct + step, Home: 2, End: 98 };
        if (e.key in moves) {
            set(moves[e.key]);
            e.preventDefault();
        }
    });
    set(pct);
}

{
    const viewport = $('.cap-viewport');
    const cards = $$('.cap-card', viewport);
    const prev = $('.cap-prev');
    const next = $('.cap-next');
    const dots = document.createElement('div');
    let active = 0;
    let swipeX = null;

    dots.className = 'cap-dots';
    dots.setAttribute('role', 'group');
    dots.setAttribute('aria-label', 'Capability slide navigation');
    viewport.setAttribute('aria-live', 'polite');

    const update = () => {
        prev.disabled = active === 0;
        next.disabled = active === cards.length - 1;
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === active);
            card.toggleAttribute('hidden', i !== active);
            card.setAttribute('aria-hidden', i !== active);
        });
        [...dots.children].forEach((dot, i) => {
            dot.classList.toggle('active', i === active);
            dot.setAttribute('aria-current', i === active);
        });
    };
    const goTo = i => {
        active = Math.max(0, Math.min(cards.length - 1, i));
        update();
    };

    cards.forEach((card, i) => {
        card.setAttribute('aria-label', `Capability ${i + 1} of ${cards.length}`);
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'cap-dot';
        dot.setAttribute('aria-label', `Go to capability ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dots.appendChild(dot);
    });
    $('.cap-dot-slot').appendChild(dots);

    prev.addEventListener('click', () => goTo(active - 1));
    next.addEventListener('click', () => goTo(active + 1));
    viewport.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            goTo(e.key === 'ArrowLeft' ? active - 1 : active + 1);
            e.preventDefault();
        }
    });
    viewport.addEventListener('pointerdown', e => { swipeX = e.clientX; });
    viewport.addEventListener('pointerup', e => {
        if (swipeX == null) return;
        const delta = e.clientX - swipeX;
        swipeX = null;
        if (Math.abs(delta) >= 48) goTo(delta > 0 ? active - 1 : active + 1);
    });
    viewport.addEventListener('pointercancel', () => { swipeX = null; });
    update();
}

{
    const btn = $('.nav-toggle');
    const menu = $('.mobile-nav');
    const links = $$('.mobile-nav-link', menu);
    const isOpen = () => btn.getAttribute('aria-expanded') === 'true';

    const setOpen = open => {
        menu.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open);
        menu.setAttribute('aria-hidden', !open);
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) links[0].focus();
    };

    btn.addEventListener('click', () => setOpen(!isOpen()));
    links.forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', e => {
        if (!isOpen()) return;
        if (e.key === 'Escape') {
            setOpen(false);
            btn.focus();
        }
        if (e.key === 'Tab') {
            e.preventDefault();
            const order = [btn, ...links];
            const i = order.indexOf(document.activeElement);
            order[(i + (e.shiftKey ? -1 : 1) + order.length) % order.length].focus();
        }
    });
}

{
    const copy = $('[data-copy-email]');
    const status = $('.contact-status');
    const email = copy.dataset.copyEmail;
    const fallback = () => { status.textContent = 'Email address: ' + email; };

    copy.addEventListener('click', () => {
        if (!navigator.clipboard) return fallback();
        navigator.clipboard.writeText(email).then(() => {
            status.textContent = 'Email copied.';
            copy.textContent = 'Copied';
            copy.classList.add('copied');
            setTimeout(() => {
                copy.textContent = 'Copy Email';
                copy.classList.remove('copied');
                status.textContent = '';
            }, 2200);
        }, fallback);
    });
}
