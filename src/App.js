import CharacterDescription from "./components/CharacterDescription";
import Header from "./components/Header";
import { CharacterProvider } from "./context/CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <div className="container">
        <Header />
        <CharacterDescription />
      </div>
    </CharacterProvider>
  );
}

export default App;
