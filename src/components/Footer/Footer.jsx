import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faCity, faHome, faPhone, faStore, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const navStyle = {
  backgroundColor: '#042c93',
};

export const Footer = () => {
  return (
    <footer class=" pt-4" style={navStyle}>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5 className="text-light">Contactenos</h5>
            <ul class="list-unstyled">
              <li className="text-light"><FontAwesomeIcon icon={faHome} /> Dirección principal - Calle 32 # 8a 95 Bg 3</li>
              <li className="text-light"><FontAwesomeIcon icon={faStore} /> Punto de venta - Carrera 15 # 32-33</li>
              <li className="text-light"><FontAwesomeIcon icon={faPhone} /> 3206293608 - 3137363975</li>
              <li className="text-light"><FontAwesomeIcon icon={faVoicemail} /> visortek.cali@gmail.com </li>
              <li className="text-light"><FontAwesomeIcon icon={faCity} /> Cali - Colombia </li>
            </ul>
          </div>

          <div class="col-md-4">
            <h5 className="text-light">Acessos rápidos</h5>
            <ul class="list-unstyled">
              <li><a href="#" className="nav-link text-light">Inicio</a></li>
              <li><a href="#" className="nav-link text-light">Acerca de nosotros</a></li>
              <li><a href="#" className="nav-link text-light">Productos</a></li>
              <li><a href="#" className="nav-link text-light">Contactenos</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="text-light">Síguenos</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/visortek" target="_blank" rel="noopener noreferrer" class="nav-link text-light"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a href="https://www.tiktok.com/@vshelmets_" class="nav-link text-light" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faTiktok} /> Tik Tok</a></li>
              <li><a href="https://www.instagram.com/visortek" class="nav-link text-light" target="_blank" rel="noopener noreferrer" > <FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12 text-center text-light">
            <p class="mb-0">&copy; 2024 Una compañía. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 