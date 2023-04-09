import logo from './logo.svg';
import './App.css';

function App() {
  const sendTest = (e) => {
    e.preventDefault();
    fetch('/testcase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    }).then(response => console.log(response))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <button value='submit testcase' onClick={(e) => {sendTest(e)}} />

    </div>
  );
}

export default App;
