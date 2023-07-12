import Image from "next/image";

const About = () => {
    return (
        <section className="container mt-md-5 p-4">
            <div className="card-about p-4 p-md-4">
                <h2>O profissional por trás dos serviços</h2>

                <div className="d-flex flex-column flex-md-row mt-3 justify-between">
                    <Image  quality={80} fill src="/images/about.png" alt="Sobre Aenã Martinelli" />

                    <div className="d-flex flex-column w-50 gap-3 justify-center">
                        <p>
                            Está na hora de <span className="text-green">elevar</span> o seu
                            <span className="text-green">&nbsp;negócio</span> a patamares <span className="text-green">extraordinários</span>! 
                            Sou Aenã Eloi Martinelli,  um profissional apaixonado por programação para 
                            dispositivos mobile, web e  desktop.
                        </p>
                        <p>
                            Se você está pronto para <span className="text-green">vender mais</span> e destacar-se 
                            em meio à concorrência acirrada, você está no <span className="text-green">lugar certo</span>. 
                            Com vários <span className="text-green">projetos bem-sucedidos</span> no meu portfólio, estou pronto para 
                            despertar o potencial do seu negócio com aplicativos e sites com designs modernos e de alta performance!
                        </p>

                        <button className="btn-cta mw-100 fs-20 p-08">QUERO UMA SOLUÇÃO impactante para o MEU negócio!</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;