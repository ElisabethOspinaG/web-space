import axios from "axios";
// const URL_TECHNOLOGY = "https://flowery-political-restaurant.glitch.me/crew";

export const getTechnology = async () => {
    try {
      const { data } = await axios.get("https://flowery-political-restaurant.glitch.me/technology");
      return data;
     
    } catch (error) {
      console.log('Error al obtener los datos de Technology:', error);
      return [];
    }
};
