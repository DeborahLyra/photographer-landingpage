import { AboutMe } from "../components/AboutMe";
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Galery } from "../components/Galery";
import { Navbar } from "../components/Navbar";
import { ArtisticManifesto } from "../components/VisualManifesto";


export function HomePage() {
    return (

        <>
            <Navbar />
            <Banner />
            <AboutMe />
            <ArtisticManifesto />
            <Galery />
            <Contact/>
            <Footer/>
        </>

    )
}
