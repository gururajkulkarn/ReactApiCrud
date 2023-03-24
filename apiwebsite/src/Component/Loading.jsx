import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading1() {
  return (
    <Box style={{marginTop:"300px",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <CircularProgress size={100}/>
    </Box>
  );
}