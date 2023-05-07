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
            Developed by <strong style={{color: 'white'}}>Mr. Yacine Tensaouti</strong> with <strong style={{color: 'red'}}>&lt;3</strong>, <strong style={{color: 'purple'}}><a href="https://github.com/Heizenbeur/3dportfolio.github.io" target="_blank" rel="noopener noreferrer">download</a></strong> code for free.
          </em>
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
