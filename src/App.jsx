import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <div>
          <em>This website was fully developped by Dr. Yacine Tensaouti (React, Nodes.js & Three.js), any unauthorized copying or distribution of this material is strictly prohibited.</em>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
