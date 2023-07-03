import Greeting from './components/Greeting';
import './App.css';

const students = ['Andrew', 'Arianna', 'Cihan', 'Danny', 'Jeniffer', 'John', 'Kevin', 'Lorenzo', 'Max', 'Pat', 'Sam', 'Yazlin', 'Kevin D.']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Props Demo</h1>
        {students.map(student => <Greeting key={student} name={student} />)}
      </header>
    </div>
  );
}

export default App;
