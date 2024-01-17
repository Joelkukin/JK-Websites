<?php require_once "./php/header.php"?>
      <!-- Titulo -->
      <div class="py-4"></div>
      <div class="text-center py-5">
        <h1 class="text-white "> Contácteme </h1>
      </div>

      <!-- Contenido -->
      <div class="container">    
      
          <form >
            
            <div class="row justify-content-center">
              <!-- nombre --> 
              
              <input class="col d-block m-1" type="text" name="name" placeholder="Nombre" id="name">
              
              <!-- apellido --> 
              <input class="col d-block m-1 mb-0" type="text" name="apellido" placeholder="Apellido" id="apellido">

            </div>

            <div class="row justify-content-center p-1 mt-0">

              <!-- email --> 
              <input class="col-12 m-1 d-block" name="email" placeholder="Mail"
                id="email" type="email">

              <!-- asunto --> 
              <input class="col-12 m-1 d-block" name="asunto" placeholder="Asunto"
                id="asunto" type="text">

              <!-- Mensaje --> 
              <input class="col-12 m-1 d-block" name="mensaje" placeholder="Mensaje"
                id="mensaje" type="text">

              <!-- Boton --> 
              <input class="d-block" value="Enviar" type="button"> </div>
          </form>
      </div>
    
    </main>
    
    <?php require_once "../php/footer.php"?>