import './App.css';
import Quote from './components/Quote/Quote';
import classes from './components/StyleContainer.module.css'

function App() {
  return (
    <div className={classes.bigContainer}>

      <h1 className={classes.colorText}>Clever Chronicle</h1>
      <Quote/>
    </div>
  );
}

export default App;
