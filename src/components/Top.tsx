import Image from "next/image";
import FormCTA from "./FormCTA";

const Top = () => {
    return (
        <section className="container d-flex align-center justify-between mt-5 top-section">
            <FormCTA />
            <Image className="img-top" quality={100} fill src="/images/aena-topo.png" alt="Aenã Martinelli" />
        </section>
    );
}

export default Top;