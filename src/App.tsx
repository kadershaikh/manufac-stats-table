import Flavanoids from "./components/Flavanoids";
import Gammas from "./components/Gammas";
import data from "./data/Wine-Data.json";

function App() {
  return (
    <>
      <div>
        <h1>Flavanoid Stats</h1>
        <Flavanoids data={data} />
      </div>

      <div>
        <h1>Gamma Stats</h1>
        <Gammas data={data} />
      </div>
    </>
  );
}

export default App;
