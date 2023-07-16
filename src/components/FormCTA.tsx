"use client"

import { FormCtaEnum } from "@/enum/form-cta.enum";
import { IFormTopCta } from "@/interface/interfaces";
import { Roboto_Slab } from 'next/font/google'
import Image from "next/image";
import { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const FormCTA = () => {

    const [ctaData, setCtaData] = useState<IFormTopCta>({
        name: '',
        email: '',
        phone: ''
    });

    function handleCtaData(event: any) {
        const id = event.target.id
        const value = event.target.value

        switch (id) {
            case FormCtaEnum.name: return setCtaData({ ...ctaData, name: value })
            case FormCtaEnum.email: return setCtaData({ ...ctaData, email: value })
            case FormCtaEnum.phone: return setCtaData({ ...ctaData, phone: value })
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const templateParams = {
            user_name: ctaData.name,
            user_phone: ctaData.phone,
            user_email: ctaData.email
        }

        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
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
        <div className="bg-glass position-relative padding-25em ">
            <Image className="left-0 position-absolute top-0" fill src="/images/border-form-cta.svg" alt="Borda Gradiente Superior" />

            <h1 className="d-flex flex-column cta-title">
                <span className="cta-title-1">DESPERTE O POTENCIAL DO</span>
                <span className="cta-title-2">SEU <span>NEGÓCIO</span></span>
                <span className="cta-title-3">com sites e aplicativos de alta performance!</span>
            </h1>

            <form onSubmit={handleSubmit} className="form-cta d-flex flex-column">
                <input value={ctaData.name} id="name" onChange={(e) => handleCtaData(e)} required style={robotoSlab.style} type="text" placeholder="Como posso te chamar?" />
                <input value={ctaData.email} id="email" onChange={(e) => handleCtaData(e)} required style={robotoSlab.style} type="email" placeholder="Principal e-mail" />
                <input value={ctaData.phone} id="phone" onChange={(e) => handleCtaData(e)} required style={robotoSlab.style} type="number" placeholder="Whatsapp" />
                <button style={robotoSlab.style} type="submit">QUERO SABER MAIS!</button>
            </form>

            <Image className="left-0 position-absolute bottom-0" fill src="/images/border-form-cta.svg" alt="Borda Gradiente Inferior" />
        </div>
    );
}

export default FormCTA;