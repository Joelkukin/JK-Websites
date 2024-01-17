<?php
    /* Esta funcion falla, hay que arreglar */
    function img_card ( string $titulo, string $descripcion, string $url_imagen, $botones = '' ) {
        if ( 
            isset($titulo, $descripcion, $url_imagen, $botones ) 
        ) {
            /* Declaro variables */
            $html; 
            $grupo_botones = '';

            /* Agrupar botones */
            if(is_array( $botones )) {
                for( $i = 0; $i < count( $botones ); $i++ ){
                    $grupo_botones .= '<a href="'.$botones[$i]['url'].'" class="btn btn-primary">'.$botones[$i]['titulo'].'</a>';
                }
            } else {
                $grupo_botones = $botones;
            }

            /* Completar Plantilla html */
            $html='<div class="card" style="width: 18rem;">
                <img src="'.$url_imagen.'" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">'.$titulo.'</h5>
                    <p class="card-text">'.$descripcion.'</p>
                    '.$grupo_botones.'
                </div>
            </div>';
            return $html;
        } else {
            return 'Error: los parametros no son strings o faltan parametros';
        }
    }

?>