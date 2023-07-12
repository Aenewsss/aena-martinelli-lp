import Image from "next/image";

const Youtube = () => {
    return (
        <section id="youtube" className=" mt-md-5">
            <h2 className="container p-4 text-center after-center">
                Além de ajudar empresas a elevar seu patamar, tenho um canal
                no youtube onde ensino programação de uma forma simples,
                objetiva e totalmente gratuita!
            </h2>

            <div className="d-flex mt-3 bg-black flex-md-row flex-column">
                <Image quality={100} fill src="/images/youtube.png" alt="Canal Youtube Garoto de programa" />

                <div className="container p-4 d-flex flex-column w-50 justify-center gap-2">
                    <p className="fs-38">Aprenda com quem tem
                        experiência e se destaque
                        no mercado</p>

                    <button className="btn-cta">IR PARA O YOUTUBE</button>
                </div>
            </div>

        </section>
    );
}

export default Youtube;