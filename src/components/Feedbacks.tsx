import Image from "next/image";
import CarouselButtons from "./CarouselButtons";

const Feedbacks = () => {

    return (
        <section id="feedbacks" className="container mt-md-5 p-4">
            <h2 className="text-center after-center">O que os clientes dizem sobre meus serviços</h2>

            <div className="carousel">

                <CarouselButtons />

                <div className="slides" data-slides>
                    <div className="slide" data-active>
                        <div className="card-feedback">
                            <Image height={40} width={40} src="/icons/aspas.svg" alt="Aspas ícone" />
                            <div className="d-flex justify-between flex-wrap">
                                <p className="mt-2 w-80 fs-24">Um cara super pró ativo que supera as expectativas! Tem o poder de resolver problemas de maneira rápida e eficiente! Super Recomendo</p>
                                <Image className="rounded-circle  mt-md-0 mt-2" height={100} width={100} src="/feedbacks/rodrigo.jpg" alt="s" />
                            </div>

                        </div>
                    </div>
                    <div className="slide" >
                        <div className="card-feedback">
                            <Image height={40} width={40} src="/icons/aspas.svg" alt="Aspas ícone" />
                            <div className="d-flex justify-between flex-wrap">
                                <p className="mt-2 w-80 fs-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, inventore! Quos ipsum atque maiores rerum laborum? Architecto, sit aperiam illo voluptatum, obcaecati aliquam non </p>
                                <Image className="rounded-circle  mt-md-0 mt-2" height={100} width={100} src="/images/topo-aena.png" alt="s" />
                            </div>

                        </div>
                    </div>
                    <div className="slide">
                        <div className="card-feedback">
                            <Image height={40} width={40} src="/icons/aspas.svg" alt="Aspas ícone" />
                            <div className="d-flex justify-between flex-wrap">
                                <p className="mt-2 w-80 fs-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, inventore! Quos ipsum atque maiores rerum laborum? Architecto, sit aperiam illo voluptatum, obcaecati aliquam non </p>
                                <Image className="rounded-circle  mt-md-0 mt-2" height={100} width={100} src="https://images.unsplash.com/photo-1686041607888-78b4d624ed6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="s" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Feedbacks;