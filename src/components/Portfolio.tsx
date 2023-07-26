import Image from "next/image";

const Portfolio = () => {
    return (
        <section id="portfolio" className="container d-flex flex-md-row flex-column mt-md-5 p-4 justify-between">
            <div className="d-flex flex-column w-50 gap-2">
                <h2>Conheça meus projetos de sucesso</h2>

                <div className="portfolio-card d-flex flex-column gap-1">
                    <Image fill src="/portfolio/test-portfolio.png" alt="QRO Agendar, sistema de agendamentos" />
                    <h3>QRO AGENDAR</h3>
                    <p>
                        Site para ajudar empreendedores a se organizarem em suas agendas,
                        tais como profissionais, horários e qual a forma de pagamento.
                    </p>
                </div>

                <div className="portfolio-card d-flex flex-column gap-1">
                    <Image fill src="/portfolio/sks.png" alt="Grupo SKS, site portfolio para o grupo sks" />
                    <h3>GRUPO SKS</h3>
                    <p>
                        Site para o Grupo SKS, o qual surgiu da necessidade de agregar valor ao segmento de construção civil e da política de suas empresas em buscar constantemente a inovação tecnológica e de seus processos.
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column w-50 align-center gap-2 mt-md-0 mt-2">
                <div className="portfolio-card d-flex flex-column gap-1 mt-md-0">
                    <Image fill src="/portfolio/walkr-app.png" alt="Walkr App, aplicativo para descobrir o número da sua vida" />
                    <h3>WALKR APP</h3>
                    <p>
                        Aplicativo para ajudar pessoas a descobrirem quanto custa a realização dos seus sonhos,
                        o quanto é necessário poupar, qual o rendimento ideal do seu patrimônio e das suas sobras,
                        com quantos anos você conseguirá a sua independência financeira e muito mais.
                    </p>
                </div>

                <div className="portfolio-card d-flex flex-column gap-1">
                    <Image fill src="/portfolio/qria.png" alt="QRIA TECH, fábrica de software" />
                    <h3>QRIA TECH</h3>
                    <p>
                        Site para a empresa de tecnologia QRIA TECH, a qual tem o objetivo de trazer soluções tecnológicas para o seu negócio com Qualidade, Resultado, Inovação e Agilidade.
                    </p>
                </div>

                <a target="_blank"
                    href="https://api.whatsapp.com/send?phone=5561992634979&text=Olá, Aenã. 
                    Eu gostaria de solicitar um orçamento"
                    className="btn-cta mt-md-0 text-center fs-20">
                    SOLICITE SEU ORÇAMENTO
                </a>
            </div>
        </section>
    );
}
export default Portfolio;