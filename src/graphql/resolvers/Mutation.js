import Usuario from "../../models/Usuario.js";


const Mutation = {
  createUser: async (_, { nombre, apellido,personalID, correo, rol, estado }) => {
    const newUser = new Usuario({ nombre, apellido,personalID, correo, rol, estado  });
    return await newUser.save();
  },

  deleteUser: async (_,{personalID}) => {
    return await Usuario.findOneAndRemove({personalID:{$eq:personalID}});
  },


  actualizarUser: async (_,{nombre,apellido,personalID,correo,rol,estado}) => {
    return await Usuario.findOneAndUpdate(
      {personalID}, 
      {nombre: nombre,
       apellido: apellido,
      correo:correo,
      personalID:personalID,
      rol:rol,
      estado:estado
    }
      );
  }

};

export default Mutation;

