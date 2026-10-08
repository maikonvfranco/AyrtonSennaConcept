import Marquee from "react-fast-marquee";
import "./ScrollingText.css"; // Importa os estilos
import { motion } from "framer-motion";

const ScrollingText = () => {
    return (
        <motion.div className="marquee-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn" }} // Suaviza a transição
            viewport={{ once: true }}>
            {/* Primeira linha indo para a esquerda */}
            <Marquee speed={100} gradient={true} gradientWidth={100} gradientColor={[0, 0, 0]}>
                <span className="marquee-item">BUY $SENNA12 NOW!</span>
                <span className="marquee-item">THE OFFICIAL SENNA TOKEN</span>
                <span className="marquee-item">BUY $SENNA12 NOW!</span>
                <span className="marquee-item">THE OFFICIAL SENNA TOKEN</span>
            </Marquee>
            <br />
            {/* Segunda linha indo para a direita */}
            <Marquee speed={100} direction="right" gradient={true} gradientWidth={100} gradientColor={[0, 0, 0]}>
                <span className="marquee-item marquee-blur">BUY $SENNA12 NOW!</span>
                <span className="marquee-item marquee-blur">THE OFFICIAL SENNA TOKEN</span>
                <span className="marquee-item marquee-blur">BUY $SENNA12 NOW!</span>
                <span className="marquee-item marquee-blur">THE OFFICIAL SENNA TOKEN</span>
            </Marquee>
        </motion.div>
    );
};

export default ScrollingText;
