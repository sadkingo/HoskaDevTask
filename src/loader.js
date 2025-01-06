import main from "./main"
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

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('header', 'src/html/header.html');
    await loadComponent('footer', 'src/html/footer.html');
    main();
});
