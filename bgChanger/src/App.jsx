import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-col justify-center items-center left-12 inset-y-0 py-2">
        <div className="flex flex-col justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button onClick={() => setColor("red")}
            className="rounded-full text-white py-1 px-4 outline-none shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button onClick={() => setColor("green")}
            className="rounded-full text-white py-1 px-4 outline-none shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button onClick={() => setColor("black")}
            className="rounded-full text-white py-1 px-4 outline-none shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button onClick={() => setColor("yellow")}
            className="rounded-full text-black py-1 px-4 outline-none shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button onClick={() => setColor("pink")}
            className="rounded-full text-black py-1 px-4 outline-none shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button onClick={() => setColor("violet")}
            className="rounded-full text-white py-1 px-4 outline-none shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>

          <button onClick={() => setColor("gray")}
            className="rounded-full text-white py-1 px-4 outline-none shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            gray
          </button>

          <button onClick={() => setColor("blue")}
            className="rounded-full text-white py-1 px-4 outline-none shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button onClick={() => setColor("skyblue")}
            className="rounded-full text-black py-1 px-4 outline-none shadow-lg"
            style={{ backgroundColor: "skyblue" }}
          >
            skyBlue
          </button>

          <button onClick={() => setColor("orange")}
            className="rounded-full text-white py-1 px-4 outline-none shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
