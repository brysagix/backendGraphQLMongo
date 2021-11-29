import Usuario from "../../models/Usuario.js";

const Query = {
//Cada una es una consulta hola y productos
  saludame() {
    return "Hola bitch";
  },
  despedite() {
    return "Chao bitch";
  },
  usuarios: async () => {
    return await Usuario.find();
  },

};

export default Query;
