import React, { useState,useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Form, Modal } from "react-bootstrap";
// redux
import { useDispatch, useSelector } from "react-redux";

import { addImage, add_product,getProducts } from "../actions/productAction";




export default function AddProductMOdal() {
  
  const dispatch=useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { imagelink } = useSelector((state) => state.image);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    countInStock: "",
  });
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  const submitHandler = async (e) => {
    console.log({ ...product, images: imagelink });
    e.preventDefault();

    dispatch(add_product({ ...product, images: imagelink }));
   
    history.push("/products");

    alert("Produit ajouté avec succès");
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleShow}
        variant="outlined"
        color="secondary"
      >
        Ajouter un nouveau article
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouveau produit</Modal.Title>
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
                name="title"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label className="input">Prix:</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                name="price"
                onChange={handleChange}
              ></Form.Control>DT
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label className="input">Description: </Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                name="description"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          {" "}
            {""}
            <Form.Group controlId="category">
              <Form.Label className="input">Choisir une Catégorie: </Form.Label>
              <select
              onChange={handleChange}
              name="category"
              id="category-select"
            >
              <option value="" className="input">--Choisir une categorie--</option>
              <option value="alimentation"className="input">Alimentation</option>
              <option value="Sommeil"className="input">Sommeil</option>
              <option value="Promenade"className="input">Promenade</option>
              <option value="Hygiène et Bain"className="input">Hygiène et Bain</option>
              <option value="Jeux et Jouets"className="input">Jeux et Jouets</option>
              <option value="Sécurité"className="input">Sécurité</option>
              <option value="Literie et Déco"className="input">Literie et Déco</option>
            </select>
            
            </Form.Group>
            <Form.Group controlId="countInstock">
              <Form.Label className="input">countInstock: </Form.Label>
              <Form.Control
                type="text"
                placeholder="countInstock"
                name="countInStock"
              onChange={handleChange}
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
           enregistrer{" "}
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
