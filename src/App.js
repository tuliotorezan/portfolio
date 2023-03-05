import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/Intro';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Header from './components/Header/Header';
import { useRef } from 'react';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const about = useRef()
  const skills = useRef()
  const experience = useRef()
  const education = useRef()
  const portfolio = useRef()
  return (
    <div className="App">
      <Header about={about} skills={skills} experience={experience} education={education} portfolio={portfolio} />
      <Intro about={about}/>
      <Skills skills={skills}/>
      <Work experience={experience}/>
      <Education education={education}/>
      <Portfolio portfolio={portfolio}/>
    </div>
  );
}

export default App;
