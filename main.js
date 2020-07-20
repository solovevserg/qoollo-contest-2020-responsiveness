const body = document.body;
function resize() {
    const width = window.innerWidth;
    if (width < 850) {
        body.classList.add('mobile');
    } else {
        body.classList.remove('mobile');
    }
}

const menu = document.querySelector('nav');
function updateMenu() {
    const scrollY = window.scrollY;
    if (scrollY < 200) {
        // menu.classList.add('menu--top')
        menu.classList.remove('menu--scrolled')
    } else {
        menu.classList.add('menu--scrolled')
        // menu.classList.remove('menu--top')
    }
}

async function main(...args) {
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', updateMenu)
    updateMenu()
}

main();