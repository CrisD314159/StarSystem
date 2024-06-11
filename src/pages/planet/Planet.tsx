import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import planets from '../../planets.json';
import SolarSystem from "../../components/SolarSystem";
import NotFound from "../notFound/NotFound";
import './planet.css'
import { useState } from "react";

interface Planet {
  name: string,
  description: string,
  description_large: string,
  diameter_km: number,
  distance_from_sun_km: number,
  orbital_period_days: number,
  position: number,
  distance: number, 
  color: string, 
  image: string
}

function Planet() {
  const id = useParams().id
  const [sun] = useState((id === 'Sun'))
  const planet = planets.planets.find((planet: Planet) => planet.name === id)
  window.scrollTo(0, 0)


  if (!planet) return <div><NotFound/></div>
  return (
    <div>
      <Header/>
      <div className="planetContainer">
        <div className="image_container" style={{backgroundImage: `url(${planet?.image})`}}>
          <div className="imageFilter">
            <h1 className="planetName">{planet?.name}</h1>
          </div>
        </div>
        <div className="planetDescriptionContainer">
          <h1 className="descriptionTitle">Planet Description</h1>
          <p className="planetDescription">{planet?.description_large}</p>
        </div>
        {sun? 
        <></>
        :
        <div>
          <div className="planetOrbitContainer">
           <h1 className="orbitTitle">Planet Orbit Position</h1>
           <div className="orbitContainer">
             <SolarSystem position={planet?.position} width={550} height={550}/>
           </div>
         </div>
         <div className="planetOrbitContainerResponsive">
           <h1 className="orbitTitle">Planet Orbit Position</h1>
           <div className="orbitContainerResponsive">
             <SolarSystem position={planet?.position} width={230} height={230}/>
           </div>
         </div>

        </div>
        
         
         }
        <div className="additionalInfoContainer">
          <h1>Planet Additional Information</h1>
          <p className="additionalText">Distance from sun: {planet?.distance_from_sun_km} km</p>
          <p className="additionalText">Orbital period: {planet?.orbital_period_days} days</p>
          <p className="additionalText">Diameter: {planet?.diameter_km} km</p>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Planet;