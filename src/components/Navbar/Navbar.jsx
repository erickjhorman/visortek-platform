export const NavBar = () => {
    return (

        <>
        <nav className="navbar bg-primary navbar-expand-lg ">
  <div className="container-fluid">
  {/* <img src="https://res.cloudinary.com/dequvdgav/image/upload/v1716667994/vtk_without_background_ra4btu.png" alt="" width="60" height="60" class="d-inline-block align-text-top"/> */}
    <div lassName="navbar-nav">
    <a lassName="nav-link active" href="#">Visortek</a>
    </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link text-light" href="#">Inicio</a>
        <a className="nav-link text-light" href="#">Portafolio</a>
        <a className="nav-link text-light" href="#">Contáctenos</a>
        <a className="nav-link text-light" href="#">Quiénes somos</a>
      </div>
    </div>
  </div>
</nav>
        
        </>
    )
}