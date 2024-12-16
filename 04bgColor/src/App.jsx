import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      {/* Box Container */}
      <div className="absolute bottom-0 w-full flex justify-center gap-4 p-4">
        {/* Red Box */}
        <div
          className="w-20 h-20 bg-red-500 rounded-md cursor-pointer flex items-center justify-center text-white font-bold"
          onClick={() => setColor("red")}
        >
          Red
        </div>

        {/* Blue Box */}
        <div
          className="w-20 h-20 bg-blue-500 rounded-md cursor-pointer flex items-center justify-center text-white font-bold"
          onClick={() => setColor("blue")}
        >
          Blue
        </div>

        {/* Green Box */}
        <div
          className="w-20 h-20 bg-green-500 rounded-md cursor-pointer flex items-center justify-center text-white font-bold"
          onClick={() => setColor("green")}
        >
          Green
        </div>

        {/* Yellow Box */}
        <div
          className="w-20 h-20 bg-yellow-500 rounded-md cursor-pointer flex items-center justify-center text-black font-bold"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </div>
      </div>
    </div>
  );
}

export default App;
