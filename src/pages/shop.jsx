// import App from "../App";
import AvailableStock from "../components/AvailableStock";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Herosearch from "../components/HeroSearch";
import Nav from "../components/Nav";

export default function Shop() {
    return (
        <>
        <header className="w-full min-h-screen">
            <div className="flex flex-col gap-8">
                <Nav />
                <Herosearch />
                <Filter />
                <Hero />
            </div>
        </header>
        <main className="flex flex-col gap-16 mt-16 max-w-329.5 mx-auto">
            <AvailableStock />
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )
    
}

