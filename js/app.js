$(document).ready(function() {
    /*
    * Modal que materialize me da
    */
    $('.modal').modal();
  
    /*
    * Evento click que se ejecuta cuando le hago click al botón con id add
    * botón que se encuentra al interior del modal
    */
    $('#add').click(function() {
      /*
      * Guardo en la variable name lo ingresado en el input con clase name
      */
      var name = $('.name').val();
      /*
      * Limpio el input
      */
      $('.name').val('');
      /*
      * Guardo en la variable phone lo ingresado en el input con clase phone
      */
      var phone = $('.phone').val();
      /*
      * Limpio el input
      */
      $('.phone').val('');
  
      /*
      * Guardo en la variable contenedor el div vacío con id cont que está
      * en el html, donde se guardarán los contactos
      */
      var contenedor = $('#cont');
      /*
      * Le agrego al contenedor la estructura que necesito con el valor de
      * las variables name y phone
      */
      contenedor.append('<div class="container contacto"><ul class="collection"><li class="collection-item avatar"><h5>' + name + '</h5><p>' + phone + '</p><a href="#!" class="secondary-content"><i class="material-icons basura">delete_forever</i></a></li></ul></div>');
      /*
      * Dejo la llamada hecha a la función que borra el contacto
      */
      deleteContact();
    });
  
    /*
    * Función que borra el contacto
    */
    function deleteContact() {
      /*
      * Esta función se ejecuta una vez que se le da click al ícono de la basura
      */
      $('.basura').click(function() {
        /*
        * toma el ícono basura al que se le hizo click (referencia)
        * y elimina al padre del padre de ese padre
        */
        $(this).parent().parent().parent().parent().remove();
      });
    }
  
    /*
    * Evento que se aplica al input con id search y se ejecuta con cada tecla
    */
    $('#search').keyup(function() {
      /*
      * Guardo en la variable nombre lo que se ingresó en el input
      */
      var nombre = $(this).val();
      /*
      * Escondo todos los contactos por defecto rápidamente, el ojo no lo ve
      */
      $('.collection').hide();
  
      /*
      * Itero por cada uno de los contactos que están contenido en un ul
      * con clase collection
      */
      $('.collection').each(function() {
        /*
        * Guardo en la variable search lo que el contacto tiene como
        * nombre en cada collection (cada vez que itera guarda un valor distinto)
        */
        var search = $(this).text();
        /*
        * Aplico en el search un indexOf para que busque la coincidencia con lo ingresado
        * en el input. Si lo que existe en los contactos (search) coincide con lo ingresado
        * en el input (nombre) entonces devuelve algo distinto a -1 (-1 es lo que devuelve
        * indexOf cuando no encuentra coincidencia)
        */
        if (search.indexOf(nombre) !== -1) {
          /*
          * Entonces muestro ESE contacto (search)
          * (referencia solo al contacto que hizo match)
          */
          $(this).show();
        }
      });
    });
  });