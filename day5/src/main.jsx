import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Dog from './components/dog.jsx'


createRoot(document.getElementById('root')).render(
    <>
    <App />
    {/* <Dog /> */}
    </>
)
