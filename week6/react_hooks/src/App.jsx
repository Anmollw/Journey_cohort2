import { useEffect, useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return <div>
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;
