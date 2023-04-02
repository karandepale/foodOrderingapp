import { Typography ,Table, Box, TableContainer, paperClasses, TableHead, TableRow, TableBody, Paper } from '@mui/material';
import React from 'react';
import Layout from '../layout/Layout';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import MessageIcon from '@mui/icons-material/Message';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Contact = () => {
  return (
    <Layout>
       <Box sx={{
        my:5 , 
        ml:10,
        "& h4":{
           fontWeight:"bold",
           mb:2
           }
       }} >
          <Typography variant='h4'>
             Contact Depale's Food Restaurant
          </Typography>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Lacus viverra vitae congue eu. Viverra orci sagittis eu volutpat odio facilisis. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Tincidunt id aliquet risus feugiat. Morbi tristique senectus et netus et malesuada fames ac turpis. At in tellus integer feugiat scelerisque varius morbi enim. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Morbi tristi
          </p>
       </Box>

       <Box sx={{ml:10 , width:"900px" }} >
         <TableContainer component={Paper} >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              
                <TableHead>
                   <TableRow>
                     <TableCell variant='h4' sx={{ bgcolor:"black" , color:"white" }} > Contact Details </TableCell>
                   </TableRow>
               </TableHead>
               <TableBody>
                    <StyledTableRow>
                         <StyledTableCell sx={{ color:"black" }}  >
                         <AttachEmailIcon sx={{color:"red" , pt:1}} />DepaleFoodHelp@.com
                         </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow>     
                         <StyledTableCell  >
                         <AddIcCallIcon sx={{color:"skyblue" , pt:1}} />9142247505
                         </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow>     
                          <StyledTableCell  >
                          <MessageIcon sx={{color:"skyblue" , pt:1}} />InBox
                          </StyledTableCell>
                    </StyledTableRow>
               </TableBody>
           
               </Table>
         </TableContainer>
       </Box>



    </Layout>
  )
}

export default Contact ;
