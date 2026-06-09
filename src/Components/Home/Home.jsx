import Header from "../Header/Header"
import About from "../About/About";
import Products from "../Procucts/Products";
import Features from "../Features/Features";
import Promo from "../promo/Promo";
import Testimonials from "../Testimonials/Testimonials";
import Newsleters from "../Newsleters/Newsleters";
import Scroll from "../Scroll/Scroll";


function Home() {
  return (
    <>     
      <Header />
      <About />
      <Products />
      <Features />
      <Promo />
      <Testimonials />
      <Newsleters />    
      <Scroll/>

    </>
  )
}

export default Home