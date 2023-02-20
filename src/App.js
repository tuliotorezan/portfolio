import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/Intro';
import Education from './components/Education/Education';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Work/>
      <Education/>
    </div>
  );
}

export default App;
