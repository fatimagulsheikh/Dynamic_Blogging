import AutherCard from "@/components/AutherCard"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SingleBlog from "@/components/SingleBlog"


const page = () => {
  return (
    <div>
    <Navbar/>
    <AutherCard/>
    <Banner/>
    <SingleBlog/>
    <Footer/>
    </div>
  )
}

export default page