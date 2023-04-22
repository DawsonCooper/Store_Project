import './App.css';
import HomeGrid from './Home/grid'
import Navbar from './Navbar/navbar'
import FilterBar from './FIlterBar/filterBar';
function App() {

  return (
    <>
      <Navbar />
      <FilterBar />
      <HomeGrid />
    </>
  )
}

export default App;
