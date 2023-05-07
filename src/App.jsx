
import './App.css'
import Landing from './components/Landing'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Store from './components/Store';
import Tech from './components/Tech';
import Login from './components/Login';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />}></Route>
          <Route path="store" element={<Store />}></Route>
          <Route path="tech" element={<Tech />}></Route>
          <Route path="Login" element={<Login />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
