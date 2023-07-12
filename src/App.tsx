import { useEffect, useState } from 'react';

import ThemeToggleButton from './components/ThemeToggleButton';
import logo from './logo.svg';

import './index.css';

const textFontSizes = [16, 18, 24, 30];

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  // anError;

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div className="">
      <img src={logo} alt="logo" className="w-20 h-20 animate-spin" />
      <h2 className="text-xl text-red-500">red ress</h2>
      <ThemeToggleButton />
      <button type="button" onClick={() => setCount(count + 1)}>
        click me {count}
      </button>
    </div>
  );
}

export default App;
