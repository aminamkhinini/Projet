import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom'
// redux
import {useDispatch, useSelector} from 'react-redux';


import { addImage, updateItem} from '../actions/ItemAction';

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
  
  export default function UpdateItemMOdal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [auth, setAuth] = React.useState(true);
    const dispatch=useDispatch();
    const[input, setInput] = useState();

    
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const handleChange = (e) => {
        setItem({...item,[e.target.name]:e.target.value})
      };


      const items= useSelector(state =>state.items.items)

      console.log(items)
      const {imagelink} = useSelector(state => state.image)
      const id = useSelector(state => state.id)
      const [item , setItem ] = useState(
    
        {
            title:'',
           price:'',
           description:'',
           images:imagelink,
           category:'',
           countInStock:''
       } 
      )
      const history = useHistory()
      const handleSubmit = async (e) => {
        e.preventDefault();
       dispatch(updateItem(id,item));
       history.push("/items")
    
        alert('Item updated successfully');
    }

    return (
        
            <div>
                <Button type="button" onClick={handleOpen} variant="contained" color="secondary" >
      Modifier un article
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
       id="baby" name="image"
       accept="image/png, image/jpeg" onChange={(e)=>dispatch(addImage(e.target.files[0]))}/>
 
    </form>
    <label className="input">Title:     </label>
      <input type='text'palceholder='title' name='title'onChange={handleChange}/>
      <label className="input">price:    DNT </label>
      <input type='text'palceholder='price' name='price'onChange={handleChange}/>
      <label className="input">description:     </label>
      <input type='text'palceholder='description' name='description'onChange={handleChange}/>
      <label for="pet-select">Choose a category</label>

<select onChange={handleChange} name="category" id="category-select">
    <option value="">--Please choose a category--</option>
    <option value="alimentation">Alimentation</option>
    <option value="Sommeil">Sommeil</option>
    <option value="Promenade">Promenade</option>
    <option value="Hygiène et Bain">Hygiène et Bain</option>
    <option value="Jeux et Jouets">Jeux et Jouets</option>
    <option value="Sécurité">Sécurité</option>
    <option value="Literie et Déco">Literie et Déco</option>
</select>
<input type='text'palceholder='countInStock' name='countInStock'onChange={handleChange}/>
      <label className="input"> countInStock:     </label>

      

      <Button type='submit'onClick={ handleSubmit} variant="contained" color="secondary">modifier un article </Button>{' '}
      
  
      <Button variant="contained" color="secondary" onClick={handleClose}> fermer </Button>
          
    </div>
   
   
    </Modal>
    </div>
    )
}