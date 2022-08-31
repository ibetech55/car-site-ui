import { SetMealTwoTone } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRoutes } from './routes/AuthRoutes';
import { OpenRoutes } from './routes/OpenRoutes';
import { RootState } from './store';
import { getAuth } from './store/authSlice';
import { theme } from './styles/theme';

function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state: RootState) => state.auth.loading)
  const auth = useSelector((state: RootState) => state.auth.auth)


  useEffect(() => {
    if (localStorage.getItem('test')) {
      const id = JSON.parse(localStorage.getItem('test')).id
      dispatch(getAuth(id))
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {loading &&
        <>
          <div style={{ background: process.env.REACT_APP_PRIMARY_COLOR, height: '100vh', width: '100%', opacity: 0.2, position: 'absolute', top: 0, left: 0, zIndex: 9000 }}>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'absolute', zIndex: 9500 }}>
            <div>
              <img src="./image.png" alt="" height={300} width={600} />
            </div>
          </div>
        </>

      }
      {auth ? <AuthRoutes /> : <OpenRoutes />}
    </ThemeProvider>
  );
}

export default App;
