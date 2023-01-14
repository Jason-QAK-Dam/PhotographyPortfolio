import './App.css';
import Landing from './pages/Landing';
import Event from './pages/Event';
import Portrait from './pages/Portrait';
import Travel from './pages/Travel';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="event">
          <Route index element={ <Event/> }/>
          <Route path=":id" element={ <Event/> }/>
        </Route>
        <Route path="portrait" element={ <Portrait/> } />
        <Route path="travel" element={ <Travel/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="*" element={ <NotFound/>}/>
      </Routes>
    </div>
  )
}