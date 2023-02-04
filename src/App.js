import Airplanes from "./Airplanes";
import "./App.css";
import Navbar from "./Navbar";
import Services from "./Services";

function App() {
  return (
    <>

    <Navbar />
      <h1 className="text-3xl font-bold text-center">WElCome</h1>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

<Services />

      <Airplanes />

    </>
  );
}

export default App;
