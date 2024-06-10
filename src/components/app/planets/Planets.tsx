import { NavLink } from "react-router-dom";
import './planets.css'
import planets from '../../../planets.json'
import { useQuery } from "react-query";

interface Planet {
    name: string,
    description: string,
    image: string

}

function Planets() {
    const planetList = planets.planets

    const {data, isLoading} = useQuery({
        queryKey: 'planets',
        queryFn: async () => {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=4NacYd5RJIRgZRe3zCSlzMGNcTV9fIOBsTsRoNPf')
            return response.json()
        }
    })

    if(isLoading){
        return <></>
    }


    return (
        <div>

                <div className="planetImage" style={{backgroundImage: `url(${data.hdurl})`}}>
                    <div className="imageFilter">
                        <div className="descriptionContainer">
                            <h1 className="planetTittle">{data.title}</h1>
                            <p className="planetDescription">Astronomy Picture of the day</p>
                            <NavLink to={`/universe/apod`} className="planetLink">Learn more {'>'}</NavLink>
                        </div>
                    </div>
                
                </div>
            {planetList.map((planet:Planet)=>{
                return (
                <div key={planet.name} className="planetImage" style={{backgroundImage: `url(${planet.image})`}}>
                    <div className="imageFilter">
                        <div className="descriptionContainer">
                            <h1 className="planetTittle">{planet.name}</h1>
                            <p className="planetDescription">{planet.description}</p>
                            <NavLink to={`/planet/${planet.name}`} className="planetLink">Learn more {'>'}</NavLink>
                        </div>
                    </div>
                
                </div>

                )
            })}
        </div>
        
    );
  
}

export default Planets;