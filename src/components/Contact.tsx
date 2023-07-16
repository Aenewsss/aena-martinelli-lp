"use client"

import { FormCtaEnum } from "@/enum/form-cta.enum";
import { IFormBottomCta } from "@/interface/interfaces";
import Image from "next/image";
import { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [ctaData, setCtaData] = useState<IFormBottomCta>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    function handleCtaData(event: any) {
        const id = event.target.id
        const value = event.target.value

        switch (id) {
            case FormCtaEnum.name: return setCtaData({ ...ctaData, name: value })
            case FormCtaEnum.email: return setCtaData({ ...ctaData, email: value })
            case FormCtaEnum.message: return setCtaData({ ...ctaData, message: value })
            case FormCtaEnum.subject: return setCtaData({ ...ctaData, subject: value })
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const templateParams = {
            user_name: ctaData.name,
            user_email: ctaData.email,
            subject: ctaData.subject,
            message: ctaData.message
        }

        emailjs.send(
            String(process.env.NEXT_PUBLIC_SERVICE_ID),
            String(process.env.NEXT_PUBLIC_TEMPLATE_NEW_MESSAGE_ID),
            templateParams,
            process.env.NEXT_PUBLIC_USER_ID)
            .then((result: any) => {
                console.log(result.text);
            }, (error: any) => {
                console.log(error.text);
            });

        window.open("https://api.whatsapp.com/send?phone=5561992634979&text=Olá,%20Aenã.%20%20%20%20Eu%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20referentes%20a%20criação%20de%20sites%20e%20aplicativos!", "_blank")
    }

    return (
        <section id="contact" className="container mt-md-5 p-4">
            <h2>Entre em contato e transforme sua empresa</h2>

            <div className="mt-md-5 mt-3 d-flex flex-md-row flex-column gap-2">
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 form-contact w-50">
                    <div className="d-flex gap-2 flex-md-row flex-column">
                        <input value={ctaData.name} onChange={handleCtaData} id="name" type="text" required placeholder="Nome" />
                        <input value={ctaData.email} onChange={handleCtaData} id="email" type="text" required placeholder="Email" />
                    </div>
                    <input value={ctaData.subject} onChange={handleCtaData} id="subject" required type="text" placeholder="Assunto" />
                    <textarea required value={ctaData.message} onChange={handleCtaData} id="message" rows={6} maxLength={256} placeholder="Insira sua mensagem">
                    </textarea>

                    <button type="submit" className="btn-cta">Enviar Mensagem</button>
                </form>

                <div className="d-flex flex-column w-50 align-start gap-3">
                    <p>
                        Transforme sua empresa agora mesmo!
                        Preencha o formulário e receba uma consultoria gratuita!
                    </p>

                    <div className="d-flex flex-column gap-2 ">
                        <a className="d-flex align-center" target="_blank" href="https://www.linkedin.com/in/aenã-eloi-martinelli/">
                            <Image className="w-fit" src="/icons/icon-person.svg" fill alt="Ícone pessoa" />
                            <span>Meu LinkedIn</span>
                        </a>
                        <a className="d-flex align-center">
                            <Image className="w-fit" src="/icons/icon-location.svg" fill alt="Ícone" />
                            <span>Brasília, Brazil</span>
                        </a>
                        <a target="_blank" className="d-flex align-center" href="mailto:aenamartinelli@gmail.com">
                            <Image className="w-fit" src="/icons/icon-mail.svg" fill alt="Ícone" />
                            <span>aenamartinelli@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;