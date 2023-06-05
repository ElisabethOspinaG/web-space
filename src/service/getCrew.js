import axios from "axios";
// const URL_CREW = "https://flowery-political-restaurant.glitch.me/crew";

export const getCrew = async () => {
    try {
      const { data } = await axios.get("https://flowery-political-restaurant.glitch.me/crew");
      return data;
     
    } catch (error) {
      console.log('Error al obtener los datos de Crew:', error);
      return [];
    }
};

// const [crew, setCrew] = useState([]);

//   useEffect(() => {
//     const axiosData = async () => {
//       try {
//         const data = await getCrew();
//         setCrew(data);
//         console.log("informacion de la data: ", data);
//         console.log("informacion de la crew: ", crew);
//       } catch (error) {
//         console.error('Error al obtener los datos de Crew:', error);
//       }
//     };
//     axiosData();
//   }, []);