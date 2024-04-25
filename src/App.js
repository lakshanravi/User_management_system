import {useNavigate} from 'react-router-dom';
// me udin hook ekk use kle . ara user button ek clck klama user page ekt ynn hdnn
import './App.css';

function App() {

  // function ekk hadagnnw navigate kyl "useNavigate()"hook ek baawithyen. eken puluwn yt button ek click klma kemthi thenkt navigate wenn hdnna
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to lakshan vlog</h1>
      <button className="users-button" onClick={()=> navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
