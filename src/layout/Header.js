import React,{useState , useContext} from 'react';
import "./headerStyle.css";
import { AppBar , Popover, Avatar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NoMealsIcon from '@mui/icons-material/NoMeals';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom" ;
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [mobileOpen , setMobileOpen] = useState(false);
  const cartData = JSON.parse(localStorage.getItem('cartData'));
  
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);

  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen);
  }


  //mobile view drawer for small Device
  const drawer = (
    <Box 
      onClick={handleDrawerToggle}
      sx={{ textAlign:"center" }}
      >
        <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1 , my:2}} >
        <NoMealsIcon />
           
           
        </Typography>

        <Divider />

        <ul className='mobile-navigation' >
          <li>
              <Link to={'/Home'}> Home </Link>
          </li>
          <li>
              <Link to={'/Menu'}> Menu </Link>
          </li>
          <li>
              <Link to={'/About'}> About </Link>
          </li>
          <li>
              <Link to={'/Contact'}> Contact </Link>
          </li>
          <li>
          <Link to={'/CardDetail'}> <AddShoppingCartIcon />
             <span sx={{ mt:0 }} > {cartData.length>0 ? cartData.length : 0} </span>  
           </Link>
       </li>
        </ul>
    </Box>
  )

  return (
    <React.Fragment>


    <Popover
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
  >
  {
    userData?.length >0 &&
    userData.map( (item)=>{
      return(
        <>
        <Typography sx={{ p: 1 , width:"200px" , mt:"10px" }}>
             USERNAME:- {item.Name}
        </Typography> 
        <Typography sx={{ p: 1 , width:"300px"  }}>
             EMAIL :- {item.Email}
       </Typography> 
       <Box sx={{ p: 1.5 , width:"300px"  }}>
       <Link to="/">
          <button className='AddToCartButton'>
              Sign Out
          </button>
       </Link>
       </Box>
       

        </>
      );
    } )
  }
    </Popover>







         <Box>
            <AppBar component={"nav"} sx={{bgcolor:"black"}} >
               <Toolbar>
                 <IconButton
                    color="inherit"
                    aria-label='open drawer'
                    edge="start"
                    sx={{
                       mr:2,
                       display:{sm:"none"}, }} 
                       onClick={handleDrawerToggle}
                  >
                     <MenuIcon />
                 </IconButton>
                   <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1}} >
                        <NoMealsIcon />
                        <Link to="/Home" className='link'>
                           Depale's Food 
                        </Link>
                   </Typography>

                   <Divider />

                   <Box sx={{display:{xs:"none" , sm:"block"}}} >
                     <ul className='navigation-menu' >
                        <li>
                            <Link to={'/Home'}> Home </Link>
                        </li>
                        <li>
                            <Link to={'/Menu'}> Menu </Link>
                        </li>
                        <li>
                            <Link to={'/About'}> About </Link>
                        </li>
                        <li>
                           <Link to={'/Contact'}> Contact </Link>
                        </li>  
                        <li>
                           <Link to={'/CardDetail'}> <AddShoppingCartIcon />
                              <span sx={{ mt:0 }} > {cartData.length>0 ? cartData.length : 0} </span>  
                            </Link>
                        </li>


                        
                        <li  onClick={handleClick} >
                        <Link>
                              {userData.length > 0 &&
                                   userData.map( (item)=>{
                                    console.log("ITEM :- " , item)
                                    return(
                                      <Avatar sx={{ bgcolor: "white" , color:"black" }}>
                                      {item.Name.substring(0, 1).toUpperCase()}
                                      </Avatar>
                                    )
                                   } )
                                }
                        </Link>
                        </li>


                     </ul>
                   </Box>
               </Toolbar>
            </AppBar>

                <Box component="nav">
                   <Drawer 
                     variant="temporary" 
                     open={mobileOpen} 
                     onClose={handleDrawerToggle}
                     sx={{display:{xs:"block" , sm:"none"} , 
                     "& .MuiDrawerPaper":{
                      boxSizing:"border-box",
                      width:"220px"
                     },
                    }}
                   >
                      {drawer}
                   </Drawer>
                </Box>

                {/*  ADDITIONAL TOOLBAR FOR OPEN HIDING CONTENT  */}
                <Box  >
                  <Toolbar />
                </Box>

         </Box>

    </React.Fragment>
  )
}

export default Header;
