import CharacterDescription from "./components/CharacterDescription";
import CharacterStats from "./components/CharacterStats";
import Header from "./components/Header";
import Card from "./shared/Card";
import { CharacterProvider } from "./context/CharacterContext";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <CharacterProvider>
      <div className="container">
        <Row>
          <Col>
            <Card>Special Abilities</Card>
            <Card>Cyphers</Card>
          </Col>
          <Col>
            <Header />
            <CharacterDescription />
            <CharacterStats />
          </Col>
          <Col>
            <Card>Skills/Inabilities</Card>
            <Card>Equipment</Card>
            <Card>Attacks</Card>
          </Col>
        </Row>
      </div>
    </CharacterProvider>
  );
}

export default App;
