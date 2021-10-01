let btn = document.querySelector( '#btn' );

btn.addEventListener( 'click', function(){
  let indicador = document.querySelector( '#indicador' );
  
  let random = Math.floor( Math.random() * 6 ) + 1;
  
  indicador.innerHTML = random
  console.log( random );
} );