import Sidebar from "../components/Sidebar"
import Contents from "../components/Contents"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="home flex">
        <Sidebar />
        <Contents />
        <Navbar />
    </div>
  )
}

export default Home