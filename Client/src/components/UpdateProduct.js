import React, { useState } from "react";

import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Form, Modal } from "react-bootstrap";
// redux
import { useDispatch, useSelector } from "react-redux";

import { addImage, update_product } from "../actions/productAction";

export default function UpdateProduct({ product }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { imagelink } = useSelector((state) => state.image);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [countInstock, setCountInstock] = useState(product.countInstock);

  

  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      update_product({
        _id: product._id,
        title,
        price,
        description,
        category,
        countInstock,
        images: imagelink,
      })
    );
    history.push("/products");
    alert("Produit modifié avec succès");
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleShow}
        variant="outlined"
        color="secondary"
        style={{ width: "100%" }}
      >
        Modifier
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>modifier produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
        
            <Form.Group controlId="baby">
              <Form.Label className="input"> choisir un image:</Form.Label>
              <Form.Control
                type="file"
                placeholder="image"
                accept="image/png, image/jpeg"
              
               
                onChange={(e) => dispatch(addImage(e.target.files[0]))}
              ></Form.Control>
            </Form.Group>

           


            <Form.Group controlId="title">
              <Form.Label className="input">Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label className="input">Prix:</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)} 
              ></Form.Control>DNT
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label className="input">Description: </Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label className="input">Catégorie: </Form.Label>
              <Form.Control
                type="text"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>
           <Form.Group controlId="countInstock">
              <Form.Label className="input">countInstock: </Form.Label>
              <Form.Control
                type="text"
                placeholder="countInstock"
                value={countInstock}
                onChange={(e) => setCountInstock(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            onClick={submitHandler}
            variant="outlined"
            color="secondary"
          >
            modifier{" "}
          </Button>
          <br />

          <Button variant="outlined" color="secondary" onClick={handleClose}>
            {" "}
            fermer{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
