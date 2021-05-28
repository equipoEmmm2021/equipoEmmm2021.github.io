//Fixing content menu during scrolling

window.onscroll = function() {
    var y = window.scrollY;
    var a = document.getElementById("contentMenu");
    if(y >= 803){
        document.getElementById("MenuCampaign").classList.add("mainMenuFixed");
        if(a){
            document.getElementById("contentMenu").classList.add("menuFixed");
            document.getElementById("contentMain").style.marginLeft="16.8%";
        }
        
    }else{
        document.getElementById("MenuCampaign").classList.remove("mainMenuFixed");
        if(a){
            document.getElementById("contentMenu").classList.remove("menuFixed");
            document.getElementById("contentMain").style.marginLeft="0px";
        }
        
        
    }
};

document.getElementById("closeAlertD").addEventListener("click", function(event){
    event.preventDefault();
  });

  
function contentMenuFixed(){
    var scrollPosition = window.scrollY;

    if(scrollPosition >= 803){
        document.getElementById("contentMenu").classList.add("menuFixed");
        document.getElementById("MenuCampaign").classList.add("mainMenuFixed");
        document.getElementById("contentMain").style.marginLeft="16.8%";;
    }else{
        document.getElementById("contentMenu").classList.remove("menuFixed");
        document.getElementById("MenuCampaign").classList.remove("mainMenuFixed");
        document.getElementById("contentMain").style.marginLeft="0px";
    }
}

//Functions to show different content blocks in mobile

function showCampaignM(){
    document.getElementById("buttonCampaignM").classList.add("menuActive");
    document.getElementById("buttonRewardsM").classList.remove("menuActive");
    document.getElementById("buttonFaqsM").classList.remove("menuActive");
    document.getElementById("buttonCommentsM").classList.remove("menuActive");
    document.getElementById("buttonTeamM").classList.remove("menuActive");

    var a =document.getElementById('mainM');
    document.getElementById('fullBody').style.backgroundImage="url('../img/fondo_nasa.png')";
    a.innerHTML='<div id="campaignM" class="row campaignM">\n' +
                    '<div class="row"> <!-- MAIN VIDEO MOBILE -->\n' +
                        '<div id="videoM" class="col-xs-12 col-sm-12 video-responsive">\n' +
                            '<video src="video/secuencia_01.mp4" controls="true" width="100%" height="auto"></video>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row"> <!-- ORIGINAL MUSIC MOBILE -->\n' +
                        '<div class="col-xs-12 col-sm-12">\n' +
                            '<h3 class="contentSubTitle">Música original</h3>\n' +
                            '<p>Nuestro equipo ha creado una música, no solo perfecta para la ambientación de la exploración espacial o las batallas, sino que te transportará a esass aventuras espaciales en cualquier momento</p>\n' +
                            '<p>Escucha una muestra:</p>\n' +
                            '<audio src="music/space.mp3" controls="controls" type="audio/mpeg" preload="preload"></audio>\n' +
                            '<audio src="music/space_accion.mp3" controls="controls" type="audio/mpeg" preload="preload"></audio>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row"> <!-- PROJECT DESCRIPTION MOBILE-->\n' +
                        '<div class="col-xs-12 col-sm-12">\n' +
                            '<h3 class="contentSubTitle">Nuestro proyecto</h3>\n' +
                            '<p>Galactic Expansion es un juego de estrategia freemium para móviles. Diferentes razas se enfrentaran por los distintos recursos de la galaxia. Elige a la raza que quieres llevar a la victoria a través de sus capacidades únicas. Crea tu propia ciudadela y prepara a tus ejércitos para las emocionantes batallas PVE y PVP. Se el soberano de la galaxia y porque no del universo.</p>\n' +
                            '<p>Si por el contrario lo tuyo es la exploración, podrás descubrir el universo conocido y visitar otros planetas y ciudadelas, jugando en tu móvil y sin ningún tipo de conexión. Con ello conseguirás recursos que te ayudarán a expandir tu propia base.</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row"> <!-- FULL STORY MOBILE -->\n' +
                        '<div class="col-xs-12 col-sm-12">\n' +
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12">\n' +
                                    '<h3 class="contentSubTitle">Trasfondo del juego</h3>\n' +
                                    '<p>Después de cientos de años las naves colonas han alcanzado una galaxia habitable, pero tú no eres el único pueblo que quiere hacer suyos estos territorios. ¿Quién obtendrá lo que desea?</p>\n' +
                                    '<h4 class="contentMiniTitle">¡Toma el control!</h4>\n' +
                                    '<p>En esta zona de nuevos peligros tú asumirás el puesto del líder de una colonia y tendrás que buscar la expansion con los métodos que tú prefieras. Captura zonas de recursos, defiende tus asentamientos, conquista a los demás pueblos o alíate con ellos.</p>\n' +
                                    '<p>Cada raza es única y por tanto tienen sus propias fortalezas. Obtén más rápido recursos, ten unidades más poderosas o conquista sin necesidad de luchar.</p>\n' +
                                    '<h4 class="contentMiniTitle">El poder de estar unidos</h4>\n' +
                                    '<p>Una vez que has elegido a tu raza deberás tomar una decisión quieres luchar solo o tener ayuda en momentos críticos. Únete a una Mega corporación y utiliza sus conexiones con otras razas para obtener recursos únicos por los que de otra forma tendrías que matar.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12 musicaMockup">\n' +
                                    'Imagen de ejemplo (Razas)\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12">\n' +
                                    '<p>En Galactic Expansion se recompensara la buena toma de decisiones, las estrategias y la constancia. Cada movimiento te acercara o alejara de ser el emperador de la galaxia.</p>\n' +
                                    '<h3 class="contentSubTitle">Razas</h3>\n' +
                                    '<h4 class="contentMiniTitle">Humanos</h4>\n' +
                                    '<p>Su ambición y su desesperación por la supervivencia les llevó a salir de su planeta en una aventura a ciegas. Ahora son un pueblo extendido y respetado que ha creado una gran coalición con otras razas.</p>\n' +
                                    '<p>Su equilibrio en armamento, defensa y recursos es casi perfecto</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12 musicaMockup">\n' +
                                    'Imagen de Humanos\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12">\n' +
                                    '<h4 class="contentMiniTitle">Los guerreros</h4>\n' +
                                    '<p>Una raza conocida en todo el universo por su habilidad en la batalla y sus guerreros sin miedo a la muerte. Toman lo que quieren, destruyendo a todo lo que se interponga en su camino.</p>\n' +
                                    '<p>Entre sus filas encontraras algunos de los mejores guerreros cuerpo a cuerpo del universo.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12 musicaMockup">\n' +
                                    'Imagen de Guerreros\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12">\n' +
                                    '<h4 class="contentMiniTitle">Los prósperos</h4>\n' +
                                    '<p>Conocidos en el universo por su gran capacidad para adaptarse a las situaciones más extremas. </p>\n' +
                                    '<p>Puede que no tengan el mayor poder ofensivo pero no se les escapan los secretos de la tierra y de cómo obtener el máximo de beneficios con el mínimo esfuerzo.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12 musicaMockup">\n' +
                                    'Imagen de Prósperos\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12">\n' +
                                    '<h4 class="contentMiniTitle">Los avanzados</h4>\n' +
                                    '<p>Conocidos en el universo por sus grandes conocimientos, son una especie muy avanzada tecnológicamente y pocos pueden compararse a ellos.</p>\n' +
                                    '<p>La construcción de grandes estructuras es su especialidad y defensivamente se encuentran a la vanguardia.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12 musicaMockup">\n' +
                                    'Imagen de Avanzados\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12">\n' +
                                    '<h3 class="contentSubTitle">Mega corporaciones</h3>\n' +
                                    '<p>Las Mega corporaciones son los poderes más influyentes del Universo. Estas corporaciones tienen cientos de razas asociadas y todas se benefician de lo que pueden ofrecer las otras ya que cada una está especializada en un sector, así que deberás recapacitar seriamente acciones que puedan dañar este equilibrio.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class="row">\n' +
                                '<div class="col-md-12 col-lg-12">\n' +
                                    '<h3 class="contentSubTitle">Mega corporaciones</h3>\n' +
                                    '<p>Las Mega corporaciones son los poderes más influyentes del Universo. Estas corporaciones tienen cientos de razas asociadas y todas se benefician de lo que pueden ofrecer las otras ya que cada una está especializada en un sector, así que deberás recapacitar seriamente acciones que puedan dañar este equilibrio.</p>\n' +
                                '</div>\n' +
                                '<div class="row">\n' +
                                    '<div class="col-md-4 col-lg-4">\n' +
                                        '<img src="img/simbolo_guerrillero.png" alt="Símbolo de una megacorporación" class="img-responsive">\n' +
                                    '</div>\n' +
                                    '<div class="col-md-4 col-lg-4">\n' +
                                        '<img src="img/simbolo_prospero.png" alt="Símbolo de una megacorporación" class="img-responsive">\n' +
                                    '</div>\n' +
                                    '<div class="col-md-4 col-lg-4">\n' +
                                        '<img src="img/simbolo_tecnologico.png" alt="Símbolo de una megacorporación" class="img-responsive">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12">\n' +
                                    '<h4 class="contentMiniTitle">Primera corporación</h4>\n' +
                                    '<p>Nacida en la época en la que las guerras  estaban como primera orden del día. Esta corporación se especializa en el intercambio de armamentos y soldados especializados en la conquista.</p>\n' +
                                    '<p>No se toman a la ligera el ataque a sus asociados y ello puede dañar gravemente las relaciones y tu imperio en consecuencia.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12 musicaMockup">\n' +
                                    'Imagen primera Mega corporación\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12">\n' +
                                    '<h4 class="contentMiniTitle">Segunda corporación</h4>\n' +
                                    '<p>Buscando el poder económico, tienen una gran cantidad de recursos que ofrecen a todo aquel dispuesto a pagar el precio adecuado. Esta corporación te ofrece una gran cantidad de materiales únicos a precios increíbles si eres su asociado.</p>\n' +
                                    '<p>Cualquier acción que les haga perder beneficios no quedara sin un castigo acorde.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12 musicaMockup">\n' +
                                    'Imagen segunda Mega corporación\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12">\n' +
                                    '<h4 class="contentMiniTitle">Tercera corporación</h4>\n' +
                                    '<p>Defender a los suyos es su misión por ello tienen los mejores sistemas de defensa. Esta corporación te ofrece sistemas especiales para que no tengas que temer a los ataques.</p>\n' +
                                    '<p>Para crecer es imprescindible conservar lo ya conseguido.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12 musicaMockup">\n' +
                                    'Imagen tercera Mega corporación\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row"> <!-- GAMEPLAY MOBILE -->\n' +
                        '<div class="col-xs-12 col-sm-12 musicaMockup">\n' +
                            '<h3 class="contentSubTitle">Cómo se juega</h3>\n' +
                        '</div>\n' +
                    '</div>'

}

function showRewardsM(){
    
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    
    document.getElementById("buttonRewardsM").classList.add("menuActive");
    
    document.getElementById("buttonFaqsM").classList.remove("menuActive");
   
    document.getElementById("buttonCommentsM").classList.remove("menuActive");
   
    document.getElementById("buttonTeamM").classList.remove("menuActive");

    var a = document.getElementById('mainM');
    document.getElementById('fullBody').style.backgroundImage="url('../img/fondo_nasa_2.png')";
    a.innerHTML='<div id="rewardsM" class="row"> <!-- REWARDS -->\n' +
                    '<div class="row bloqueM">\n' +
                        '<div class="row barraEstadoM"></div>\n' +
                        '<div class="row">\n' +
                            '<div class="col-xs-5 col-sm-5">\n' +
                                '<p class="recaudado">3.523,52€</p>\n' +
                                '<p class="subText">contribuido de 20.000€</p>\n' +
                            '</div>\n' +
                            '<div class="col-xs-4 col-sm-4">\n' +
                                '<p class="datoNum">100</p>\n' +
                                '<p class="subText">patrocinadores</p>\n' +
                            '</div>\n' +
                            '<div class="col-xs-3 col-sm-3">\n' +
                                '<p class="datoNum">200</p>\n' +
                                '<p class="subText">días más</p>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div id=\"projectDescriptionD\" class=\"row\"> <!-- Project description MOBILE -->\n' +
                        '<div class=\"col-xs-12 col-sm-12 bloqueM\">\n' +
                            '<h3 class=\"contentSubTitle\">Nuestro proyecto</h3>\n' +
                            '<p>Galactic Expansion es un juego de estrategia freemium para móviles. Diferentes razas se enfrentaran por los distintos recursos de la galaxia. Elige a la raza que quieres llevar a la victoria a través de sus capacidades únicas. Crea tu propia ciudadela y prepara a tus ejércitos para las emocionantes batallas PVE y PVP. Se el soberano de la galaxia y porque no del universo.</p>\n' +
                            '<p >Si por el contrario lo tuyo es la exploración, podrás descubrir el universo conocido y visitar otros planetas y ciudadelas, jugando en tu móvil y sin ningún tipo de conexión. Con ello conseguirás recursos que te ayudarán a expandir tu propia base.</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row bloqueM\">\n' +
                        '<div class=\"col-xs-12 col-sm-12\">\n' +
                            '<a href=\"#MenuCampaign\" onclick=\"alertD()\"><div class=\"mainButton\">Patrocina este proyecto</div></a>\n' +
                        '</div>\n' +
                    '<div class="row bloqueM">\n' +
                        '<div class="col-xs-12 col-sm-12">\n' +
                            '<h2>Objetivos</h2>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row">\n' +
                        '<div class="col-xs-12 col-sm-12">\n' +
                            '<h2>Recompensas</h2>\n' +
                            '<p>Con tu apoyo para conseguir nuestras diferentes metas, aparte de obtener nuestra gratitud, también podrás conseguir acceso exclusivo a la beta y beneficios que te facilitaran las etapas tempranas del juego.</p>\n' +
                        '</div>\n' + 
                    '</div>\n' +                       
                    '<div class=\"row\">\n' +
                        '<div class=\"col-xs-12 col-sm-12\">\n' +
                            '<div id=\"rewardM1\" class=\"rewardM\">\n' +
                                '<img class="img-responsive" style="width: 50%;" src="img/concept_raza_1.jpg"></img>\n' +
                                '<h4>10€</h4>\n' +
                                '<p class="rewardTitle">Explorador espacial</p>\n' +
                                '<ul>Incluye:\n' +
                                    '<li>· Una copia del juego</li>\n' +
                                    '<li>· Paquete de ilustraciones originales (PDF)</li>\n' +
                                    '<li>· Acceso a la descarga de la BSO del juego (MP3)</li>\n' +
                                '</ul>\n' +
                                '<input type="button" value="Contribuir" name="Contribuir" onclick="alertM()">\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row\">\n' +
                        '<div class=\"col-xs-12 col-sm-12\">\n' +
                            '<div id=\"rewardM2\" class=\"rewardM\"\">\n' +
                                '<img class="img-responsive" style="width: 50%;" src="img/concept_raza_1.jpg"></img>\n' +
                                '<h4>50€</h4>\n' +
                                '<p class="rewardTitle">Alto dirigente</p>\n' +
                                '<ul>Incluye:\n' +
                                    '<li>· Recompensas anteriores</li>\n' +
                                    '<li>· Paquete completo de mejoras para tu ciudad inicial</li>\n' +
                                    '<li>· Paquete completo de mejoras para tu nave de exploración</li>\n' +
                                '</ul>\n' +
                                '<input type="button" value="Contribuir" name="Contribuir" onclick="alertM()">\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row\">\n' +
                        '<div class=\"col-xs-12 col-sm-12\">\n' +
                            '<div id=\"rewardM3\" class=\"rewardM\"\">\n' +
                                '<img class="img-responsive" style="width: 50%;" src="img/concept_raza_1.jpg"></img>\n' +
                                '<h4>100€</h4>\n' +
                                '<p class="rewardTitle">Megacorporación</p>\n' +
                                '<ul>Incluye:\n' +
                                    '<li>· Recompensas anteriores</li>\n' +
                                    '<li>· Copia digital del libro de desarrollo del juego</li>\n' +
                                    '<li>· 4 figuras de resina de alta calidad (100mm) de las 4 razas</li>\n' +
                                '</ul>\n' +
                                '<input type="button" value="Contribuir" name="Contribuir" onclick="alertM()">\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row" style="margin-top: 3rem;">\n' +
                        '<a href="#MenuCampaignM" onclick="alertM()"><div class="mainButton">Patrocina este proyecto</div></a>\n' +
                    '</div>\n' +
                '</div>'
}
    

function showFaqsM(){
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    document.getElementById("buttonRewardsM").classList.remove("menuActive");
    document.getElementById("buttonFaqsM").classList.add("menuActive");
    document.getElementById("buttonCommentsM").classList.remove("menuActive");
    document.getElementById("buttonTeamM").classList.remove("menuActive");

    var a=document.getElementById('mainM');
    document.getElementById('fullBody').style.backgroundImage="url('../img/fondo1.png')";
    a.innerHTML='<div id="faqsM" class="row faqM">\n' +
                    '<h2>FAQS</h2>\n' +
                '</div>'

}

function showCommentsM(){
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    document.getElementById("buttonRewardsM").classList.remove("menuActive");
    document.getElementById("buttonFaqsM").classList.remove("menuActive");
    document.getElementById("buttonCommentsM").classList.add("menuActive");
    document.getElementById("buttonTeamM").classList.remove("menuActive");

    var a=document.getElementById('mainM');
    document.getElementById('fullBody').style.backgroundImage="url('../img/fondo_eagle-nebula-2.png')";
    a.innerHTML='<div id="commentsM" class="row commentsM">\n' +
                    '<h2>COMENTARIOS</h2>\n' +
                '</div>'
}

function showTeamM(){
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    document.getElementById("buttonRewardsM").classList.remove("menuActive");
    document.getElementById("buttonFaqsM").classList.remove("menuActive");
    document.getElementById("buttonCommentsM").classList.remove("menuActive");
    document.getElementById("buttonTeamM").classList.add("menuActive");

    var a=document.getElementById('mainM');
    document.getElementById('fullBody').style.backgroundImage="url('../img/fondo_carina-nebula-wide.png')";
    a.innerHTML='<div id="teamM" class="row teamM">\n' +
                    '<div class="col-xs-12 col-sm-12 bloqueM">\n' +
                        '<h2>Nuestro equipo:</h2>\n' +
                        '<p><strong>·ALARCÓN RIERA, ÓSCAR</strong> - Música original</p>\n' +
                        '<p><strong>·BARRIGA PIÑERO, JAVIER</strong> - Game design (real: documentación y textos)</p>\n' +
                        '<p><strong>·LÓPEZ SÁNCHEZ, ALEJANDRO</strong> - Concept Pjs</p>\n' +
                        '<p><strong>·MARTIN HERNANDEZ, CARLOS</strong> - Animación y programación (real: código web y montaje de vídeo)</p>\n' +
                        '<p><strong>·RODRÍGUEZ CORDERO, BORJA</strong> - Game design (real: documentación y textos)</p>\n' +
                        '<p><strong>·SANZ CORONEL, JORGE</strong> - Concept escenarios e items (real: elaboración de imágenes)</p>\n' +
                    '</div>\n' +
                '</div>'
}

//Functions to show different content blocks in desktop


function showCampaignD(){
    document.getElementById('buttonCampaignD').classList.add('menuActive');
    document.getElementById('buttonProjectD').classList.remove('menuActive');
    document.getElementById('buttonFaqsD').classList.remove('menuActive');
    document.getElementById('buttonCommentsD').classList.remove('menuActive');
    document.getElementById('buttonTeamD').classList.remove('menuActive');

    var a = document.getElementById("main");
    document.getElementById('fullBody').style.backgroundImage="url('../img/fondo_nasa.png')";
    a.innerHTML='<div class=\"row wrapper\"> \n' +
        '<div class=\"col-md-12 col-lg-12\">\n' +
            '<div id=\"campaignD\" class=\"row campaignD\">\n' +
                '<div id=\"contentMenu\" class=\"col-md-2 col-lg-2\">\n' +
                    '<div class=\"row content_menuLink-row\">\n' +
                        '<div class=\"col-md-12 col-lg-12 bloqueD\">\n' +
                            '<a href=\"#videoD\" onclick=\"contentMenuFixed()\"><div class=\"content_menuLink\">Vídeo de presentación</div></a>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row content_menuLink-row\">\n' +
                        '<div class=\"col-md-12 col-lg-12 bloqueD\">\n' +
                            '<a href=\"#musicD\" onclick=\"contentMenuFixed()\"><div class=\"content_menuLink\">Música original</div></a>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row content_menuLink-row\">\n' +
                        '<div class=\"col-md-12 col-lg-12 bloqueD\">\n' +
                            '<a href=\"#fullStoryD\" onclick=\"contentMenuFixed()\"><div class=\"content_menuLink\">Trasfondo</div></a>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row content_menuLink-row\">\n' +
                        '<div class=\"col-md-12 col-lg-12 bloqueD\">\n' +
                            '<a href=\"#gameplayD\" onclick=\"contentMenuFixed()\"><div class=\"content_menuLink\">Cómo se juega</div></a>\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>\n' +
                '<div id=\"contentMain\" class=\"col-md-10 col-lg-10\" style=\"margin-right: 1%;\">\n' +
                    '<div class=\"row\"> <!-- MAIN VIDEO -->\n' +
                        '<div id=\"videoD\" class=\"col-md-12 col-lg-12 video-responsive\">\n' +
                            //'<iframe src=\"https://www.youtube.com/embed/jk3XSZAxOfA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n' +
                            '<video src="video/secuencia_01.mp4" controls="true" width="100%" height="auto"></video>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div id=\"musicD\" class=\"row\"> <!-- Original music DESKTOP -->\n' +
                        '<div class=\"col-md-12 col-lg-12\">\n' +
                            '<h3 class=\"contentSubTitle\">Música original</h3>\n' +
                            '<p>Nuestro equipo ha creado una música, no solo perfecta para la ambientación de la exploración espacial o las batallas, sino que te transportará a esass aventuras espaciales en cualquier momento</p>\n' +
                            '<p>Escucha una muestra:</p>\n' +
                            '<audio src=\"music/space.mp3\" controls=\"controls\" type=\"audio/mpeg\" preload=\"preload\"></audio>\n' +
                            '<audio src=\"music/space_accion.mp3\" controls=\"controls\" type=\"audio/mpeg\" preload=\"preload\"></audio>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    
                    '<div id=\"fullStoryD\" class=\"row\"> <!-- FULL STORY DESKTOP -->\n' +
                        '<div class=\"col-md-12 col-lg-12\">\n' +
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h3 class=\"contentSubTitle\">Trasfondo del juego</h3>\n' +
                                    '<p>Después de cientos de años las naves colonas han alcanzado una galaxia habitable, pero tú no eres el único pueblo que quiere hacer suyos estos territorios. ¿Quién obtendrá lo que desea?</p>\n' +
                                    '<p class=\"contentMiniTitle\">¡Toma el control!</p>\n' +
                                    '<p>En esta zona de nuevos peligros tú asumirás el puesto del líder de una colonia y tendrás que buscar la expansion con los métodos que tú prefieras. Captura zonas de recursos, defiende tus asentamientos, conquista a los demás pueblos o alíate con ellos.</p>\n' +
                                    '<p>Cada raza es única y por tanto tienen sus propias fortalezas. Obtén más rápido recursos, ten unidades más poderosas o conquista sin necesidad de luchar.</p>\n' +
                                    '<p class=\"contentMiniTitle\">El poder de estar unidos</p>\n' +
                                    '<p>Una vez que has elegido a tu raza deberás tomar una decisión quieres luchar solo o tener ayuda en momentos críticos. Únete a una Mega corporación y utiliza sus conexiones con otras razas para obtener recursos únicos por los que de otra forma tendrías que matar.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12 musicaMockup\">\n' +
                                    'Imagen de ejemplo (Razas)\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<p>En Galactic Expansion se recompensara la buena toma de decisiones, las estrategias y la constancia. Cada movimiento te acercara o alejara de ser el emperador de la galaxia.</p>\n' +
                                    '<h3 class=\"contentSubTitle\">Razas</h3>\n' +
                                    '<h4 class=\"contentMiniTitle\">Humanos</h4>\n' +
                                    '<p>Su ambición y su desesperación por la supervivencia les llevó a salir de su planeta en una aventura a ciegas. Ahora son un pueblo extendido y respetado que ha creado una gran coalición con otras razas.</p>\n' +
                                    '<p>Su equilibrio en armamento, defensa y recursos es casi perfecto</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12 musicaMockup\">\n' +
                                    'Imagen de Humanos\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentminiTitle\">Los guerreros</h4>\n' +
                                    '<p>Una raza conocida en todo el universo por su habilidad en la batalla y sus guerreros sin miedo a la muerte. Toman lo que quieren, destruyendo a todo lo que se interponga en su camino.</p>\n' +
                                    '<p>Entre sus filas encontraras algunos de los mejores guerreros cuerpo a cuerpo del universo.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12 musicaMockup\">\n' +
                                    'Imagen de Guerreros\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentminiTitle\">Los prósperos</h4>\n' +
                                    '<p>Conocidos en el universo por su gran capacidad para adaptarse a las situaciones más extremas. </p>\n' +
                                    '<p>Puede que no tengan el mayor poder ofensivo pero no se les escapan los secretos de la tierra y de cómo obtener el máximo de beneficios con el mínimo esfuerzo.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12 musicaMockup\">\n' +
                                    'Imagen de Prósperos\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentminiTitle\">Los avanzados</h4>\n' +
                                    '<p>Conocidos en el universo por sus grandes conocimientos, son una especie muy avanzada tecnológicamente y pocos pueden compararse a ellos.</p>\n' +
                                    '<p>La construcción de grandes estructuras es su especialidad y defensivamente se encuentran a la vanguardia.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12 musicaMockup\">\n' +
                                    'Imagen de Avanzados\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h3 class=\"contentSubTitle\">Mega corporaciones</h3>\n' +
                                    '<p>Las Mega corporaciones son los poderes más influyentes del Universo. Estas corporaciones tienen cientos de razas asociadas y todas se benefician de lo que pueden ofrecer las otras ya que cada una está especializada en un sector, así que deberás recapacitar seriamente acciones que puedan dañar este equilibrio.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12 musicaMockup\">\n' +
                                    'Imagen de emblemas Mega corporaciones\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentminiTitle\">Primera corporación</h4>\n' +
                                    '<p>Nacida en la época en la que las guerras  estaban como primera orden del día. Esta corporación se especializa en el intercambio de armamentos y soldados especializados en la conquista.</p>\n' +
                                    '<p>No se toman a la ligera el ataque a sus asociados y ello puede dañar gravemente las relaciones y tu imperio en consecuencia.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12 musicaMockup\">\n' +
                                    'Imagen primera Mega corporación\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentminiTitle\">Segunda corporación</h4>\n' +
                                    '<p>Buscando el poder económico, tienen una gran cantidad de recursos que ofrecen a todo aquel dispuesto a pagar el precio adecuado. Esta corporación te ofrece una gran cantidad de materiales únicos a precios increíbles si eres su asociado.</p>\n' +
                                    '<p>Cualquier acción que les haga perder beneficios no quedara sin un castigo acorde.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12 musicaMockup\">\n' +
                                    'Imagen segunda Mega corporación\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentminiTitle\">Tercera corporación</h4>\n' +
                                    '<p>Defender a los suyos es su misión por ello tienen los mejores sistemas de defensa. Esta corporación te ofrece sistemas especiales para que no tengas que temer a los ataques.</p>\n' +
                                    '<p>Para crecer es imprescindible conservar lo ya conseguido.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12 musicaMockup\">\n' +
                                    'Imagen tercera Mega corporación\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div id=\"gameplayD\" class=\"row\"> <!-- GAMEPLAY DESKTOP -->\n' +
                        '<div class=\"col-md-12 col-lg-12 musicaMockup\">\n' +
                            '<h3 class=\"contentSubTitle\">Cómo se juega</h3>\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>\n' +
            '</div>\n'
}

function showProjectD(){
    document.getElementById('buttonCampaignD').classList.remove('menuActive');
    document.getElementById('buttonProjectD').classList.add('menuActive');
    document.getElementById('buttonFaqsD').classList.remove('menuActive');
    document.getElementById('buttonCommentsD').classList.remove('menuActive');
    document.getElementById('buttonTeamD').classList.remove('menuActive');

    var a = document.getElementById('main');
    document.getElementById('fullBody').style.backgroundImage="url('../img/fondo_nasa_2.png')";
    a.innerHTML='<div class=\"row wrapper\">\n' +
                    '<div id=\"projectD\" class=\"row projectD\">\n' +
                        '<div class=\"row\" style=\"min-height: 400px;\">\n' +
                            '<div class=\"col-md-6 col-lg-6\">\n' +
                                '<div id=\"projectDescriptionD\" class=\"row\"> <!-- Project descriptionDESKTOP -->\n' +
                                    '<div class=\"col-md-12 col-lg-12\">\n' +
                                        '<h3 class=\"contentSubTitle\">Nuestro proyecto</h3>\n' +
                                        '<p>Galactic Expansion es un juego de estrategia freemium para móviles. Diferentes razas se enfrentaran por los distintos recursos de la galaxia. Elige a la raza que quieres llevar a la victoria a través de sus capacidades únicas. Crea tu propia ciudadela y prepara a tus ejércitos para las emocionantes batallas PVE y PVP. Se el soberano de la galaxia y porque no del universo.</p>\n' +
                                        '<p >Si por el contrario lo tuyo es la exploración, podrás descubrir el universo conocido y visitar otros planetas y ciudadelas, jugando en tu móvil y sin ningún tipo de conexión. Con ello conseguirás recursos que te ayudarán a expandir tu propia base.</p>\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-6 col-lg-6\">\n' +
                                '<div class=\"row\">\n' +
                                    '<div class=\"col-md-12 col-lg-12 barraEstado\"></div>\n' +
                                '</div>\n' +
                                '<div class=\"row bloqueD\">\n' +
                                    '<div class=\"col-md-5 col-lg-5\">\n' +
                                        '<p class=\"recaudado\">3.523,52€</p>\n' +
                                        '<p class=\"subText\">contribuido de 20.000€</p>\n' +
                                    '</div>\n' +
                                    '<div class=\"col-md-4 col-lg-4\">\n' +
                                        '<p class=\"datoNum\">100</p>\n' +
                                        '<p class=\"subText\">patrocinadores</p>\n' +
                                    '</div>\n' +
                                    '<div class=\"col-md-3 col-lg-3\">\n' +
                                        '<p class=\"datoNum\">200</p>\n' +
                                        '<p class=\"subText\">días más</p>\n' +
                                    '</div>\n' +
                                '</div>\n' +
                                '<div class=\"row bloqueD\">\n' +
                                    '<div class=\"col-md-12 col-lg-12\">\n' +
                                        '<h2>Objetivos</h2>\n' +
                                    '</div>\n' +           
                                '</div>\n' +
                                '<div class=\"row\">\n' +
                                    '<a href=\"#MenuCampaign\" onclick=\"alertD()\"><div class=\"mainButton\">Patrocina este proyecto</div></a>\n' +
                                '</div>\n' +
                                '<div class=\"row\">\n' +
                                    '<div class=\"col-md-12 col-lg-12\">\n' +
                                        '<div class=\" Mock_RRSS_D\">Bloque RRSS</div>\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                        '<div class=\"row\" style=\"min-height: 400px; margin-top: 60px;\">\n' +
                            '<div class=\"col-md-12 col-lg-12\">\n' +
                                '<h3 class=\"contentSubTitle\">Recompensas</h3>\n' +
                                '<p>Con tu apoyo para conseguir nuestras diferentes metas, aparte de obtener nuestra gratitud también podrás conseguir acceso exclusivo a la beta y beneficios que te facilitaran las etapas tempranas del juego.</p>\n' +
                            '</div>\n' +
                            '<div class=\"row rewardDBlock\">\n' +
                                '<div class=\"col-md-4 col-lg-4\">\n' +
                                    '<div id=\"reward1\" class=\"rewardD\">\n' +
                                        '<img class="img-responsive" src="img/concept_raza_1.jpg"></img>\n' +
                                        '<h4>10€</h4>\n' +
                                        '<p class="rewardTitle">Explorador espacial</p>\n' +
                                        '<ul>Incluye:\n' +
                                            '<li>· Una copia del juego</li>\n' +
                                            '<li>· Paquete de ilustraciones originales (PDF)</li>\n' +
                                            '<li>· Acceso a la descarga de la BSO del juego (MP3)</li>\n' +
                                        '</ul>\n' +
                                        '<input type="button" value="Contribuir" name="Contribuir" onclick="alertD()">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                                '<div class=\"col-md-4 col-lg-4\">\n' +
                                    '<div id=\"reward2\" class=\"rewardD\"\">\n' +
                                        '<img class="img-responsive" src="img/concept_raza_1.jpg"></img>\n' +
                                        '<h4>50€</h4>\n' +
                                        '<p class="rewardTitle">Alto dirigente</p>\n' +
                                        '<ul>Incluye:\n' +
                                            '<li>· Recompensas anteriores</li>\n' +
                                            '<li>· Paquete completo de mejoras para tu ciudad inicial</li>\n' +
                                            '<li>· Paquete completo de mejoras para tu nave de exploración</li>\n' +
                                        '</ul>\n' +
                                        '<input type="button" value="Contribuir" name="Contribuir" onclick="alertD()">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                                '<div class=\"col-md-4 col-lg-4\">\n' +
                                    '<div id=\"reward3\" class=\"rewardD\"\">\n' +
                                        '<img class="img-responsive" src="img/concept_raza_1.jpg"></img>\n' +
                                        '<h4>100€</h4>\n' +
                                        '<p class="rewardTitle">Megacorporación</p>\n' +
                                        '<ul>Incluye:\n' +
                                            '<li>· Recompensas anteriores</li>\n' +
                                            '<li>· Copia digital del libro de desarrollo del juego</li>\n' +
                                            '<li>· 4 figuras de resina de alta calidad (100mm) de las 4 razas</li>\n' +
                                        '</ul>\n' +
                                        '<input type="button" value="Contribuir" name="Contribuir" onclick="alertD()">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>'
}

function showFaqsD(){

    document.getElementById('buttonCampaignD').classList.remove('menuActive');
    document.getElementById('buttonProjectD').classList.remove('menuActive');
    document.getElementById('buttonFaqsD').classList.add('menuActive');
    document.getElementById('buttonCommentsD').classList.remove('menuActive');
    document.getElementById('buttonTeamD').classList.remove('menuActive');

    var a = document.getElementById('main');
    document.getElementById('fullBody').style.backgroundImage="url('../img/fondo1.png')";
    a.innerHTML='<div class=\"row wrapper\">\n' +
                    '<div id=\"faqsD\" class="row faqD\">\n' +
                        '<div class=\"col-md-12 col-lg-12 \">\n' +
                            '<h2 class="contentSubTitle">Preguntas frecuentes</h2>\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>'
}

function showCommentsD(){

    document.getElementById('buttonCampaignD').classList.remove('menuActive');
    document.getElementById('buttonProjectD').classList.remove('menuActive');
    document.getElementById('buttonFaqsD').classList.remove('menuActive');
    document.getElementById('buttonCommentsD').classList.add('menuActive');
    document.getElementById('buttonTeamD').classList.remove('menuActive');

    var a = document.getElementById('main');
    document.getElementById('fullBody').style.backgroundImage="url('../img/fondo_eagle-nebula-2.png')";
    a.innerHTML='<div class=\"row wrapper\">\n' +
                    '<div id=\"commentsD\" class=\"row commentsD\">\n' +
                        '<div class=\"col-md-12 col-lg-12\"><h2>COMENTARIOS</h2></div>\n' +
                    '</div>\n' +
                '</div>'
}

function showTeamD(){

    document.getElementById('buttonCampaignD').classList.remove('menuActive');
    document.getElementById('buttonProjectD').classList.remove('menuActive');
    document.getElementById('buttonFaqsD').classList.remove('menuActive');
    document.getElementById('buttonCommentsD').classList.remove('menuActive');
    document.getElementById('buttonTeamD').classList.add('menuActive');

    var a = document.getElementById('main');
    document.getElementById('fullBody').style.backgroundImage="url('../img/fondo_carina-nebula-wide.png')";
    a.innerHTML='<div class=\"row wrapper\">\n' +
                    '<div id="teamD" class="row teamD">\n' +
                        '<div class="col-md-12 col-lg-12 teamBlock">\n' +
                            '<h2>Nuestro equipo:</h2>\n' +
                            '<p><strong>·ALARCÓN RIERA, ÓSCAR</strong> - Música original</p>\n' +
                            '<p><strong>·BARRIGA PIÑERO, JAVIER</strong> - Game design (real: documentación y textos)</p>\n' +
                            '<p><strong>·LÓPEZ SÁNCHEZ, ALEJANDRO</strong> - Concept Pjs</p>\n' +
                            '<p><strong>·MARTIN HERNANDEZ, CARLOS</strong> - Animación y programación (real: código web y montaje de vídeo)</p>\n' +
                            '<p><strong>·RODRÍGUEZ CORDERO, BORJA</strong> - Game design (real: documentación y textos)</p>\n' +
                            '<p><strong>·SANZ CORONEL, JORGE</strong> - Concept escenarios e items (real: elaboración de imágenes)</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>'
}



//Functions to alert users that it's not a real videogame project

function alertM(){
    document.getElementById("alertM").classList.remove("hide");
}

function alertD(){
    document.getElementById("alertD").classList.remove("hide");
}

function closeAlertM(){
    document.getElementById("alertM").classList.add("hide");
}

function closeAlertD(){
    
    document.getElementById("alertD").classList.add("hide");
}

//REWARDS HOVER

function hoverReward1On(){
    /*document.getElementById("reward1High").classList.remove("hide");
    document.getElementById("reward1High").classList.add("rewardDHoverOn");*/
}
function hoverReward1Out(){
    /*document.getElementById("reward1High").classList.remove("rewardDHoverOn");
    document.getElementById("reward1High").classList.add("hide");*/
}