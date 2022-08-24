import { ThemeProvider } from '@mui/material'
import { AuthRoutes } from './routes/AuthRoutes';
import { OpenRoutes } from './routes/OpenRoutes';
import { theme } from './styles/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      {localStorage.getItem('test') ? <AuthRoutes /> : <OpenRoutes />}
    </ThemeProvider>
  );
}

export default App;
