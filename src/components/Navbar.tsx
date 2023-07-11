import Image from "next/image";

const Navbar = () => {
    return (
        <div className="container d-flex flex-column navbar align-center">
            <div className="d-flex justify-between w-100 gap-2">
                <img src="/images/logo-aena.svg" alt="Aenã Martinelli logo" />

                <div className="d-flex gap-1 justify-center">
                    <a href="#" className="text-green fs-24 nav-link nav-important">Quero saber mais!</a>
                    <input id="expand" type="checkbox" hidden />
                    <ul className="d-flex flex-wrap gap-1 justify-center nav-list">
                        <li><a href="#" className="nav-link">Projetos</a></li>
                        <li><a href="#" className="nav-link">Sobre mim</a></li>
                        <li><a href="#" className="nav-link">Feedbacks</a></li>
                        <li><a href="#" className="nav-link">YouTube</a></li>
                    </ul>
                </div>
            </div>
            <label htmlFor="expand" className="expand-button">
                <Image width={40} height={40} src="/icons/menu-icon.svg" alt="ícone menu de expansão" />
            </label>
        </div>
    );
}

export default Navbar;