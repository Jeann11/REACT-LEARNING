import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome name="Carolina" age="25" id="1"/>
      <Welcome name="Sergio" age="40" id="2"/>
      <Welcome name="Julia" age="18" id="3" />
    </div>
  );
}

export default App;
