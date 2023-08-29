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
    
    link.style.font = "500";
    link.style.display = "flex";
    link.style.alignItems = "center";
    link.style.justifyContent = "center";
    link.style.backgroundColor = "#19356C";
    link.style.color = "#EDF3FF";
    link.style.width = "336px";
    link.style.height = "67px";
    link.style.fontSize = "18px";
    link.style.textDecoration = "none";
    link.style.textAlign = "center";

    link.style.backgroundColor = "#19356C";

    div.appendChild(link);
    return div;
}

export function createInput() {
    const div = document.createElement('div');
    div.classList.add('content-button');

    const input = document.createElement('input');
    input.href = '#';
    input.id = 'submit';
    input.value = 'Ответить';
    input.readOnly;

    div.appendChild(input);
    return div;
}