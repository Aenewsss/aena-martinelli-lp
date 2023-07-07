const Navbar = () => {
    return (
        <div className="container d-flex align-center justify-between">
            <img src="/images/logo-aena.svg" alt="Aenã Martinelli logo" />

            <div className="d-flex gap-1">
                <a href="#" className="text-green fs-24 nav-link nav-important">Quero saber mais!</a>
                <a href="#" className="nav-link">Projetos</a>
                <a href="#" className="nav-link">Sobre mim</a>
                <a href="#" className="nav-link">Feedbacks</a>
                <a href="#" className="nav-link">YouTube</a>
            </div>
        </div>
    );
}

export default Navbar;