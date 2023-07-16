import Image from "next/image";
import FormCTA from "./FormCTA";

const Top = () => {
    return (
        <section className="container d-flex align-center justify-between mt-md-5 top-section mt-5">
            <FormCTA />
            <Image className="img-top" quality={100} fill src="/images/topo-aena.png" alt="Aenã Martinelli" />
        </section>
    );
}

export default Top;