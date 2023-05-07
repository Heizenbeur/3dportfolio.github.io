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
        <p className="text-xs">
          <em>
            This website was developed by <strong style={{color: 'white'}}>Dr. Yacine Tensaouti</strong> (React, Node.js & Three.js frameworks), <strong style={{color: 'purple'}}><a href="https://github.com/Heizenbeur/3dportfolio.github.io" target="_blank" rel="noopener noreferrer">download</a></strong> code for free.
          </em>
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
