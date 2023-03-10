import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: 'auto', p: '0.2rem', bgcolor: '#909090' , zIndex:1201 }}>
      <Typography sx={{ textAlign: 'center', verticalAlign: 'middle', color: 'black' }}>
        @ <a style={{textDecoration: 'none', color: 'black'}} target="_blank" href="https://www.github.com/itsmohitnamdeo">Mohit Namdeo</a>
      </Typography>
    </Box>
  )
}


export default Footer