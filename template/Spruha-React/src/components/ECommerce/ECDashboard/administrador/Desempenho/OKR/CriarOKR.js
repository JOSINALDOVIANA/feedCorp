import React, { Fragment, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Col, FormGroup, Row, Form, InputGroup, ListGroup, Badge } from "react-bootstrap";
import * as formelement from "../../../../../../data/Forms/formelement";
import { SingleselectUnidade, SingleselectPessoa } from "./FormDataOKR";
import { usuarioContext } from "../../../../../..";

import user1 from "../../../../../../assets/img/users/1.jpg";
// import { Container } from './styles';

const CriarOKR = () => {
  const dadosrota = useLocation();
  const location = useLocation();
  const navegar = useNavigate();
  const { values, setValues } = useContext(usuarioContext);
  useEffect(() => {
    setValues(dadosrota.state)
  }, [dadosrota])
  return (
    <Fragment>

      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">

            <div className="page-header mx-4">
              <h2 className="main-content-title tx-24 mg-b-5">Novo Objetivo</h2>
              <div>
                <Button to="#"
                  variant="info"
                  className="btn me-1">
                  Criar
                </Button>
                <Button onClick={() => {
                  navegar(`${process.env.PUBLIC_URL}/okr/`, { state: values })
                }}
                  variant="danger"
                >
                  Cancelar
                </Button>
              </div>
            </div>
            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Nome do Objetivo</Form.Label>
                <input type="text" className="form-control" placeholder="Objetivo" />
              </FormGroup>

              {/* <FormGroup className="form-group">
                <Form.Label className="tx-medium">Descrição</Form.Label>
                <textarea className="form-control" />
              </FormGroup> */}

              <FormGroup className="form-group">
                <Form.Label className="tx-medium">Validade</Form.Label>

                <InputGroup>
                  <Button
                    variant="light" type="button">
                    <i className="fe fe-calendar lh--9 op-6"></i>
                  </Button>
                  <formelement.Datepicker />
                </InputGroup>
              </FormGroup>

              {/* <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">Chaves</h2>
                  <spam className="d-flex text-muted tx-13">
                    Crie Chaves para o seu objetivo
                  </spam>
                </div>
              </div> */}

              {/* <div className="input-group">

                <label className="input-group-btn">
                  <span className="btn btn-primary">
                    Adicionar
                    <input
                      // type="file"
                      style={{ display: "none" }}
                      multiple=""
                    />
                  </span>
                </label>
              </div> */}



              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">Key Results</h2>
                  <spam className="d-flex text-muted tx-13">
                    Escolha os integrantes e suas respectivas chaves
                  </spam>
                </div>
              </div>

              <div className="page-header">

                <Col lg={3} xl={3} xxl={3} md={12} className="my-1">
                  <input
                    type="select"
                    className="form-control border-end-0 browse-file"
                    placeholder="Key Result"
                    required
                  />
                </Col>
                <Col lg={3} xl={3} xxl={3} md={12} className="my-1">
                  <SingleselectUnidade />
                </Col>
                <Col lg={3} xl={3} xxl={3} md={12} className="my-1">
                  <SingleselectPessoa />
                </Col>

                <div className="d-flex justify-content-end mx-3">
                  <Button
                    variant="primary"
                    type="button"
                    className="my-2 btn"
                  >
                    Adicionar
                  </Button>
                </div>

              </div>
              <ListGroup>

                <ListGroup.Item action
                  as="li"
                  className="d-flex justify-content-betwween align-items-center"
                >
                  <div className="ms-2 me-auto">Nome da chave bla bla bla bla</div>
                  
                  <div className="d-flex align-items-center mb-2 me-4">
                    <img
                      alt="avatar"
                      className="wd-30 rounded-circle mg-r-15"
                      src={user1}
                    />
                    <div>
                      <h6 className="tx-13 tx-inverse tx-semibold mg-b-0">
                        Marcus Silva
                      </h6>
                      <span className="d-block tx-11 text-muted">
                        Premium Topper
                      </span>
                    </div>
                  </div>

                  <div className="me-2">
                  <i  style={{ cursor: 'pointer' }} className="ti ti-trash"></i>
                  </div>
                  
                </ListGroup.Item>

              </ListGroup>


            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment >
  );
}

export default CriarOKR;
