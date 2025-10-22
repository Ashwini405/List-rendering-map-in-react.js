import Navbar from "./components/navbar"
import './App.css'; 
import Banner from "./components/banner_cards"
import Category from "./components/category_section"
import New_arrival from "./components/new_arrivals"
import Trends from "./components/treding_products"
import Footer from "./components/footer"
function App(){
  return <div>
    <Navbar/>
    <Banner/>
    <Category/>
    <New_arrival/>
    <Trends/>
     <Footer/>
    
  </div>
}
export default App