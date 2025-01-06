function loadComponent(id, file) {
    return fetch(file)
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById(id);
            container.outerHTML = html;
        })
        .catch(error => {
            console.error(`Error loading ${file}:`, error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'src/components/header/header.html');
    loadComponent('footer', 'src/components/footer/footer.html').then(
        () => {
            // load main.js
            const script = document.createElement('script');
            script.src = 'src/main.js';
            script.type = 'module';
            document.body.appendChild(script);
        }
    );
});
