import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductDetailsModal = ({ show, handleClose, product }) => {
    return (

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{product.product_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Id:</strong> {product.product_id}</p>
                <p><strong>Price:</strong> {product.price}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProductDetailsModal;