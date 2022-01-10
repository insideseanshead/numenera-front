import CharacterDescription from "./components/CharacterDescription";
import CharacterStats from "./components/CharacterStats";
import Header from "./components/Header";
import { CharacterProvider } from "./context/CharacterContext";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <CharacterProvider>
      <div className="container">
        <Row>
          <Col>Special Abilities and Cyphers</Col>
          <Col>
          <Header />
          <CharacterDescription />
          <CharacterStats />
          </Col>
          <Col>Skills/Inabilities, Equipment, Attacks</Col>
        </Row>
      </div>
    </CharacterProvider>
  );
}

export default App;
