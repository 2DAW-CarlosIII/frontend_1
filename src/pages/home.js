import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/auth'
import reactLogo from 'images/logo512.png';
// import logo from '../images/recivaper.svg';
import novedades from '../images/descarga.png';
import limitada from '../images/images.png';
import slider1 from '../images/otra-imagen-vaper.png';
import proximamente from '../images/Imagen Vaper.png';

function Home() {
  const { user } = useAuth({ middleware: 'guest' })

  return (
    <div className="relative flex items-top justify-center
    min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
      <body>
        <header>
            <div class="logo-busqueda"><img src='../images/recivaper.svg' class="logo"/>
                <form><input type="text" placeholder="Buscar producto"/></form>
            </div>
            <div class="login">
                <a href="/dashboard/login">login</a>
                <label>|</label>
                <a href="/register">registro</a>
            </div>
        </header>
        <nav>
            <ul>
                <li>
                    <a href="">Vapers</a>
                </li>
                <li>
                    <a href="">Accesorios</a>
                </li>
                <li>
                    <a href="">Novedades</a>
                </li>
            </ul>
        </nav>
        <div class="registro">
            <div>
                <p>¿Interesado en recibir</p>
                <p>novedades y ofertas?</p>
                <form><button>REGISTRATE EN RECIVAPER </button></form>
            </div>
        </div>
        <div class="novedades">
            <div class="imagen-novedades">
                <img src={novedades} alt=""/>
            </div>
            <div class="texto-novedades">
                <h3>NOVEDADES</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec rhoncus ullamcorper consequat. Praesent
                    lobortis varius mauris, sed ultricies ante malesuada vitae. 
                    In pulvinar ligula sed lacus ornare
                    lobortis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec rhoncus ullamcorper consequat. Praesent
                    lobortis varius mauris, sed ultricies ante malesuada vitae. 
                    In pulvinar ligula sed lacus ornare
                    lobortis.</p>
            </div>
        </div>
        <div class="limitada">
            <div class="texto-limitada">
            <h3>EDICIÓN LIMITADA</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec rhoncus ullamcorper consequat. Praesent
                lobortis varius mauris, sed ultricies ante malesuada vitae. 
                In pulvinar ligula sed lacus ornare lobortis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec rhoncus ullamcorper consequat. Praesent
                lobortis varius mauris, sed ultricies ante malesuada vitae. 
                In pulvinar ligula sed lacus ornare lobortis.
            </p>
        </div>
            <div class="imagen-limitada">
                <img src={limitada} alt=""/>
            </div>
        </div>

        <section class="ofertas">
            <h3>OFERTAS</h3>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div>
                        <img src={slider1}/>
                        <p class="precioGrande">Precio 1</p>
                    </div>
                    <div>
                        <img src={slider1}/>
                        <p class="precioGrande">Precio 2</p>
                    </div>
                    <div>
                        <img src={slider1}/>
                        <p class="precioGrande">Precio 3</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div>
                        <img src={slider1}/>
                        <p class="precioGrande">Precio 1</p>
                    </div>
                    <div>
                        <img src={slider1}/>
                        <p class="precioGrande">Precio 2</p>
                    </div>
                    <div>
                        <img src={slider1}/>
                        <p class="precioGrande">Precio 3</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" 
                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" 
                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
        </section>

        <section class="proximamente">
            <h3>PRÓXIMAMENTE</h3>
            <article>
                <img src={proximamente}/>
                <p>Nombre producto 1</p>
                <button>AVÍSAME</button>
            </article>
            <article>
                <img src={proximamente}/>
                <p>Nombre producto 2</p>
                <button>AVÍSAME</button>
            </article>
            <article>
                <img src={proximamente}/>
                <p>Nombre producto 3</p>
                <button>AVÍSAME</button>
            </article>
            <article>
                <img src={proximamente}/>
                <p>Nombre producto 4</p>
                <button>AVÍSAME</button>
            </article>
            <article>
                <img src={proximamente}/>
                <p>Nombre producto 5</p>
                <button>AVÍSAME</button>
            </article>
            <article>
                <img src={proximamente}/>
                <p>Nombre producto 6</p>
                <button>AVÍSAME</button>
            </article>
            <article>
                <img src={proximamente}/>
                <p>Nombre producto 7</p>
                <button>AVÍSAME</button>
            </article>
            <article>
                <img src={proximamente}/>
                <p>Nombre producto 8</p>
                <button>AVÍSAME</button>
            </article>
            <article>
                <img src={proximamente}/>
                <p>Nombre producto 9</p>
                <button>AVÍSAME</button>
            </article>
            <article>
                <img src={proximamente}/>
                <p>Nombre producto 10</p>
                <button>AVÍSAME</button>
            </article>
        </section>

        <footer>
            <img src="../images/recivaper_sin_letras.svg" alt="Vaper"/>

            <div class="redes">
                <a href="https://www.facebook.com">
                    <img src="img/facebook.svg" alt="Facebook"/>
                </a>
                <a href="https://www.instagram.com">
                    <img src="img/instagram.svg" alt="Instagram"/>
                </a>
                <a href="https://www.twitter.com">
                    <img src="img/twitter.svg" alt="Twitter"/>
                </a>
            </div>
            <div class="menuPie">
                <ul>
                    <li>
                        <a href="/">Vapers</a>
                    </li>
                    <li>
                        <a href="/">Accesorios</a>
                    </li>
                    <li>
                        <a href="/">Novedades</a>
                    </li>
                </ul>
            </div>
            <div class="telefonoMovilCorreo">
                <ul>
                    <li>
                        <p>Teléfono: 123456789</p>
                    </li>
                    <li>
                        <p>Móvil: 000000000</p>
                    </li>
                    <li>
                        <p>Correo: correo@gmail.com</p>
                    </li>
                </ul>
            </div>
            <p>Política de cookies · Aviso legal · Política de privacidad · Condiciones de compra</p>
        </footer>

        <script src="./bootstrap-5.3.0-alpha1/js/src/carousel.js"></script>
    </body>
    </div>
  );
}

export default Home;
