const confirmButton = document.getElementById('resumen_compra');
const resetButton = document.getElementById('resetButton');
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
let totalAPagar = document.getElementById('totalAPagar');

confirmButton.addEventListener('click', () => {
    let total;
    let descuento
    descuento = cantidad.value * 200 * categoria.value / 100;
    total = cantidad.value * 200 - descuento;
    console.log(total)
    if (cantidad.value > 0) {
        totalAPagar.textContent = "Total a pagar: $" + total;
    }
})
resetButton.addEventListener('click', () => {
    totalAPagar.textContent = "Total a pagar: $";

})