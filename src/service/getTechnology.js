import axios from "axios";
// const URL_TECHNOLOGY = "https://flowery-political-restaurant.glitch.me/crew";

export const getTechnology = async () => {
    try {
      const { data } = await axios.get("https://flowery-political-restaurant.glitch.me/crew");
      return data;
     
    } catch (error) {
      console.log('Error al obtener los datos de Technology:', error);
      return [];
    }
};

// const [technology, setTechnology] = useState([]);

//   useEffect(() => {
//     const axiosData = async () => {
//       try {
//         const data = await getTechnology();
//         setTechnology(data);
//         console.log("informacion de la data: ", data);
//         console.log("informacion de la Technology: ", technology);
//       } catch (error) {
//         console.error('Error al obtener los datos de technology:', error);
//       }
//     };
//     axiosData();
//   }, []);