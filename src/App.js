import './App.scss';
import Dashboard from './Pages/Dashboard';
import Loader from './commons/Loader';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className="App">
      {isLoading ? <Loader /> : <Dashboard />}
    </div>
  );
}

export default App;
