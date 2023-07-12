import { useEffect, useState } from 'react';

import logo from './assets/images/logo.svg';

const textFontSizes = [16, 18, 24, 30];

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  // anError;

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div className="">
      <img src={logo} alt="logo" className="w-80 h-80 " />
      <h2 className="text-xl text-red-500">red ress</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        click me {count}
      </button>
    </div>
  );
}

export default App;
