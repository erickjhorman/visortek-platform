import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

const navStyle = {
 
  backgroundColor: '#042c93',

};

export const Footer = () => {
    return (
       
        <footer class=" pt-4" style={navStyle}>
          <div class="container">
            <div class="row">
          
              <div class="col-md-4">
                <h5 className="text-light">Contacenos</h5>
                <ul class="list-unstyled">
                  <li className="text-light"><i class="fas fa-map-marker-alt"></i> Cll 32 8a 95 Bg 3 , Cali - Colombia</li>
                  <li className="text-light"><i class="fas fa-phone"></i> +57 3206293608 - 3137363975</li>
                  <li className="text-light"><i class="fas fa-envelope"></i> visortek.cali@gmail.com </li>
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
                  <li><a href="#" class="nav-link text-light"><FontAwesomeIcon icon={faFacebook}/> Facebook</a></li>
                  <li><a href="#" class="nav-link text-light"> <FontAwesomeIcon icon={faTiktok}/> Tik Tok</a></li>
                  <li><a href="#" class="nav-link text-light"> <FontAwesomeIcon icon={faInstagram}/> Instagram</a></li>
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