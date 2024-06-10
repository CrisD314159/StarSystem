import { useQuery } from "react-query";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './apod.css'
function Apod (){
  const {data, isLoading} = useQuery({
    queryKey: ['APOD'],
    queryFn: async()=>{
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=4NacYd5RJIRgZRe3zCSlzMGNcTV9fIOBsTsRoNPf')
      return response.json()
    }
  })
  if(isLoading){
    return <></>
  }
    return (
      <div className="apodMainContainer">
        <Header/>
        <div className="apodPicture" style={{backgroundImage:`url(${data.hdurl})`}}>
          <div className="apodPictureFilter">
            <h1 className="apdTitle">Astronomy Picture of the Day</h1>
            <p className="apodText">
              Welcome to the Astronomy Picture of the Day (APOD) page. Here you can see the most recent image of our universe, as well as browse through the archive of images.
            </p>
          </div>
        </div>
        <div className="infoContainer">
          <h1 className="date">Post date: {data.date}</h1>
          <h1 className="infoTitle">{data.title}</h1>
          <p className="explanation">{data.explanation}</p>
          <p className="copyright">Copyright: {data.copyright}</p>

          
        </div>
        
       
        <Footer/>
      </div>
    );
}

export default Apod;