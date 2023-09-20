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
                </div>

            </div>
        </div>
    );
}

export default Navbar;