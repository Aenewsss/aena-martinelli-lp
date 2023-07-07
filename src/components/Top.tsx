import Image from "next/image";
import FormCTA from "./FormCTA";

const Top = () => {
    return (
        <div className="container d-flex align-center justify-between mt-5">
            <FormCTA />
            <Image className="img-top" quality={100} fill src="/images/aena-topo.png" alt="Aenã Martinelli" />
        </div>
    );
}

export default Top;