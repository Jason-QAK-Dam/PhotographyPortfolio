import './App.css';
import Landing from './pages/Landing';
import ImageDisplay from './pages/ImageDisplay';
import Contact from './pages/Contact';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom"
import TopicSelect from './pages/TopicSelect';


export default function App() {
  return (
    <div>
      <header>
        <Routes>
          <Route path="/*" element={<Header/>} />
        </Routes>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          {["event", "travel", "portrait"].map((link) => {
            return (
              <Route path={link} key={link}>
                <Route index element={<TopicSelect path={link}/>}/>
                <Route path=":id" element={<ImageDisplay/>}/>
              </Route>
            )
          })}
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </div>
  )
}