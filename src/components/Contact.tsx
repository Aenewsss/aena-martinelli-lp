import Image from "next/image";

const Contact = () => {
    return (
        <section id="contact" className="container mt-md-5 p-4">
            <h2>Entre em contato e transforme sua empresa</h2>

            <div className="mt-md-5 mt-3 d-flex flex-md-row flex-column gap-2">
                <form action="" className="d-flex flex-column gap-2 form-contact w-50">
                    <div className="d-flex gap-2 flex-md-row flex-column">
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <input type="text" placeholder="Assunto" />
                    <textarea name="" id="" rows={6} maxLength={256} placeholder="Insira sua mensagem">
                    </textarea>

                    <button className="btn-cta">Enviar Mensagem</button>
                </form>

                <div className="d-flex flex-column w-50 align-start gap-3">
                    <p>
                        Transforme sua empresa agora mesmo!
                        Preencha o formulário e receba uma consultoria gratuita!
                    </p>

                    <div className="d-flex flex-column gap-2 ">
                        <a className="d-flex align-center" href="">
                            <Image className="w-fit" src="/icons/icon-person.svg" fill alt="Ícone pessoa" />
                            <span>Aenewsss</span>
                        </a>
                        <a className="d-flex align-center" href="">
                            <Image className="w-fit" src="/icons/icon-location.svg" fill alt="Ícone" />
                            <span>Brasília, Brazil</span>
                        </a>
                        <a className="d-flex align-center" href="">
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