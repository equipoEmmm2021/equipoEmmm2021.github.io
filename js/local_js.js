//Fixing content menu during scrolling

window.onscroll = function() {
    var y = window.scrollY;
    var a = document.getElementById("contentMenu");
    if(y >= 1128){
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
    a.innerHTML='<div id="campaignM" class="row campaignM">\n' +
                    '<div class="row"> <!-- MAIN VIDEO MOBILE -->\n' +
                        '<div id="videoM" class="col-xs-12 col-sm-12 video-responsive">\n' +
                            '<video src="video/video.mp4" poster="img/heroD.png" controls="true" width="100%" height="auto"></video>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row"> <!-- ORIGINAL MUSIC MOBILE -->\n' +
                        '<div class="col-xs-12 col-sm-12">\n' +
                            '<h3 class="contentSubTitle">M??sica original</h3>\n' +
                            '<p>Nuestro equipo ha creado una m??sica, no solo perfecta para la ambientaci??n de la exploraci??n espacial o las batallas, sino que te transportar?? a esass aventuras espaciales en cualquier momento</p>\n' +
                            '<p>Escucha una muestra:</p>\n' +
                            '<audio src="music/space.mp3" controls="controls" type="audio/mpeg" preload="preload"></audio>\n' +
                            '<audio src="music/space_accion.mp3" controls="controls" type="audio/mpeg" preload="preload"></audio>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row"> <!-- PROJECT DESCRIPTION MOBILE-->\n' +
                        '<div class="col-xs-12 col-sm-12">\n' +
                            '<h3 class="contentSubTitle">Nuestro proyecto</h3>\n' +
                            '<p>Galactic Expansion es un juego de estrategia freemium para m??viles. Diferentes razas se enfrentaran por los distintos recursos de la galaxia. Elige a la raza que quieres llevar a la victoria a trav??s de sus capacidades ??nicas. Crea tu propia ciudadela y prepara a tus ej??rcitos para las emocionantes batallas PVE y PVP. Se el soberano de la galaxia y porque no del universo.</p>\n' +
                            '<p>Si por el contrario lo tuyo es la exploraci??n, podr??s descubrir el universo conocido y visitar otros planetas y ciudadelas, jugando en tu m??vil y sin ning??n tipo de conexi??n. Con ello conseguir??s recursos que te ayudar??n a expandir tu propia base.</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row"> <!-- FULL STORY MOBILE -->\n' +
                        '<div class="col-xs-12 col-sm-12">\n' +
                            '<div class="row">\n' +
                                '<div class="col-xs-12 col-sm-12">\n' +
                                    '<h3 class="contentSubTitle">Trasfondo del juego</h3>\n' +
                                    '<p>Despu??s de cientos de a??os las naves colonas han alcanzado una galaxia habitable, pero t?? no eres el ??nico pueblo que quiere hacer suyos estos territorios. ??Qui??n obtendr?? lo que desea?</p>\n' +
                                    '<h4 class="contentMiniTitle">??Toma el control!</h4>\n' +
                                    '<p>En esta zona de nuevos peligros t?? asumir??s el puesto del l??der de una colonia y tendr??s que buscar la expansion con los m??todos que t?? prefieras. Captura zonas de recursos, defiende tus asentamientos, conquista a los dem??s pueblos o al??ate con ellos.</p>\n' +
                                    '<p>Cada raza es ??nica y por tanto tienen sus propias fortalezas. Obt??n m??s r??pido recursos, ten unidades m??s poderosas o conquista sin necesidad de luchar.</p>\n' +
                                    '<h4 class="contentMiniTitle">El poder de estar unidos</h4>\n' +
                                    '<p>Una vez que has elegido a tu raza deber??s tomar una decisi??n quieres luchar solo o tener ayuda en momentos cr??ticos. ??nete a una Mega corporaci??n y utiliza sus conexiones con otras razas para obtener recursos ??nicos por los que de otra forma tendr??as que matar.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class="row">\n' +
                                '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<p>En Galactic Expansion se recompensara la buena toma de decisiones, las estrategias y la constancia. Cada movimiento te acercara o alejara de ser el emperador de la galaxia.</p>\n' +
                                '<h3 class=\"contentSubTitle\">Razas</h3>\n' +
                                '<h4 class=\"contentMiniTitle\">Humanos</h4>\n' +
                                '<p>Su ambici??n y su desesperaci??n por la supervivencia les llev?? a salir de su planeta en una aventura a ciegas. Ahora son un pueblo extendido y respetado que ha creado una gran coalici??n con otras razas. Su equilibrio en armamento, defensa y recursos es casi perfecto</p>\n' +
                                '<p>En el a??o 2090 la tierra estaba casi al borde de la muerte debido a la mala inversi??n de los\n' +
                                'antibi??ticos en la comida, originando superbacterias que eran inmunes a los tratamientos y\n' +
                                'provocaron millones de muertes, la tala de ??rboles desmedida de los a??os, la gran dependencia a\n' +
                                'la tecnolog??a de la poblaci??n y el imparable calentamiento global, dejando la tierra en un punto\n' +
                                'cr??tico y de no retorno, no obstante todo cambiar??a.</p>\n' +
                                '<p>Tiempo despu??s los humanos sufrieron la ca??da de varios meteoritos en diferentes partes del mundo\n' +
                                'construidos por una clase de roca espacial extra??a, seg??n los cient??ficos terr??colas a esos meteoritos\n' +
                                'no lo hac??a especial la roca en s??, sino las part??culas microsc??picas que dicha roca presentaba.\n' +
                                '13.</p>\n' +
                                '<p>Estas, adem??s de su f??cil reproducci??n entre s??, conten??an un poder energ??tico colosal que los\n' +
                                'humanos aprendieron a utilizar principalmente en armamento, combustible y tecnolog??a, e incluso\n' +
                                'en medicina, d??ndoles un fuerza e inteligencia tremendas y haci??ndoles inmunes a enfermedades\n' +
                                'tanto mortales como comunes y a las superbacterias que se estaba cobrando millones de vidas en ese entonces.</p>\n' +
                                '<p>Sin embargo el correcto uso de esas part??culas les otorg?? a los humanos una nueva energ??a\n' +
                                'absolutamente ecol??gica que destron?? a las energ??as no renovables, d??ndoles otra oportunidad\n' +
                                'para arreglar su planeta. Muchos a??os despu??s la humanidad logr?? un gran avance cultural,\n' +
                                'tecnol??gico y medioambiental formando un nuevo planeta tierra de gran prosperidad.\n' +
                                'Sin embargo, la ambici??n y la conducta destructiva humana nunca cambi?? y con el descubrimiento\n' +
                                'de las part??culas aplicadas al viaje espacial crearon naves reforzadas con la capacidad de viajar a\n' +
                                'trav??s del universo para poblar nuevos planetas y establecer contacto con nuevas especies, y tal\n' +
                                'vez... encontrar m??s asteroides con las part??culas que movieron el planeta, bautizadas como\n' +
                                'Gamma.</p>\n' +
                            '</div>\n' +
                        '</div>\n' +
                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"imgContent\">\n' +
                                    '<img src=\"img/humanos.png\" alt=\"S??mbolo de una raza\" class=\"img-responsive\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +

                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<h4 class=\"contentMiniTitle\">Los Dukich</h4>\n' +
                                '<p>Una raza conocida en todo el universo por su habilidad en la batalla y sus guerreros sin miedo a la muerte. Toman lo que quieren, destruyendo a todo lo que se interponga en su camino.</p>\n' +
                                '<p>Entre sus filas encontraras algunos de los mejores guerreros cuerpo a cuerpo del universo. Se caracterizan por sus grandes cuerpos y aspecto barb??rico, tienen una gran capacidad para entrenar a sus tropas pero carecen de una gran cantidad de trabajadores.</p>\n' +
                                '<p>100 a??os en la denominada galaxia Prime, exist??a un mundo que viv??a en una guerra\n' +
                                'constante, este planeta estaba habitado por los Dukich una raza inicialmente pac??fica.\n' +
                                'Pero era un mundo donde el m??s fuerte cog??a lo que quer??a, no hab??a sitio para la paz as?? que\n' +
                                'tuvieron que adaptarse, fortaleci??ndose cada vez m??s y exterminando al resto de razas logrando\n' +
                                'ser las alfas del planeta. Pero cuando los enemigos desaparecieron, se crearon nuevos entre ellos\n' +
                                'mismos y as?? la guerra continu?? de forma imparable.</p>\n' +
                                '<p>La raza avanz?? lentamente en la tecnolog??a, con el ??nico objetivo de poder estar por delante del\n' +
                                'enemigo, hasta que el enemigo dej?? de ser los que ten??an al lado y fue la naturaleza la que marcaba\n' +
                                'el fin. La estrella que les iluminaba estaba moribunda y amenazaba con el fin de la galaxia, pero los\n' +
                                'Dukich ya eran guerreros y no aceptar??an su fin si no era en batalla pues ellos no esperar??an la\n' +
                                'muerte. Ellos eran la muerte.</p>\n' +
                                '<p>As?? dejaron sus guerras y unieron a las mentes m??s brillantes de su raza y dise??aron una nave para\n' +
                                'viajar por las estrellas y llegar a nuevos mundos donde llevar la guerra que est?? arraigada en sus\n' +
                                'corazones y la muerte que nace de sus manos.</p>\n' +
                            '</div>\n' +
                        '</div>\n' +
                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"imgContent\">\n' +
                                    '<img src=\"img/vulcanos.png\" alt=\"S??mbolo de una raza\" class=\"img-responsive\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +

                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<h4 class=\"contentMiniTitle\">V??lm??ende (Pr??speros)</h4>\n' +
                                '<p>Conocidos en el universo por su gran capacidad para adaptarse a las situaciones m??s extremas. </p>\n' +
                                '<p>Puede que no tengan el mayor poder ofensivo pero no se les escapan los secretos de la tierra y de c??mo obtener el m??ximo de beneficios con el m??nimo esfuerzo.</p>\n' +
                                '<p>Vienen del planeta V??lm??n, un planeta lleno de vida y naturaleza que vivi?? para la prosperidad\n' +
                                'durante muchos a??os. Sin embargo esta raza, pac??fica por naturaleza, se vio involucrada en una\n' +
                                'guerra ajena y su mundo fue una v??ctima de esta. Ahora buscan un nuevo hogar en el que\n' +
                                'reconstruir su mundo; y si tienen que luchar esta vez lo har??n.</p>\n' +
                                '<p>Han evolucionado en tecnolog??a, sociedad y cultura de una forma en la que no hay conflictos entre\n' +
                                'ellos, pues tienen lo que necesitan. Sin embargo, crecen en n??mero y deben encontrar el nuevo\n' +
                                'V??lm??n enseguida, pues todav??a no han encontrado un planeta que les satisfaga.</p>\n' +
                                '<p>A pesar de que su creencia en la tecnolog??a, mantienen y tienen muy arraigada la fe en su religi??n,\n' +
                                'pues hace que mantengan el respeto con el planeta en el que habitan as?? como en su especie.\n' +
                                'Por lo tanto son una especie que tiene la habilidad de prosperar en cualquier planeta por mucho\n' +
                                'm??s tiempo que otras, a pesar de que no sean la mejor en defensas ni ataque.</p>\n' +
                            '</div>\n' +
                        '</div>\n' +
                        
                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"imgContent\">\n' +
                                    '<img src=\"img/prosperos.png\" alt=\"S??mbolo de una raza\" class=\"img-responsive\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                        
                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<h3 class=\"contentSubTitle\">Mega corporaciones</h3>\n' +
                                '<p>Las Mega corporaciones son los poderes m??s influyentes del Universo. Estas corporaciones tienen cientos de razas asociadas y todas se benefician de lo que pueden ofrecer las otras ya que cada una est?? especializada en un sector, as?? que deber??s recapacitar seriamente acciones que puedan da??ar este equilibrio.</p>\n' +
                            '</div>\n' +
                        '</div>\n' +

                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<h4 class=\"contentMiniTitle\">Artemis Inc.</h4>\n' +
                                '<p>Nacida en la ??poca en la que las guerras  estaban como primera orden del d??a. Esta corporaci??n se especializa en el intercambio de armamentos y soldados especializados en la conquista.</p>\n' +
                                '<p>No se toman a la ligera el ataque a sus asociados y ello puede da??ar gravemente las relaciones y tu imperio en consecuencia.</p>\n' +
                            '</div>\n' +
                        '</div>\n' +
                        
                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"imgContentLogo\">\n' +
                                    '<img src=\"img/simbolo_guerrillero.png\" alt=\"S??mbolo de una megacorporaci??n\" class=\"img-responsive\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +

                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<h4 class=\"contentMiniTitle\">Spacemaker Group</h4>\n' +
                                '<p>Buscando el poder econ??mico, tienen una gran cantidad de recursos que ofrecen a todo aquel dispuesto a pagar el precio adecuado. Esta corporaci??n te ofrece una gran cantidad de materiales ??nicos a precios incre??bles si eres su asociado.</p>\n' +
                                '<p>Cualquier acci??n que les haga perder beneficios no quedara sin un castigo acorde.</p>\n' +
                            '</div>\n' +
                        '</div>\n' +
                        
                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"imgContentLogo\">\n' +
                                    '<img src=\"img/simbolo_prospero.png\" alt=\"S??mbolo de una megacorporaci??n\" class=\"img-responsive\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +

                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<h4 class=\"contentMiniTitle\">Hardship Corp.</h4>\n' +
                                '<p>Defender a los suyos es su misi??n por ello tienen los mejores sistemas de defensa. Esta corporaci??n te ofrece sistemas especiales para que no tengas que temer a los ataques.</p>\n' +
                                '<p>Para crecer es imprescindible conservar lo ya conseguido.</p>\n' +
                            '</div>\n' +
                        '</div>\n' +
                        
                        '<div class=\"row\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"imgContentLogo\">\n' +
                                        '<img src=\"img/simbolo_tecnologico.png\" alt=\"S??mbolo de una megacorporaci??n\" class=\"img-responsive\">\n' +
                                    '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>\n' +
                '<div id=\"gameplayD\" class=\"row\"> <!-- GAMEPLAY DESKTOP -->\n' +
                    '<div class=\"col-xs-12 col-sm-12\">\n' +
                        '<h3 class=\"contentSubTitle\">C??mo se juega</h3>\n' +
                        '<p>Dos modos principales de juego</p>\n' +
                        '<p>Sin conexi??n:</p>\n' +
                            '<p>Juego de exploraci??n y recursos. Contruye tu propia base y visita otros lugares creados por otros jugadores o por el sistema para comerciar</p>\n' +
                        '<p>Online</p>\n' +
                            '<p>??nete a una Megacorporaci??n para conseguir mejoras en un grupo concreto de recursos. Enfr??ntate a otras Megacorporaciones en batallas multitudinarias junto a miles de jugadores para conseguir el dominio comercial del universo. Pero cuidado, porque si una raza o una megacorporaci??n desaparece, los recursos que producen en exclusiva tambi??n lo har??n.</p>\n' +
                    '</div>\n' +
                '</div>\n' +
            '</div>\n' +
        '</div>\n' +
        '<!-- FOOTER -->\n' +
                    '<footer class=\"footer\">\n' +
                        '<div class=\"row wrapper\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-12 col-lg-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</footer>\n' +
                '</div>'

}

function showRewardsM(){
    
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    
    document.getElementById("buttonRewardsM").classList.add("menuActive");
    
    document.getElementById("buttonFaqsM").classList.remove("menuActive");
   
    document.getElementById("buttonCommentsM").classList.remove("menuActive");
   
    document.getElementById("buttonTeamM").classList.remove("menuActive");

    var a = document.getElementById('mainM');
    a.innerHTML='<div id="rewardsM" class="row"> <!-- REWARDS -->\n' +
                    '<div class="row bloqueM">\n' +
                        '<div class="row barraEstadoM"></div>\n' +
                        '<div class="row">\n' +
                            '<div class="col-xs-5 col-sm-5">\n' +
                                '<p class="recaudado">3.523,52???</p>\n' +
                                '<p class="subText">contribuido de 20.000???</p>\n' +
                            '</div>\n' +
                            '<div class="col-xs-4 col-sm-4">\n' +
                                '<p class="datoNum">100</p>\n' +
                                '<p class="subText">patrocinadores</p>\n' +
                            '</div>\n' +
                            '<div class="col-xs-3 col-sm-3">\n' +
                                '<p class="datoNum">200</p>\n' +
                                '<p class="subText">d??as m??s</p>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div id=\"projectDescriptionD\" class=\"row\"> <!-- Project description MOBILE -->\n' +
                        '<div class=\"col-xs-12 col-sm-12 bloqueM\">\n' +
                            '<h3 class=\"contentSubTitle\">Nuestro proyecto</h3>\n' +
                            '<p>Galactic Expansion es un juego de estrategia freemium para m??viles. Diferentes razas se enfrentaran por los distintos recursos de la galaxia. Elige a la raza que quieres llevar a la victoria a trav??s de sus capacidades ??nicas. Crea tu propia ciudadela y prepara a tus ej??rcitos para las emocionantes batallas PVE y PVP. Se el soberano de la galaxia y porque no del universo.</p>\n' +
                            '<p >Si por el contrario lo tuyo es la exploraci??n, podr??s descubrir el universo conocido y visitar otros planetas y ciudadelas, jugando en tu m??vil y sin ning??n tipo de conexi??n. Con ello conseguir??s recursos que te ayudar??n a expandir tu propia base.</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row bloqueM\">\n' +
                        '<div class=\"col-xs-12 col-sm-12\">\n' +
                            '<a href=\"#MenuCampaign\" onclick=\"alertD()\"><div class=\"mainButton\">Patrocina este proyecto</div></a>\n' +
                        '</div>\n' +
                    '<div class="row">\n' +
                        '<div class="col-xs-12 col-sm-12">\n' +
                            '<h2>Recompensas</h2>\n' +
                            '<p>Con tu apoyo para conseguir nuestras diferentes metas, aparte de obtener nuestra gratitud, tambi??n podr??s conseguir acceso exclusivo a la beta y beneficios que te facilitaran las etapas tempranas del juego.</p>\n' +
                        '</div>\n' + 
                    '</div>\n' +                       
                    '<div class=\"row\">\n' +
                        '<div class=\"col-xs-12 col-sm-12\">\n' +
                            '<div id=\"rewardM1\" class=\"rewardM\">\n' +
                                '<img class="img-responsive" style="width: 50%;" src="img/recompensa_10.png"></img>\n' +
                                '<h4>10???</h4>\n' +
                                '<p class="rewardTitle">Explorador espacial</p>\n' +
                                '<ul>Incluye:\n' +
                                    '<li>?? Una copia del juego</li>\n' +
                                    '<li>?? Paquete de ilustraciones originales (PDF)</li>\n' +
                                    '<li>?? Acceso a la descarga de la BSO del juego (MP3)</li>\n' +
                                '</ul>\n' +
                                '<input type="button" value="Contribuir" name="Contribuir" onclick="alertM()">\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row\">\n' +
                        '<div class=\"col-xs-12 col-sm-12\">\n' +
                            '<div id=\"rewardM2\" class=\"rewardM\"\">\n' +
                                '<img class="img-responsive" style="width: 50%;" src="img/recompensa_50.png"></img>\n' +
                                '<h4>50???</h4>\n' +
                                '<p class="rewardTitle">Alto dirigente</p>\n' +
                                '<ul>Incluye:\n' +
                                    '<li>?? Recompensas anteriores</li>\n' +
                                    '<li>?? Paquete completo de mejoras para tu ciudad inicial</li>\n' +
                                    '<li>?? Paquete completo de mejoras para tu nave de exploraci??n</li>\n' +
                                '</ul>\n' +
                                '<input type="button" value="Contribuir" name="Contribuir" onclick="alertM()">\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row\">\n' +
                        '<div class=\"col-xs-12 col-sm-12\">\n' +
                            '<div id=\"rewardM3\" class=\"rewardM\"\">\n' +
                                '<img class="img-responsive" style="width: 50%;" src="img/recompensa_100.png"></img>\n' +
                                '<h4>100???</h4>\n' +
                                '<p class="rewardTitle">Megacorporaci??n</p>\n' +
                                '<ul>Incluye:\n' +
                                    '<li>?? Recompensas anteriores</li>\n' +
                                    '<li>?? Copia digital del libro de desarrollo del juego</li>\n' +
                                    '<li>?? 4 figuras de resina de alta calidad (100mm) de las 4 razas</li>\n' +
                                '</ul>\n' +
                                '<input type="button" value="Contribuir" name="Contribuir" onclick="alertM()">\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row" style="margin-top: 3rem;">\n' +
                        '<a href="#MenuCampaignM" onclick="alertM()"><div class="mainButton">Patrocina este proyecto</div></a>\n' +
                    '</div>\n' +
                '</div>\n' +
                '<!-- FOOTER -->\n' +
                    '<footer class=\"footer\">\n' +
                        '<div class=\"row wrapper\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-12 col-lg-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</footer>\n' +
                '</div>'
}
    

function showFaqsM(){
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    document.getElementById("buttonRewardsM").classList.remove("menuActive");
    document.getElementById("buttonFaqsM").classList.add("menuActive");
    document.getElementById("buttonCommentsM").classList.remove("menuActive");
    document.getElementById("buttonTeamM").classList.remove("menuActive");

    var a=document.getElementById('mainM');
    a.innerHTML='<div id="faqsM" class="row">\n' +
                    '<div class="row">\n' +
                        '<h2 class="contentSubTitle">Preguntas frecuentes</h2>\n' +
                        '<div>Es posible que te surjan dudas respecto al proyecto. No te preocupes, busca primero en este listado y, si no encuentras respuesta a tu pregunta, ponte en contacto con nosotros. ??Estaremos encantados de ayudarte!</div>\n' +
                    '</div>\n' +
                    '<div class="row">\n' +
                        '<div id="faq1" class="faq col-xs-12 col-sm-12">\n' +
                            '<span><strong>??El juego es de pago o tiene elementos de juegos de pago?</strong></span>\n' +
                            '<p>No. El juego no incluir?? ning??n tipo de pay-to-win (nunca venderemos en Galactic Expansion objetos que te ayuden en las batallas o aumentos de experiencia).</p>\n' +
                            '<p class="fechaFaq">??ltima actualizaci??n: martes, 1 de junio de 2021 0:17 CEST</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row">\n' +
                        '<div id="faq1" class="faq col-xs-12 col-sm-12">\n' +
                            '<span><strong>??Contar?? con un modo offline?</strong></span>\n' +
                            '<p>S??. El juego tiene dos modos de juego: offline para exploraci??n y online para unirte a una megacorporaci??n y participar en batallas MMORPG.\n' +
                            '<p class="fechaFaq">??ltima actualizaci??n: martes, 1 de junio de 2021 0:17 CEST</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row">\n' +
                        '<div id="faq1" class="faq col-xs-12 col-sm-12">\n' +
                            '<span><strong>??Va a haber un lanzamiento f??sico? ??O s??lo digital?</strong></span>\n' +
                            '<p>Si ??ste fuese un proyecto real, no tendr??amos planes para un lanzamiento f??sico del juego. Al ser un juego para m??viles, no tiene sentido un formato f??sico</p>.\n' +
                            '<p class="fechaFaq">??ltima actualizaci??n: martes, 1 de junio de 2021 0:17 CEST</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class="row">\n' +
                        '<div id="faq1" class="faq col-xs-12 col-sm-12">\n' +
                            '<span><strong>??Ser?? el juego compatible con otros idiomas?</strong></span>\n' +
                            '<p>Nuestro soporte inicial de idiomas va a ser para el ingl??s y el espa??ol. Queremos a??adir muchos m??s idiomas y buscaremos la forma de hacerlo.</p>\n' +
                            '<p class="fechaFaq">??ltima actualizaci??n: martes, 1 de junio de 2021 0:17 CEST</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>\n' +
                '<!-- FOOTER -->\n' +
                    '<footer class=\"footer\">\n' +
                        '<div class=\"row wrapper\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-12 col-lg-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</footer>'

}

function showCommentsM(){
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    document.getElementById("buttonRewardsM").classList.remove("menuActive");
    document.getElementById("buttonFaqsM").classList.remove("menuActive");
    document.getElementById("buttonCommentsM").classList.add("menuActive");
    document.getElementById("buttonTeamM").classList.remove("menuActive");

    var a=document.getElementById('mainM');
    a.innerHTML='<div id="commentsM" class="row commentsM">\n' +
                    '<h2>COMENTARIOS</h2>\n' +
                    '<p>??Quieres dejarnos alg??n comentario? ??Adelante! Solo recuerda que necesitar??s conexi??n a internet.</p>\n' +
                    '<section class="u-clearfix u-section-1" id="sec-c57e">\n' +
                        '<div class="u-clearfix u-sheet u-sheet-1">\n' +
                            '<div class="u-form u-form-1">\n' +
                                '<form action="https://nicepage.com/editor/Forms/Process" method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" style="padding: 10px" source="email" name="form">\n' +
                                    '<input type="hidden" id="siteId" name="siteId" value="434937">\n' +
                                    '<input type="hidden" id="pageId" name="pageId" value="434938">\n' +
                                    '<div class="u-form-group u-form-name">\n' +
                                    '<label for="name-c4e7" class="u-form-control-hidden u-label">Nombre</label>\n' +
                                    '<input type="text" placeholder="Introduzca su nombre" id="name-c4e7" name="name" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="">\n' +
                                    '</div>\n' +
                                    '<div class="u-form-email u-form-group">\n' +
                                    '<label for="email-c4e7" class="u-form-control-hidden u-label">Email</label>\n' +
                                    '<input type="email" placeholder="Introduzca una direcci??n de correo electr??nico v??lida" id="email-c4e7" name="email" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="">\n' +
                                    '</div>\n' +
                                    '<div class="u-form-group u-form-message">\n' +
                                    '<label for="message-c4e7" class="u-form-control-hidden u-label">Mensaje</label>\n' +
                                    '<textarea placeholder="Ingrese su mensaje" rows="4" cols="50" id="message-c4e7" name="message" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""></textarea>\n' +
                                    '</div>\n' +
                                    '<div class="u-align-left u-form-group u-form-submit">\n' +
                                    '<a href="#" class="u-btn u-btn-submit u-button-style">Enviar</a>\n' +
                                    '<input type="submit" value="submit" class="u-form-control-hidden">\n' +
                                    '</div>\n' +
                                    '<div class="u-form-send-message u-form-send-success"> Gracias! Tu mensaje ha sido enviado. </div>\n' +
                                    '<div class="u-form-send-error u-form-send-message"> No se puede enviar su mensaje. Por favor, corrija los errores y vuelva a intentarlo. </div>\n' +
                                    '<input type="hidden" value="" name="recaptchaResponse">\n' +
                                '</form>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</section>\n' +
                '</div>\n' +
                '<!-- FOOTER -->\n' +
                    '<footer class=\"footer\">\n' +
                        '<div class=\"row wrapper\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-12 col-lg-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</footer>\n' +
                '</div>'
}

function showTeamM(){
    document.getElementById("buttonCampaignM").classList.remove("menuActive");
    document.getElementById("buttonRewardsM").classList.remove("menuActive");
    document.getElementById("buttonFaqsM").classList.remove("menuActive");
    document.getElementById("buttonCommentsM").classList.remove("menuActive");
    document.getElementById("buttonTeamM").classList.add("menuActive");

    var a=document.getElementById('mainM');
    a.innerHTML='<div id="teamM" class="row teamM">\n' +
                    '<div class="col-xs-12 col-sm-12 bloqueM">\n' +
                        '<h2>Nuestro equipo:</h2>\n' +
                        '<p>Somos un equipo peque??o. Aunque no estamos sobrados en experiencia, ??s?? que tenemos muchas ganas!\n' +
                        '<p><strong>??ALARC??N RIERA, ??SCAR</strong> - M??sica original</p>\n' +
                        '<p><strong>??BARRIGA PI??ERO, JAVIER</strong> - Game design (real: documentaci??n y textos)</p>\n' +
                        '<p><strong>??L??PEZ S??NCHEZ, ALEJANDRO</strong> - Concept Pjs</p>\n' +
                        '<p><strong>??MARTIN HERNANDEZ, CARLOS</strong> - Animaci??n y programaci??n (real: c??digo web y montaje de v??deo)</p>\n' +
                        '<p><strong>??RODR??GUEZ CORDERO, BORJA</strong> - Game design (real: documentaci??n y textos)</p>\n' +
                        '<p><strong>??SANZ CORONEL, JORGE</strong> - Concept escenarios e items (real: elaboraci??n de im??genes)</p>\n' +
                    '</div>\n' +
                '</div>\n' +
                '<!-- FOOTER -->\n' +
                    '<footer class=\"footer\">\n' +
                        '<div class=\"row wrapper\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-12 col-lg-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</footer>\n' +
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
    /*document.getElementById('bodySup').style.backgroundImage="url('img/fondo_nasa.jpg')";*/
    document.getElementById('bodyInf').style.backgroundImage="url('img/fondo_nasa.jpg')";
    a.innerHTML='<div class=\"row wrapper\"> \n' +
        '<div class=\"col-md-12 col-lg-12\">\n' +
            '<div id=\"campaignD\" class=\"row campaignD\">\n' +
                '<div id=\"contentMenu\" class=\"col-md-2 col-lg-2\">\n' +
                    '<div class=\"row content_menuLink-row\">\n' +
                        '<div class=\"col-md-12 col-lg-12 bloqueD\">\n' +
                            '<a href=\"#videoD\" onclick=\"contentMenuFixed()\"><div class=\"content_menuLink\">V??deo de presentaci??n</div></a>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row content_menuLink-row\">\n' +
                        '<div class=\"col-md-12 col-lg-12 bloqueD\">\n' +
                            '<a href=\"#musicD\" onclick=\"contentMenuFixed()\"><div class=\"content_menuLink\">M??sica original</div></a>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row content_menuLink-row\">\n' +
                        '<div class=\"col-md-12 col-lg-12 bloqueD\">\n' +
                            '<a href=\"#fullStoryD\" onclick=\"contentMenuFixed()\"><div class=\"content_menuLink\">Trasfondo</div></a>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"row content_menuLink-row\">\n' +
                        '<div class=\"col-md-12 col-lg-12 bloqueD\">\n' +
                            '<a href=\"#gameplayD\" onclick=\"contentMenuFixed()\"><div class=\"content_menuLink\">C??mo se juega</div></a>\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>\n' +
                '<div id=\"contentMain\" class=\"col-md-10 col-lg-10\" style=\"margin-right: 1%;\">\n' +
                    '<div class=\"row\"> <!-- MAIN VIDEO -->\n' +
                        '<div id=\"videoD\" class=\"col-md-12 col-lg-12 video-responsive\">\n' +
                            '<video src="video/video.mp4" poster="img/heroD.png" controls="true" width="100%" height="auto"></video>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div id=\"musicD\" class=\"row\"> <!-- Original music DESKTOP -->\n' +
                        '<div class=\"col-md-12 col-lg-12\">\n' +
                            '<h3 class=\"contentSubTitle\">M??sica original</h3>\n' +
                            '<p>Nuestro equipo ha creado una m??sica, no solo perfecta para la ambientaci??n de la exploraci??n espacial o las batallas, sino que te transportar?? a esass aventuras espaciales en cualquier momento</p>\n' +
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
                                    '<p>Despu??s de cientos de a??os las naves colonas han alcanzado una galaxia habitable, pero t?? no eres el ??nico pueblo que quiere hacer suyos estos territorios. ??Qui??n obtendr?? lo que desea?</p>\n' +
                                    '<p class=\"contentMiniTitle\">??Toma el control!</p>\n' +
                                    '<p>En esta zona de nuevos peligros t?? asumir??s el puesto del l??der de una colonia y tendr??s que buscar la expansion con los m??todos que t?? prefieras. Captura zonas de recursos, defiende tus asentamientos, conquista a los dem??s pueblos o al??ate con ellos.</p>\n' +
                                    '<p>Cada raza es ??nica y por tanto tienen sus propias fortalezas. Obt??n m??s r??pido recursos, ten unidades m??s poderosas o conquista sin necesidad de luchar.</p>\n' +
                                    '<p class=\"contentMiniTitle\">El poder de estar unidos</p>\n' +
                                    '<p>Una vez que has elegido a tu raza deber??s tomar una decisi??n quieres luchar solo o tener ayuda en momentos cr??ticos. ??nete a una Mega corporaci??n y utiliza sus conexiones con otras razas para obtener recursos ??nicos por los que de otra forma tendr??as que matar.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<p>En Galactic Expansion se recompensara la buena toma de decisiones, las estrategias y la constancia. Cada movimiento te acercara o alejara de ser el emperador de la galaxia.</p>\n' +
                                    '<h3 class=\"contentSubTitle\">Razas</h3>\n' +
                                    '<h4 class=\"contentMiniTitle\">Humanos</h4>\n' +
                                    '<p>Su ambici??n y su desesperaci??n por la supervivencia les llev?? a salir de su planeta en una aventura a ciegas. Ahora son un pueblo extendido y respetado que ha creado una gran coalici??n con otras razas. Su equilibrio en armamento, defensa y recursos es casi perfecto</p>\n' +
                                    '<p>En el a??o 2090 la tierra estaba casi al borde de la muerte debido a la mala inversi??n de los\n' +
                                    'antibi??ticos en la comida, originando superbacterias que eran inmunes a los tratamientos y\n' +
                                    'provocaron millones de muertes, la tala de ??rboles desmedida de los a??os, la gran dependencia a\n' +
                                    'la tecnolog??a de la poblaci??n y el imparable calentamiento global, dejando la tierra en un punto\n' +
                                    'cr??tico y de no retorno, no obstante todo cambiar??a.</p>\n' +
                                    '<p>Tiempo despu??s los humanos sufrieron la ca??da de varios meteoritos en diferentes partes del mundo\n' +
                                    'construidos por una clase de roca espacial extra??a, seg??n los cient??ficos terr??colas a esos meteoritos\n' +
                                    'no lo hac??a especial la roca en s??, sino las part??culas microsc??picas que dicha roca presentaba.\n' +
                                    '13.</p>\n' +
                                    '<p>Estas, adem??s de su f??cil reproducci??n entre s??, conten??an un poder energ??tico colosal que los\n' +
                                    'humanos aprendieron a utilizar principalmente en armamento, combustible y tecnolog??a, e incluso\n' +
                                    'en medicina, d??ndoles un fuerza e inteligencia tremendas y haci??ndoles inmunes a enfermedades\n' +
                                    'tanto mortales como comunes y a las superbacterias que se estaba cobrando millones de vidas en ese entonces.</p>\n' +
                                    '<p>Sin embargo el correcto uso de esas part??culas les otorg?? a los humanos una nueva energ??a\n' +
                                    'absolutamente ecol??gica que destron?? a las energ??as no renovables, d??ndoles otra oportunidad\n' +
                                    'para arreglar su planeta. Muchos a??os despu??s la humanidad logr?? un gran avance cultural,\n' +
                                    'tecnol??gico y medioambiental formando un nuevo planeta tierra de gran prosperidad.\n' +
                                    'Sin embargo, la ambici??n y la conducta destructiva humana nunca cambi?? y con el descubrimiento\n' +
                                    'de las part??culas aplicadas al viaje espacial crearon naves reforzadas con la capacidad de viajar a\n' +
                                    'trav??s del universo para poblar nuevos planetas y establecer contacto con nuevas especies, y tal\n' +
                                    'vez... encontrar m??s asteroides con las part??culas que movieron el planeta, bautizadas como\n' +
                                    'Gamma.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<div class=\"imgContent\">\n' +
                                        '<img src=\"img/humanos.png\" alt=\"S??mbolo de una raza\" class=\"img-responsive\">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentMiniTitle\">Los Dukich</h4>\n' +
                                    '<p>Una raza conocida en todo el universo por su habilidad en la batalla y sus guerreros sin miedo a la muerte. Toman lo que quieren, destruyendo a todo lo que se interponga en su camino.</p>\n' +
                                    '<p>Entre sus filas encontraras algunos de los mejores guerreros cuerpo a cuerpo del universo. Se caracterizan por sus grandes cuerpos y aspecto barb??rico, tienen una gran capacidad para entrenar a sus tropas pero carecen de una gran cantidad de trabajadores.</p>\n' +
                                    '<p>100 a??os en la denominada galaxia Prime, exist??a un mundo que viv??a en una guerra\n' +
                                    'constante, este planeta estaba habitado por los Dukich una raza inicialmente pac??fica.\n' +
                                    'Pero era un mundo donde el m??s fuerte cog??a lo que quer??a, no hab??a sitio para la paz as?? que\n' +
                                    'tuvieron que adaptarse, fortaleci??ndose cada vez m??s y exterminando al resto de razas logrando\n' +
                                    'ser las alfas del planeta. Pero cuando los enemigos desaparecieron, se crearon nuevos entre ellos\n' +
                                    'mismos y as?? la guerra continu?? de forma imparable.</p>\n' +
                                    '<p>La raza avanz?? lentamente en la tecnolog??a, con el ??nico objetivo de poder estar por delante del\n' +
                                    'enemigo, hasta que el enemigo dej?? de ser los que ten??an al lado y fue la naturaleza la que marcaba\n' +
                                    'el fin. La estrella que les iluminaba estaba moribunda y amenazaba con el fin de la galaxia, pero los\n' +
                                    'Dukich ya eran guerreros y no aceptar??an su fin si no era en batalla pues ellos no esperar??an la\n' +
                                    'muerte. Ellos eran la muerte.</p>\n' +
                                    '<p>As?? dejaron sus guerras y unieron a las mentes m??s brillantes de su raza y dise??aron una nave para\n' +
                                    'viajar por las estrellas y llegar a nuevos mundos donde llevar la guerra que est?? arraigada en sus\n' +
                                    'corazones y la muerte que nace de sus manos.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<div class=\"imgContent\">\n' +
                                        '<img src=\"img/vulcanos.png\" alt=\"S??mbolo de una raza\" class=\"img-responsive\">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentMiniTitle\">V??lm??ende (Pr??speros)</h4>\n' +
                                    '<p>Conocidos en el universo por su gran capacidad para adaptarse a las situaciones m??s extremas. </p>\n' +
                                    '<p>Puede que no tengan el mayor poder ofensivo pero no se les escapan los secretos de la tierra y de c??mo obtener el m??ximo de beneficios con el m??nimo esfuerzo.</p>\n' +
                                    '<p>Vienen del planeta V??lm??n, un planeta lleno de vida y naturaleza que vivi?? para la prosperidad\n' +
                                    'durante muchos a??os. Sin embargo esta raza, pac??fica por naturaleza, se vio involucrada en una\n' +
                                    'guerra ajena y su mundo fue una v??ctima de esta. Ahora buscan un nuevo hogar en el que\n' +
                                    'reconstruir su mundo; y si tienen que luchar esta vez lo har??n.</p>\n' +
                                    '<p>Han evolucionado en tecnolog??a, sociedad y cultura de una forma en la que no hay conflictos entre\n' +
                                    'ellos, pues tienen lo que necesitan. Sin embargo, crecen en n??mero y deben encontrar el nuevo\n' +
                                    'V??lm??n enseguida, pues todav??a no han encontrado un planeta que les satisfaga.</p>\n' +
                                    '<p>A pesar de que su creencia en la tecnolog??a, mantienen y tienen muy arraigada la fe en su religi??n,\n' +
                                    'pues hace que mantengan el respeto con el planeta en el que habitan as?? como en su especie.\n' +
                                    'Por lo tanto son una especie que tiene la habilidad de prosperar en cualquier planeta por mucho\n' +
                                    'm??s tiempo que otras, a pesar de que no sean la mejor en defensas ni ataque.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<div class=\"imgContent\">\n' +
                                        '<img src=\"img/prosperos.png\" alt=\"S??mbolo de una raza\" class=\"img-responsive\">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h3 class=\"contentSubTitle\">Mega corporaciones</h3>\n' +
                                    '<p>Las Mega corporaciones son los poderes m??s influyentes del Universo. Estas corporaciones tienen cientos de razas asociadas y todas se benefician de lo que pueden ofrecer las otras ya que cada una est?? especializada en un sector, as?? que deber??s recapacitar seriamente acciones que puedan da??ar este equilibrio.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentMiniTitle\">Artemis Inc.</h4>\n' +
                                    '<p>Nacida en la ??poca en la que las guerras  estaban como primera orden del d??a. Esta corporaci??n se especializa en el intercambio de armamentos y soldados especializados en la conquista.</p>\n' +
                                    '<p>No se toman a la ligera el ataque a sus asociados y ello puede da??ar gravemente las relaciones y tu imperio en consecuencia.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<div class=\"imgContentLogo\">\n' +
                                        '<img src=\"img/simbolo_guerrillero.png\" alt=\"S??mbolo de una megacorporaci??n\" class=\"img-responsive\">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentMiniTitle\">Spacemaker Group</h4>\n' +
                                    '<p>Buscando el poder econ??mico, tienen una gran cantidad de recursos que ofrecen a todo aquel dispuesto a pagar el precio adecuado. Esta corporaci??n te ofrece una gran cantidad de materiales ??nicos a precios incre??bles si eres su asociado.</p>\n' +
                                    '<p>Cualquier acci??n que les haga perder beneficios no quedara sin un castigo acorde.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<div class=\"imgContentLogo\">\n' +
                                        '<img src=\"img/simbolo_prospero.png\" alt=\"S??mbolo de una megacorporaci??n\" class=\"img-responsive\">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +

                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<h4 class=\"contentMiniTitle\">Hardship Corp.</h4>\n' +
                                    '<p>Defender a los suyos es su misi??n por ello tienen los mejores sistemas de defensa. Esta corporaci??n te ofrece sistemas especiales para que no tengas que temer a los ataques.</p>\n' +
                                    '<p>Para crecer es imprescindible conservar lo ya conseguido.</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            
                            '<div class=\"row\">\n' +
                                '<div class=\"col-md-12 col-lg-12\">\n' +
                                    '<div class=\"imgContentLogo\">\n' +
                                            '<img src=\"img/simbolo_tecnologico.png\" alt=\"S??mbolo de una megacorporaci??n\" class=\"img-responsive\">\n' +
                                        '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div id=\"gameplayD\" class=\"row\"> <!-- GAMEPLAY DESKTOP -->\n' +
                        '<div class=\"col-md-12 col-lg-12\">\n' +
                            '<h3 class=\"contentSubTitle\">C??mo se juega</h3>\n' +
                            '<p>Dos modos principales de juego</p>\n' +
                            '<p>Sin conexi??n:</p>\n' +
                                '<p>Juego de exploraci??n y recursos. Contruye tu propia base y visita otros lugares creados por otros jugadores o por el sistema para comerciar</p>\n' +
                            '<p>Online</p>\n' +
                                '<p>??nete a una Megacorporaci??n para conseguir mejoras en un grupo concreto de recursos. Enfr??ntate a otras Megacorporaciones en batallas multitudinarias junto a miles de jugadores para conseguir el dominio comercial del universo. Pero cuidado, porque si una raza o una megacorporaci??n desaparece, los recursos que producen en exclusiva tambi??n lo har??n.</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>\n' +
            '</div>\n' +
            '<!-- FOOTER -->\n' +
            '<footer class=\"footer\">\n' +
                '<div class=\"row wrapper\">\n' +
                    '<div class=\"col-xs-12 col-sm-12\">\n' +
                        '<div class=\"bloqueRRSS\">\n' +
                            '<img src=\"img/logo_facebook.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                            '<img src=\"img/logo_twitter.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                            '<img src=\"img/logo_instagram.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                            '<img src=\"img/logo_youtube.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<div class=\"col-md-12 col-lg-12\">\n' +
                        '<div class=\"bloqueRRSS\">\n' +
                            '<img src=\"img/logo_facebook.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                            '<img src=\"img/logo_twitter.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                            '<img src=\"img/logo_instagram.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                            '<img src=\"img/logo_youtube.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                        '</div>\n' +
                    '</div>\n' +
                '</div>\n' +
            '</footer>\n' +
        '</div>\n' +
    '</div>'
}

function showProjectD(){
    document.getElementById('buttonCampaignD').classList.remove('menuActive');
    document.getElementById('buttonProjectD').classList.add('menuActive');
    document.getElementById('buttonFaqsD').classList.remove('menuActive');
    document.getElementById('buttonCommentsD').classList.remove('menuActive');
    document.getElementById('buttonTeamD').classList.remove('menuActive');

    var a = document.getElementById('main');
    /*document.getElementById('bodySup').style.backgroundImage="url('../img/fondo_nasa_2.png')";*/
    document.getElementById('bodyInf').style.backgroundImage="url('img/fondo_nasa_2.jpg')";
    a.innerHTML='<div class=\"row wrapper\">\n' +
                    '<div id=\"projectD\" class=\"row projectD\">\n' +
                        '<div class=\"row\" style=\"min-height: 400px;\">\n' +
                            '<div class=\"col-md-6 col-lg-6\">\n' +
                                '<div id=\"projectDescriptionD\" class=\"row\"> <!-- Project descriptionDESKTOP -->\n' +
                                    '<div class=\"col-md-12 col-lg-12\">\n' +
                                        '<h3 class=\"contentSubTitle\">Nuestro proyecto</h3>\n' +
                                        '<p>Galactic Expansion es un juego de estrategia freemium para m??viles. Diferentes razas se enfrentaran por los distintos recursos de la galaxia. Elige a la raza que quieres llevar a la victoria a trav??s de sus capacidades ??nicas. Crea tu propia ciudadela y prepara a tus ej??rcitos para las emocionantes batallas PVE y PVP. Se el soberano de la galaxia y porque no del universo.</p>\n' +
                                        '<p >Si por el contrario lo tuyo es la exploraci??n, podr??s descubrir el universo conocido y visitar otros planetas y ciudadelas, jugando en tu m??vil y sin ning??n tipo de conexi??n. Con ello conseguir??s recursos que te ayudar??n a expandir tu propia base.</p>\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-6 col-lg-6\">\n' +
                                '<div class=\"row\">\n' +
                                    '<div class=\"col-md-12 col-lg-12 barraEstado\"></div>\n' +
                                '</div>\n' +
                                '<div class=\"row bloqueD\">\n' +
                                    '<div class=\"col-md-5 col-lg-5\">\n' +
                                        '<p class=\"recaudado\">3.523,52???</p>\n' +
                                        '<p class=\"subText\">contribuido de 20.000???</p>\n' +
                                    '</div>\n' +
                                    '<div class=\"col-md-4 col-lg-4\">\n' +
                                        '<p class=\"datoNum\">100</p>\n' +
                                        '<p class=\"subText\">patrocinadores</p>\n' +
                                    '</div>\n' +
                                    '<div class=\"col-md-3 col-lg-3\">\n' +
                                        '<p class=\"datoNum\">200</p>\n' +
                                        '<p class=\"subText\">d??as m??s</p>\n' +
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
                                '<p>Con tu apoyo para conseguir nuestras diferentes metas, aparte de obtener nuestra gratitud tambi??n podr??s conseguir acceso exclusivo a la beta y beneficios que te facilitaran las etapas tempranas del juego.</p>\n' +
                            '</div>\n' +
                            '<div class=\"row rewardDBlock\">\n' +
                                '<div class=\"col-md-4 col-lg-4\">\n' +
                                    '<div id=\"reward1\" class=\"rewardD\">\n' +
                                        '<img class="img-responsive" src="img/recompensa_10.png"></img>\n' +
                                        '<h4>10???</h4>\n' +
                                        '<p class="rewardTitle">Explorador espacial</p>\n' +
                                        '<ul>Incluye:\n' +
                                            '<li>?? Una copia del juego</li>\n' +
                                            '<li>?? Paquete de ilustraciones originales (PDF)</li>\n' +
                                            '<li>?? Acceso a la descarga de la BSO del juego (MP3)</li>\n' +
                                        '</ul>\n' +
                                        '<input type="button" value="Contribuir" name="Contribuir" onclick="alertD()">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                                '<div class=\"col-md-4 col-lg-4\">\n' +
                                    '<div id=\"reward2\" class=\"rewardD\"\">\n' +
                                        '<img class="img-responsive" src="img/recompensa_50.png"></img>\n' +
                                        '<h4>50???</h4>\n' +
                                        '<p class="rewardTitle">Alto dirigente</p>\n' +
                                        '<ul>Incluye:\n' +
                                            '<li>?? Recompensas anteriores</li>\n' +
                                            '<li>?? Paquete completo de mejoras para tu ciudad inicial</li>\n' +
                                            '<li>?? Paquete completo de mejoras para tu nave de exploraci??n</li>\n' +
                                        '</ul>\n' +
                                        '<input type="button" value="Contribuir" name="Contribuir" onclick="alertD()">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                                '<div class=\"col-md-4 col-lg-4\">\n' +
                                    '<div id=\"reward3\" class=\"rewardD\"\">\n' +
                                        '<img class="img-responsive" src="img/recompensa_100.png"></img>\n' +
                                        '<h4>100???</h4>\n' +
                                        '<p class="rewardTitle">Megacorporaci??n</p>\n' +
                                        '<ul>Incluye:\n' +
                                            '<li>?? Recompensas anteriores</li>\n' +
                                            '<li>?? Copia digital del libro de desarrollo del juego</li>\n' +
                                            '<li>?? 4 figuras de resina de alta calidad (100mm) de las 4 razas</li>\n' +
                                        '</ul>\n' +
                                        '<input type="button" value="Contribuir" name="Contribuir" onclick="alertD()">\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<!-- FOOTER -->\n' +
                    '<footer class=\"footer\">\n' +
                        '<div class=\"row wrapper\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-12 col-lg-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</footer>\n' +
                '</div>'
}

function showFaqsD(){

    document.getElementById('buttonCampaignD').classList.remove('menuActive');
    document.getElementById('buttonProjectD').classList.remove('menuActive');
    document.getElementById('buttonFaqsD').classList.add('menuActive');
    document.getElementById('buttonCommentsD').classList.remove('menuActive');
    document.getElementById('buttonTeamD').classList.remove('menuActive');

    var a = document.getElementById('main');
    /*document.getElementById('bodySup').style.backgroundImage="url('../img/fondo1.png')";*/
    document.getElementById('bodyInf').style.backgroundImage="url('img/fondo1.jpg')";
    a.innerHTML='<div class=\"row wrapper\">\n' +
                    '<div id=\"faqsD\" class="row faqD\">\n' +
                        '<div class=\"col-md-12 col-lg-12 \">\n' +
                            '<div class="row">\n' +
                                '<h2 class="contentSubTitle">Preguntas frecuentes</h2>\n' +
                                '<div>Es posible que te surjan dudas respecto al proyecto. No te preocupes, busca primero en este listado y, si no encuentras respuesta a tu pregunta, ponte en contacto con nosotros. ??Estaremos encantados de ayudarte!</div>\n' +
                            '</div>\n' +
                            '<div class="row">\n' +
                                '<div id="faq1" class="faq col-md-12 col-lg-12">\n' +
                                    '<span><strong>??El juego es de pago o tiene elementos de juegos de pago?</strong></span>\n' +
                                    '<p>No. El juego no incluir?? ning??n tipo de pay-to-win (nunca venderemos en Galactic Expansion objetos que te ayuden en las batallas o aumentos de experiencia).</p>\n' +
                                    '<p class="fechaFaq">??ltima actualizaci??n: martes, 1 de junio de 2021 0:17 CEST</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class="row">\n' +
                                '<div id="faq1" class="faq col-md-12 col-lg-12">\n' +
                                    '<span><strong>??Contar?? con un modo offline?</strong></span>\n' +
                                    '<p>S??. El juego tiene dos modos de juego: offline para exploraci??n y online para unirte a una megacorporaci??n y participar en batallas MMORPG.\n' +
                                    '<p class="fechaFaq">??ltima actualizaci??n: martes, 1 de junio de 2021 0:17 CEST</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class="row">\n' +
                                '<div id="faq1" class="faq col-md-12 col-lg-12">\n' +
                                    '<span><strong>??Va a haber un lanzamiento f??sico? ??O s??lo digital?</strong></span>\n' +
                                    '<p>Si ??ste fuese un proyecto real, no tendr??amos planes para un lanzamiento f??sico del juego. Al ser un juego para m??viles, no tiene sentido un formato f??sico</p>.\n' +
                                    '<p class="fechaFaq">??ltima actualizaci??n: martes, 1 de junio de 2021 0:17 CEST</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class="row">\n' +
                                '<div id="faq1" class="faq col-md-12 col-lg-12">\n' +
                                    '<span><strong>??Ser?? el juego compatible con otros idiomas?</strong></span>\n' +
                                    '<p>Nuestro soporte inicial de idiomas va a ser para el ingl??s y el espa??ol. Queremos a??adir muchos m??s idiomas y buscaremos la forma de hacerlo.</p>\n' +
                                    '<p class="fechaFaq">??ltima actualizaci??n: martes, 1 de junio de 2021 0:17 CEST</p>\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<!-- FOOTER -->\n' +
                    '<footer class=\"footer\">\n' +
                        '<div class=\"row wrapper\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-12 col-lg-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</footer>\n' +
                '</div>'
}

function showCommentsD(){

    document.getElementById('buttonCampaignD').classList.remove('menuActive');
    document.getElementById('buttonProjectD').classList.remove('menuActive');
    document.getElementById('buttonFaqsD').classList.remove('menuActive');
    document.getElementById('buttonCommentsD').classList.add('menuActive');
    document.getElementById('buttonTeamD').classList.remove('menuActive');

    var a = document.getElementById('main');
    /*document.getElementById('bodySup').style.backgroundImage="url('img/fondo_eagle-nebula-2.jpg')";*/
    document.getElementById('bodyInf').style.backgroundImage="url('img/fondo_eagle-nebula-2.jpg')";
    a.innerHTML='<div class=\"row wrapper\">\n' +
                    '<div id=\"commentsD\" class=\"row commentsD\">\n' +
                        '<div class=\"col-md-12 col-lg-12\">\n' +
                            '<h2>COMENTARIOS</h2>\n' +
                            '<p>??Quieres dejarnos alg??n comentario? ??Adelante! Solo recuerda que necesitar??s conexi??n a internet.</p>\n' +
                            '<section class="u-clearfix u-section-1" id="sec-c57e">\n' +
                                '<div class="u-clearfix u-sheet u-sheet-1">\n' +
                                    '<div class="u-form u-form-1">\n' +
                                        '<form action="https://nicepage.com/editor/Forms/Process" method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" style="padding: 10px" source="email" name="form">\n' +
                                            '<input type="hidden" id="siteId" name="siteId" value="434937">\n' +
                                            '<input type="hidden" id="pageId" name="pageId" value="434938">\n' +
                                            '<div class="u-form-group u-form-name">\n' +
                                            '<label for="name-c4e7" class="u-form-control-hidden u-label">Nombre</label>\n' +
                                            '<input type="text" placeholder="Introduzca su nombre" id="name-c4e7" name="name" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="">\n' +
                                            '</div>\n' +
                                            '<div class="u-form-email u-form-group">\n' +
                                            '<label for="email-c4e7" class="u-form-control-hidden u-label">Email</label>\n' +
                                            '<input type="email" placeholder="Introduzca una direcci??n de correo electr??nico v??lida" id="email-c4e7" name="email" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="">\n' +
                                            '</div>\n' +
                                            '<div class="u-form-group u-form-message">\n' +
                                            '<label for="message-c4e7" class="u-form-control-hidden u-label">Mensaje</label>\n' +
                                            '<textarea placeholder="Ingrese su mensaje" rows="4" cols="50" id="message-c4e7" name="message" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""></textarea>\n' +
                                            '</div>\n' +
                                            '<div class="u-align-left u-form-group u-form-submit">\n' +
                                            '<a href="#" class="u-btn u-btn-submit u-button-style">Enviar</a>\n' +
                                            '<input type="submit" value="submit" class="u-form-control-hidden">\n' +
                                            '</div>\n' +
                                            '<div class="u-form-send-message u-form-send-success"> Gracias! Tu mensaje ha sido enviado. </div>\n' +
                                            '<div class="u-form-send-error u-form-send-message"> No se puede enviar su mensaje. Por favor, corrija los errores y vuelva a intentarlo. </div>\n' +
                                            '<input type="hidden" value="" name="recaptchaResponse">\n' +
                                        '</form>\n' +
                                    '</div>\n' +
                                '</div>\n' +
                            '</section>\n' +
                        '</div>\n' +
                        '</div>\n' +
                        '<!-- FOOTER -->\n' +
                    '<footer class=\"footer\">\n' +
                        '<div class=\"row wrapper\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-12 col-lg-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</footer>\n' +
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
    /*document.getElementById('bodySup').style.backgroundImage="url('../img/fondo_carina-nebula-wide.png')";*/
    document.getElementById('bodyInf').style.backgroundImage="url('img/fondo_carina-nebula-wide.jpg')";
    a.innerHTML='<div class=\"row wrapper\">\n' +
                    '<div id="teamD" class="row teamD">\n' +
                        '<div class="col-md-12 col-lg-12 teamBlock">\n' +
                            '<h2>Nuestro equipo:</h2>\n' +
                            '<p>Somos un equipo peque??o. Aunque no estamos sobrados en experiencia, ??s?? que tenemos muchas ganas!\n' +
                            '<p><strong>??ALARC??N RIERA, ??SCAR</strong> - M??sica original</p>\n' +
                            '<p><strong>??BARRIGA PI??ERO, JAVIER</strong> - Game design (real: documentaci??n y textos)</p>\n' +
                            '<p><strong>??L??PEZ S??NCHEZ, ALEJANDRO</strong> - Concept Pjs</p>\n' +
                            '<p><strong>??MARTIN HERNANDEZ, CARLOS</strong> - Animaci??n y programaci??n (real: c??digo web y montaje de v??deo)</p>\n' +
                            '<p><strong>??RODR??GUEZ CORDERO, BORJA</strong> - Game design (real: documentaci??n y textos)</p>\n' +
                            '<p><strong>??SANZ CORONEL, JORGE</strong> - Concept escenarios e items (real: elaboraci??n de im??genes)</p>\n' +
                        '</div>\n' +
                    '</div>\n' +
                    '<!-- FOOTER -->\n' + 
                    '<footer class=\"footer\">\n' +
                        '<div class=\"row wrapper\">\n' +
                            '<div class=\"col-xs-12 col-sm-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertM()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSSM\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class=\"col-md-12 col-lg-12\">\n' +
                                '<div class=\"bloqueRRSS\">\n' +
                                    '<img src=\"img/logo_facebook.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_twitter.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_instagram.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                    '<img src=\"img/logo_youtube.png\" onclick=\"alertD()\" style=\"cursor: pointer;\" alt=\"Logo Facebook\" class=\"img-responsive logoRRSS\">\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +
                    '</footer>\n' +
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