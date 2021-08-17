import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'

import { saveShippingAddress } from '../actions/cartAction'

import CheckoutSteps from '../components/CheckoutSteps'


const Shipping = ({ history }) => {

    // Get shipping address from global state
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const [name, setName] = useState(shippingAddress.name)
    const [email, setEmail] = useState(shippingAddress.email)
    const dispatch = useDispatch()
    
   

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        // Move to the payments page
        history.push("/payment")
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 className="step"/>
            <h1>Expédition</h1>
            <Form onSubmit={submitHandler}>
               
                <Form.Group controlId='address'>
                    <Form.Label>Addresse</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Addresse'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>Cité</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Cité'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='postalCode'>
                    <Form.Label> Code Postal</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Code Postal'
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>Pays</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Pays'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                   continuer
                </Button>
            </Form>
        </FormContainer>
    )
}

export default Shipping