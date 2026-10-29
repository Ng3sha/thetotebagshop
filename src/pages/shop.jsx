// import App from "../App";
import Filter from "../components/Filter";
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
        </>
    )
    
}

