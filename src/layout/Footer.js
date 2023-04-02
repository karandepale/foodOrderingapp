import React from 'react';
import {Box, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

//1 rem= 16 px
function Footer() {
  return (
    <React.Fragment>
       <Box sx={{textAlign:"center" , bgcolor:"#1A1A19" , color:"white" , p:3}} >
         <Box sx={{"& svg":{
            fontSize:"30px",
            cursor:"pointer",
            mr:2
         },
           "& svg:hover":{
            color:'goldenrod',
            transform:"translateX(5px)",
            transition:"all 400ms",

           }
        }} >
           <YouTubeIcon />
           <GitHubIcon />
           <TwitterIcon />
           <InstagramIcon />
         </Box>
         <Typography variant="h5" sx={{"@media (max-weidth:600px)" :{
            fontSize:"1rem"
         } }} >
             All Rights Reserved &copy; Depale's Food
         </Typography>
       </Box>
    </React.Fragment>
  )
}

export default Footer
