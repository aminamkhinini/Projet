import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,Button} from '@material-ui/core';

import { addProduct } from '../actions/ProductAction'
// redux
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddProductMOdal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Admin  input

  const dispatch=useDispatch();
  const[input, setInput] = useState();
  const[file,setFile]=useState();

  const [newProduct , setNewProduct ] = useState(

    {product_id:'',
        title:'',
        price:'',
        description:'',
        images:'',
        category:'',
        countInStock:''
    } 
  )
 
 
 
      
  const handleChange = (e) => {
    setInput({...input,[e.target.name]:e.target.value})
  };
const  SelectImageToUpload =(e) =>{
    setFile(e.target.files[0]);
    let formData= new FormData()
    formData.append("baby",file)
    axios.post("/img",formData)
    .then (res=>console.log(res.data))
}

  const handleSubmit  =(e) => {
    e.preventDefault();
 dispatch(addProduct (newProduct,file)) 
    alert('Product added successfully');
   };
  

  return (
    <div>
      <Button type="button" onClick={handleOpen} variant="contained" color="secondary" >
        Add New Product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
       
      <form>
    
      <label for="avatar">Choose image:</label>

      <input type="file"
       id="baby" name="baby"
       accept="image/png, image/jpeg" onChange={SelectImageToUpload}/>
 
    </form>
    <label className="input">Title:     </label>
      <input type='text'palceholder='title' name='title'onChange={handleChange}/>
      <label className="input">price:    DNT </label>
      <input type='text'palceholder='price' name='price'onChange={handleChange}/>
      <label className="input">description:     </label>
      <input type='text'palceholder='description' name='description'onChange={handleChange}/>
      <label for="pet-select">Choose a category</label>

<select name="category" id="category-select">
    <option value="">--Please choose a category--</option>
    <option value="alimentation">Alimentation</option>
    <option value="Sommeil">Sommeil</option>
    <option value="Promenade">Promenade</option>
    <option value="Hygiène et Bain">Hygiène et Bain</option>
    <option value="Jeux et Jouets">Jeux et Jouets</option>
    <option value="Sécurité">Sécurité</option>
    <option value="Idées Cadeaux">Idées Cadeaux</option>
</select>
<input type='text'palceholder=' countInStock' name=' countInStock'onChange={handleChange}/>
      <label className="input"> countInStock:     </label>

      

      <Button type='submit'onClick={handleSubmit} variant="contained" color="secondary">Add New Product </Button>
    </div>
   
    </Modal>
    </div>
  );
}