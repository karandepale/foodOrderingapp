import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React , {useState, useEffect} from 'react';
import { MenuList } from '../data/Data';
import Header from '../layout/Header';
import Layout from '../layout/Layout' ;
import CardDetail from './CardDetail';

export const CartContext = React.createContext([]);

const Menu = () => {
  const [ arr , setArr ] = useState([]);
  const [ count , setCount ] = useState(0);

  useEffect(() => {
    // Load cart data from local storage
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    if (cartData) {
      setArr(cartData);
      setCount(cartData.length);
    }
  }, []);

  const handleAddToCartBtn = (item) => {
    setCount(count + 1);
    arr.push(item);
    setArr([...arr]);

    // Store cart data in local storage
    localStorage.setItem('cartData', JSON.stringify(arr));
  };

  return (
    <CartContext.Provider value={arr}>
      <React.Fragment>
        <Layout>
          <Box sx={{display:"flex" , flexWrap:"wrap" , justifyContent:"center" }} >
            { MenuList?.length > 0 &&
              MenuList.map( (item)=>{
                return(
                  <Card sx={{maxWidth:"390px",maxHeight:"600px" , display:"flex" , m:2 ,  border:"1px solid black" }} key={item.id}>
                    <CardActionArea>
                      <CardMedia 
                        sx={{minHeight:"400px"}} 
                        component={"img"} 
                        src={item?.image} 
                        alt={item?.name} 
                      />
                      <CardContent  sx={{display:"flex", mb:1 , justifyContent:"center" ,flexDirection:"column" , alignItems:"center" }} >
                        <Typography variant="h5" gutterBottom component={"div"} >
                          {item?.name}
                        </Typography>
                        <Typography variant="body2" >
                          {item?.description}
                        </Typography>
                        <Typography variant="body2" >
                        RS :-{item?.price}
                        </Typography>
                        <button 
                          className="AddToCartButton"
                          id={item?.id}
                          item={item}
                          onClick={ () => handleAddToCartBtn(item) }
                        >
                          Add To Cart
                        </button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              } ) 
            }
          </Box>
        </Layout> 
        {/* <CardDetail items={arr} count={count} /> */}
        {/* <Header items={arr} count={count} /> */}
      </React.Fragment>
    </CartContext.Provider>
  )
}

export default Menu;
