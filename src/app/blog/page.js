import Navbar from "../components/Navbar";
import BlogHero from "../components/BlogHero";
import BlogCard from "../components/BlogPage";
import BlogAward from "../components/BlogAward";
import BlogFooter from "../components/BlogFooter";
export default function Page() {
  return (
    <div>
        <Navbar />
        <BlogHero />
        <BlogCard />
        <BlogAward />
        <BlogFooter />
    </div>
  );
}