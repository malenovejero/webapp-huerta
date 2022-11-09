//selecciono un elemento (#llamamenu) y le asigno un evento para que escuche (click)
document.querySelector('#llamafiltro').addEventListener('click', () => {
    //selecciono un elemento ("ul") y le agrego una clase(.visible) en el click
    document.querySelector(".filtrocontenedor").classList.toggle('visiblefiltro');
});
//selecciono un elemento (#llamamenu) y le asigno un evento para que escuche (click)
document.querySelector('#cierrafiltro').addEventListener('click', () => {
    //selecciono un elemento ("ul") y le agrego una clase(.visible) en el click
    document.querySelector(".filtrocontenedor").classList.toggle('visiblefiltro');
});