import { Avatar } from "@material-ui/core";
import React, { useState, Fragment } from "react";
import { Modal, Button, Table, Image } from "react-bootstrap";

export function AlertProfileUnity({ userSelect }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(userSelect)
    return (
        <Fragment>
            <label className="btn ripple btn-primary btn-sm border mt-3 tx-bold" onClick={handleShow}>
                Ver perfil
            </label>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center mb-3">
                        <Avatar
                            alt={userSelect.name}
                            style={{ width: 200, height: 200 }}
                            className="rounded-circle"
                            src={userSelect.url}
                        />
                    </div>
                    <Table className="table text-nowrap text-md-nowrap table-bordered mg-b-0 ">
                        <tbody>
                            <tr>
                                <th>Nome</th>
                                <th style={{ textTransform: 'capitalize' }}>{userSelect?.name}</th>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <th>{userSelect?.email}</th>
                            </tr>
                            <tr>
                                <th>Permissão</th>
                                <th style={{ textTransform: 'capitalize' }}>{userSelect?.permission}</th>
                            </tr>
                            <tr>
                                <th>Cargo</th>
                                <th style={{ textTransform: 'capitalize' }}>
                                    {!!userSelect?.id_office ? userSelect?.cargo?.office : 'Não definido'}
                                </th>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export function AdminProfileUnity({ userUnity }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(userUnity)
    return (
        <Fragment>
            <label className="btn btn-sm btn-primary me-1 mt-2" onClick={handleShow}>
                <i className="bi bi-eye-fill"></i>
            </label>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center mb-3">
                        <Avatar
                            alt={userUnity.name}
                            style={{ width: 200, height: 200 }}
                            className="rounded-circle"
                            src={userUnity?.image?.url}
                        />
                    </div>
                    <Table className="table text-nowrap text-md-nowrap table-bordered mg-b-0 ">
                        <tbody>
                            <tr>
                                <th>Nome</th>
                                <th style={{ textTransform: 'capitalize' }}>{userUnity?.name}</th>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <th>{userUnity?.email}</th>
                            </tr>
                            <tr>
                                <th>Permissão</th>
                                <th>
                                    {!!userUnity?.permission ? userUnity?.permission : 'Não definido'}
                                    </th>
                            </tr>
                            <tr>
                                <th>Cargo</th>
                                <th>
                                    {!!userUnity?.id_office ? userUnity?.cargo?.office : 'Sem cargo'}
                                </th>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}