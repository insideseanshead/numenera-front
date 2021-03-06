import { Row, Col } from "react-bootstrap";

const CharacterStats = () => {
  return (
    <div className="stats">
      {/* Might */}
      <div className="might">
        <Row>
          <Col>
            <h4 className="stat-title">Might</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <div className="mods">
              <div className="pool">12</div>
              <div className="edge">0</div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="characterStat">12</div>
          </Col>
        </Row>
      </div>
      {/* speed */}
      <div className="speed">
        <Row>
          <Col>
            <h4 className="stat-title">Speed</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <div className="mods">
              <div className="pool">16</div>
              <div className="edge">2</div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="characterStat">16</div>
          </Col>
          <Col>
            <div className="armor">
              <Row>
                <Col>
                  <h6 className="armor-title">Cost</h6>
                </Col>
                <Col>
                  <h6 className="armor-title">Armor</h6>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <div className="cost">1</div>
                </Col>
                <Col xs={6}>
                  <div className="armor-value">2</div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      {/* Intellect */}
      <div className="intellect">
        <Row>
          <Col>
            <h4 className="stat-title">Intellect</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <div className="mods">
              <div className="pool">13</div>
              <div className="edge">0</div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="characterStat">13</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CharacterStats;
