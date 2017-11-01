var playa = document.getElementById('playa'); // guardar en variables el id para reutilizar
var monte = document.getElementById('monte');// guardar en variables el id para reutilizar
var p1 = document.getElementById('p1'); // guardar en variables el id para reutilizar


playa.addEventListener("click",function(){ // cuando la variabel playa (declarada arriba) oiga el evento click realisar la funcion
    monte.style.display = 'none'; // uso propiedades de css con el punto accsedo a su valor 
    p1.innerHTML = 'decidieron ir a la playa '; // la variable v1 (declarada arriba) le creeo un texto con la propiedad inner de js
    var p = document.createElement("p"); // creo una variable p que acceda a la funcion crear elemento en el documento
    playa.appendChild(p); // appendchild a la variable playa (declarada arriba)  le creo el hijo p de la linea de arriba
    playa = playa.className = 'stop' 
    p.innerHTML = '<br>despues de unas largas horas de viaje rumbo a la casa en la playa';// inner crea un texto a la variable p

});


 monte.addEventListener("click",function(){ // lee el de  arriba -.-
    playa.style.display  = 'none'; // lee el de  arriba -.-
    p1.innerHTML = 'decidieron ir a la montaña ';    // lee el de  arriba -.-
    var p = document.createElement("p"); // lee el de  arriba -.-
    monte.appendChild(p); // lee el de  arriba -.-
    p.innerHTML = '<br> despues de unas largas horas de viaje rumbo a la montaña'; // lee el de  arriba -.-
    monte = monte.className = 'stop'; // a la varibale monte (declarada arriba) le pongo esta classe de boostrap es un espacio de una columna
});



