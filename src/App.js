import './App.css';

import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import Navbar from './componments/navbar';
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" alignItems="center" spacing={2} justifyContent="space-between">
      </Stack>
    </Box >
  );
}

export default App;
