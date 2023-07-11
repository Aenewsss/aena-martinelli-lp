import Image from "next/image";

const Navbar = () => {
    return (
        <div className="container d-flex align-center justify-between navbar gap-2">
            <img src="/images/logo-aena.svg" alt="Aenã Martinelli logo" />

            <div className="d-flex gap-1 justify-center">
                <a href="#" className="text-green fs-24 nav-link nav-important">Quero saber mais!</a>
                <input id="expand" type="checkbox" hidden />
                <ul className="d-flex gap-1 justify-center nav-list">
                    <li><a href="#" className="nav-link">Projetos</a></li>
                    <li><a href="#" className="nav-link">Sobre mim</a></li>
                    <li><a href="#" className="nav-link">Feedbacks</a></li>
                    <li><a href="#" className="nav-link">YouTube</a></li>
                </ul>
                <label htmlFor="expand" className="expand-button">
                    <Image width={40} height={40} src="/icons/menu-icon.svg" alt="ícone menu de expansão" />
                </label>
            </div>
        </div>
    );
}

export default Navbar;