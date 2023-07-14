"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const shouldAddClass = scrollTop > 0; // Defina a condição para adicionar a classe conforme necessário
            if (window.innerWidth < 992) {
                setIsScrolled(shouldAddClass);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`container d-flex flex-column navbar align-center ${isScrolled && "nav-scroll"}`}>
            <div className="d-flex justify-between w-100 gap-2">
                <img src="/images/logo-aena.svg" alt="Aenã Martinelli logo" />

                <div className="d-flex gap-1 justify-center">
                    <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=5561992634979&text=Olá, Aenã. 
                    Eu gostaria de saber mais sobre os seus serviços referentes a criação de sites e aplicativos!"
                        className="text-green fs-24 nav-link nav-important">
                        Quero saber mais!
                    </a>
                    <ul className="d-flex flex-wrap gap-1 justify-center nav-list desktop">
                        <li><a href="#portfolio" className="nav-link">Projetos</a></li>
                        <li><a href="#about" className="nav-link">Sobre mim</a></li>
                        <li><a href="#feedbacks" className="nav-link">Feedbacks</a></li>
                        <li><a href="#youtube" className="nav-link">YouTube</a></li>
                    </ul>
                </div>

            </div>
            <input id="expand" type="checkbox" hidden />
            <ul className="d-flex flex-wrap gap-1 justify-center nav-list nav-mobile">
                <li><a href="#portfolio" className="nav-link">Projetos</a></li>
                <li><a href="#about" className="nav-link">Sobre mim</a></li>
                <li><a href="#feedbacks" className="nav-link">Feedbacks</a></li>
                <li><a href="#youtube" className="nav-link">YouTube</a></li>
            </ul>
            <label htmlFor="expand" className="expand-button">
                <Image width={40} height={40} src="/icons/menu-icon.svg" alt="ícone menu de expansão" />
            </label>
        </div>
    );
}

export default Navbar;