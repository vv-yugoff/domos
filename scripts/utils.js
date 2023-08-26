export function footerChange() {
    const footer = document.querySelector('footer');
    footer.style.position = 'relative';
    document.body.style.overflow = 'auto';

    return footer;
}

export function createLink() {
    const div = document.createElement('div');
    div.classList.add('content-button');

    const link = document.createElement('a');
    link.textContent = 'Перейти на сайт';
    link.classList.add('link');
    link.setAttribute('href', 'http://domos.top');

    div.appendChild(link);
    return div;
}