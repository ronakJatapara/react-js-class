




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
import { Link } from 'react-router-dom';


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
    <div className="col-3">
    <Card sx={{ marginTop:'30px' }}>
   
   <CardContent>
     <Typography id='main' className='d-flex flex-column justify-center align-items-center ' gutterBottom variant="h5" component="div">
     <div id="img1" className='' style={{backgroundImage:`url(${el.img})`,
     backgroundPosition:"center",
     backgroundRepeat:"no-repeat",
     backgroundSize:"cover",
     width: '200px', // Set your desired width
 height: '150px'
   }}>
    
     </div>
       <p className='pt-4'>{el.title}</p>
     </Typography>
     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       Lizards are a widespread group of squamate reptiles, with over 6,000
       species, ranging across all continents except Antarctica
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small" id='btn2' type='button' value={el} onClick={()=>{handleDelete(el.id,ind)}}>Delete</Button>
     <Link to={`/edit/${el.id}`}><Button size="small" id='btn3' type='button' >Edit</Button>
     </Link>
   </CardActions>
 </Card>
    </div>
     </>
    })
   }

</div>
</>
  );
}



export default Product


