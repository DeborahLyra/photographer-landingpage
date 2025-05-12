import { useEffect } from "react";
import { AboutMe } from "../components/AboutMe";
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Navbar } from "../components/Navbar";
import { ArtisticManifesto } from "../components/VisualManifesto";
import { useLocation } from "react-router-dom";


export function HomePage() {

    const location = useLocation();

    useEffect(() => {
        const scrollTo = location.state?.scrollTo;
        if (scrollTo) {
            setTimeout(() => {
                const el = document.getElementById(scrollTo);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);
    return (

        <>
            <Navbar />
            <Banner />
            <AboutMe />
            <ArtisticManifesto />
            <Gallery />
            <Contact />
            <Footer />
        </>

    )
}
