import './App.css'
import { motion } from "framer-motion";
import Header from './header'
import ScrollingText from './ScrollingText';

import senna1 from "./assets/senna1.png";
import senna2 from "./assets/senna2.png";
import senna3 from "./assets/senna3.png";
import giphy from "./assets/giphy.gif";

function App() {

  return (
    <>
      <Header />

      <div className='partOne'>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
            viewport={{ once: true }}>
            THE <span className="highlight">ONLY OFICIAL</span><br /> SENNA FAN TOKEN</motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}>
            Own a piece of Senna’s legacy. Be a part of the <span className="highlight2">$SENNA12</span> movement!</motion.h3>

          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}>
            CA: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</motion.h4>
          <ScrollingText />
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          viewport={{ once: true }}
          className='img1' src={senna1} alt="Senna" />
      </div>

      <div className='partTwo'>
        <motion.img
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }} className='img2' src={senna2} alt="Senna" />
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}>
            <span className="highlight">THE MASTER</span> OF THE<br /> TRACK.NOW <span className="highlight">TAKING</span><br /> OVER WEB3.</motion.h2>
          <div className='divText'>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeIn" }}
              viewport={{ once: true }}
              className='text1'>From the tracks of Brazil to the most iconic circuits in the world, Ayrton Senna changed Formula 1 forever.<br /><br />
              But his legacy is far from over.<br /><br />
              Now, he’s stepping into a new arena — the blockchain — ready to make his greatest impact yet: $SENNA12. And you can be part of this race.<br />
              Own a piece of the legend. Join the movement.
            </motion.h3>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeIn" }}
              viewport={{ once: true }}
              className='buyBtn2' href="https://www.google.com">BUY $SENNA12 TOKEN</motion.a>
          </div>
        </div>
      </div>

      <motion.div
        className='partGifs'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeIn" }}
        viewport={{ once: true }}>
        <img className='gifs' src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWozaDk3N2cxcHRqYmM4ajIwMjh5aXZwajd0N2dnMjVqY3c5bG9nbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4PUj9aD0MmP4n8ETHl/giphy.gif" alt="Senna" />
        <img className='gifs' src={giphy} alt="Senna" />
      </motion.div>

      <div className='partThree'>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          viewport={{ once: true }}
          className='img2' src={senna3} alt="Senna" />
        <div className='divText'>

          <motion.h2
            className='highlight'
            initial={{ opacity: 0, x: 400 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}>
            <span>
              $SENNA12:
            </span>
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, x: 400 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}>
            More Than Just a Token.
          </motion.h2>

          <motion.h3
            className='text2'
            initial={{ opacity: 0, x: 400 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}>
            Be part of something bigger. Hold $SENNA12 to unlock challenges, surprises and exclusive rewards. Stay updated, explore the roadmap, and get in the game.<br /><br /><br /></motion.h3>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
            viewport={{ once: true }}
            className='buyBtn2' href="https://www.google.com">BUY $SENNA12 TOKEN</motion.a>
        </div>
      </div>

      <div className='partFour'>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p className="disclaimer-title">⚠️ DISCLAIMER / AVISO LEGAL</p>
          <p className="disclaimer-text">
            This website is a <strong>fictional fan project</strong> created solely for <strong>educational and portfolio purposes</strong> to demonstrate web development and UI design skills. 
            There is no real cryptocurrency, token, or financial product associated with this project ($SENNA12 is purely conceptual). 
            This site is not affiliated with, endorsed by, or connected to Ayrton Senna, Senna Brands, or Formula 1.
          </p>
          <p className="disclaimer-text-pt">
            (Este site é um <strong>projeto fictício</strong> criado exclusivamente para fins de <strong>aprendizado e portfólio</strong>. Não há nenhum token, criptomoeda ou produto financeiro real. Não possui vínculo com a marca Ayrton Senna ou Senna Brands.)
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} — Educational Project. Designed for learning purposes.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App;