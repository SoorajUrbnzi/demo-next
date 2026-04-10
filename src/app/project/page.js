import Navbar from "../components/Navbar";
import ProjectHero from "../components/projectHero"; 
import ProPortfolio from "../components/ProPortfolio"; 
import ProjectScroll from "../components/ProjectScroll";
import ProjectTestimonial from "../components/ProjectTestimonial";
import ProjectFooter from "../components/ProjectFooter.js"


export default function Page() {
  return (
    <div>
      <Navbar />
      <ProjectHero />
      <ProPortfolio />
      <ProjectScroll />
      <ProjectTestimonial />
      <ProjectFooter />
      
    </div>
  );
}