
import { createRoot } from 'react-dom/client'
import { store } from './store/store.ts'
import {Provider} from 'react-redux'
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(
<Provider store={store}>
<App />
</Provider>
   
  
)


