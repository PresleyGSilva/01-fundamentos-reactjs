import { Header } from "./components/Header";
import {Post} from "./Post"
import './global.css';

export function App() {

  return (
  
  <div>
    <Header/>
  <Post 
   author="Presley" 
   content="lorem ipsum sit amet cosectetur adipisicing"
  />
  <Post 
   author="Lucas" 
   content="lorem ipsum sit amet cosectetur adipisicing  teste"
   />
  </div>
  )  
}

