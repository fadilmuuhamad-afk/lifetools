import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import PopularTools from "@/components/home/PopularTools";
import Features from "@/components/home/Features";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <CategoryGrid />
            <PopularTools />
            <Features />
            <Footer />
        </>
    );
}