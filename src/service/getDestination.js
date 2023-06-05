import axios from "axios";
// const URL_DESTINATION = "https://flowery-political-restaurant.glitch.me/destinations";

export const getDestination = async () => {
    try {
      const { data } = await axios.get("https://flowery-political-restaurant.glitch.me/destinations");
      return data;
     
    } catch (error) {
      console.log('Error al obtener los datos de Destination:', error);
      return [];
    }
};
