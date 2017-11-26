import React from 'react';
import is from 'is_js';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const ResultBody = ({ result, onSimilarClick }) => {
  if (result === null) return null;
  return (
    <div>
      <div className="result-header-gray">Resultados de ponderación</div>
      <Container className="result-body">
        <Row>
          <Col xs={7}>Mi puntaje</Col>
          <Col className="result-body-values" xs={5}>
            {result.pond.toFixed(1)}
          </Col>
        </Row>
        <Row>
          <Col xs={7}>Corte 2016</Col>
          <Col className="result-body-values" xs={5}>
            {result.cut || 'No disponible'}
          </Col>
        </Row>
        <Row>
          <Col xs={7}>Diferencia</Col>
          <Col className="result-body-values" xs={5}>
            {result.diff.toFixed(1) || 'No disponible'}
          </Col>
        </Row>
      </Container>
      <div className="result-header-gray">Carreras similares</div>
      <Container className="result-body">
        {is.not.empty(result.sim) && result.sim.map(similar => (
          <Row key={similar.cId}>
            <Col xs={7}>{`${similar.cTitle} ${similar.uInitials}`}</Col>
            <Col className="pondera-link" xs={5}>
              <div onClick={() => onSimilarClick(similar.cId, similar.uId)}>
                ponderar
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};


export default ResultBody;
