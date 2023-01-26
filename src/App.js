import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome name="Carolina" age="25" />
      <Welcome name="Sergio" age="40" />
      <Welcome name="Julia" age="18" />
    </div>
  );
}

export default App;
