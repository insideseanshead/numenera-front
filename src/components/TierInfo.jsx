import { Col, Row } from "react-bootstrap";

const TierInfo = () => {
  return (
    <div className="tier-info">
      <Row>
        <Col>
          <div className="tier-cell">
            1
            <h6>Tier</h6>
          </div>
        </Col>
        <Col>
          <div className="tier-cell">
            2
            <h6>Effort</h6>
          </div>
        </Col>
        <Col>
          <div className="tier-cell">
            4
            <h6>Exp.</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TierInfo;
