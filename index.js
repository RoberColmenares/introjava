var precio = 400000;
var cantidad = 0;


var precioSpan = document.querySelector(".precio-inicial");
var cantidadSpan = document.querySelector(".cantidad");
var totalSpan = document.querySelector(".valor-total");

var botonSuma = document.querySelector('#suma'); 
var botonRestar = document.querySelector('#resta');

precioSpan.innerHTML = precio;
totalSpan.innerHTML = precio * cantidad;





botonSuma.addEventListener("click", function() {
    cantidad++; 
    document.querySelector('.cantidad').textContent = cantidad; 
    totalSpan.textContent = precio * cantidad;
});


botonRestar.addEventListener("click", function() {
    cantidad--; 
    document.querySelector('.cantidad').textContent = cantidad; 
    totalSpan.textContent = precio * cantidad;
});



