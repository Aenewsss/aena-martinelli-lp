import Image from "next/image";

const Portfolio = () => {
    return (
        <section className="container d-flex flex-md-row flex-column mt-md-5 p-4 justify-between">
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
                    <Image fill src="/portfolio/test-portfolio.png" alt="QRO Agendar, sistema de agendamentos" />
                    <h3>QRO AGENDAR</h3>
                    <p>
                        Site para ajudar empreendedores a se organizarem em suas agendas,
                        tais como profissionais, horários e qual a forma de pagamento.
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column w-50 align-center gap-2 mt-md-0 mt-2">
                <div className="portfolio-card d-flex flex-column gap-1 mt-md-0">
                    <Image fill src="/portfolio/test-portfolio.png" alt="QRO Agendar, sistema de agendamentos" />
                    <h3>QRO AGENDAR</h3>
                    <p>
                        Site para ajudar empreendedores a se organizarem em suas agendas,
                        tais como profissionais, horários e qual a forma de pagamento.
                    </p>
                </div>

                <div className="portfolio-card d-flex flex-column gap-1">
                    <Image fill src="/portfolio/test-portfolio.png" alt="QRO Agendar, sistema de agendamentos" />
                    <h3>QRO AGENDAR</h3>
                    <p>
                        Site para ajudar empreendedores a se organizarem em suas agendas,
                        tais como profissionais, horários e qual a forma de pagamento.
                    </p>
                </div>

                <button className="btn-cta mt-2 mt-md-0 ">SOLICITE SEU ORÇAMENTO</button>
            </div>
        </section>
    );
}
export default Portfolio;