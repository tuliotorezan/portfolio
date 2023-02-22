import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/Intro';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Skills/>
      <Work/>
      <Education/>
    </div>
  );
}

export default App;
