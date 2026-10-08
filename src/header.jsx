import React from 'react';
import './Header.css'; // Adiciona um arquivo de estilo para o header, se necessário
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className='main'>
            <motion.header className="header"
                            initial={{ opacity: 0, y: -100 }} // Começa invisível e deslocado para a esquerda
                            whileInView={{ opacity: 1, y: 0 }} // Ao entrar na tela, aparece e se move para a posição normal
                            transition={{ duration: 1.2, ease: "easeOut" }} // Suaviza a transição
                            viewport={{ once: true }}>

                <p>$SENNA12</p>

                <div>
                    <a className='buyBtn' href="https://www.google.com">BUY $SENNA12 TOKEN</a>
                </div>

            </motion.header>
        </div>
    );
};

export default Header;