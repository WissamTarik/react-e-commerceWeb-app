import { Provider } from 'react-redux'
import './App.css'
import { store } from './libraries/redux/store'
import AppRouter from './AppRouter/AppRouter'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';


function App() {

  return (
    <>
      <Provider store={store}>
      <HelmetProvider>
      <AppRouter/>
      <Toaster />
        
      </HelmetProvider>
       
      </Provider>
    </>
  )
}

export default App
