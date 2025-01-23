




import  React , {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Nav from './navbar';
import "./product.css"
import { v4 } from 'uuid';
import { Navigate, useNavigate } from 'react-router-dom';


 function Product() {

   const [state,setState] = useState( JSON.parse(localStorage.getItem("data"))||[])

   console.log(state);
   


   const navigate = useNavigate();
   


    const handleDelete = (i,ind) => {
    
      let d = state.filter((el)=>{
        return el.id !== i
      })
      setState(d)
      

  
     }

useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));

    

   if(state.length <1)
    {
      navigate("/form")
    }
   
}, [state,navigate]);

   console.log(state);
 


  return (
        <>
<Nav></Nav>

<div className='row'>
   
   {
    state.map((el,ind)=>{
     return <>
      <Card sx={{ maxWidth: 340 , marginTop:'30px' }}>
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <img src={el.img} alt="" />
          <p>{el.title}</p>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" id='btn2' type='button' value={el} onClick={()=>{handleDelete(el.id,ind)}}>Delete</Button>
        <Button size="small" id='btn3' type='button' >Edit</Button>
      </CardActions>
    </Card>
     </>
    })
   }

</div>
</>
  );
}



export default Product


