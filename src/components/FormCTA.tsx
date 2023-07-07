import { robotoSlab } from "@/app/layout";
import Image from "next/image";

const FormCTA = () => {
    return (
        <div className="bg-glass position-relative padding-25em">
            <Image className="left-0 position-absolute top-0" fill src="/images/border-form-cta.svg" alt="Borda Gradiente Superior" />

            <h1 className="d-flex flex-column cta-title">
                <span className="cta-title-1">DESPERTE O POTENCIAL DO</span>
                <span className="cta-title-2">SEU <span>NEGÓCIO</span></span>
                <span className="cta-title-3">com sites e aplicativos de alta performance!</span>
            </h1>

            <form className="form-cta d-flex flex-column">
                <input style={robotoSlab.style} type="text" placeholder="Como posso te chamar?" />
                <input style={robotoSlab.style} type="text" placeholder="Principal e-mail" />
                <input style={robotoSlab.style} type="text" placeholder="Whatsapp" />
                <button style={robotoSlab.style} type="submit">QUERO SABER MAIS!</button>
            </form>

            <Image className="left-0 position-absolute bottom-0" fill src="/images/border-form-cta.svg" alt="Borda Gradiente Inferior" />
        </div>
    );
}

export default FormCTA;