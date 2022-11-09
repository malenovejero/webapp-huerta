//selecciono un elemento (#llamamenu) y le asigno un evento para que escuche (click)
document.querySelector('#llamamenu').addEventListener('click', () => {
    //selecciono un elemento ("ul") y le agrego una clase(.visible) en el click
    document.querySelector("ul").classList.toggle('visible');
});