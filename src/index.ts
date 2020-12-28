import db from "./firebase/config";

// Definicion de objetos o variables
const usuario = {
  nombre: "Mariela Vela",
  fechaNac: "08/06/1986",
  activo: false,
};

// Referencias a las collections
let collectUsuarios = db.collection("usuarios");

// Variables
const usuarioId = "yQPDmzXYLGGb16AkIUx8";

// Añadir un usuario
export const addUsuario = (user: object) => {
  collectUsuarios
    .add(user)
    .then((doc) => {
      console.log(`ID : ${doc.id}`);
    })
    .catch((err) => console.log("Error", err));
};

// Actualizar un usuario
export const updateUsuario = (id: string) => {
  // Se añade el objeto si no existe, si existe se actualiza
  collectUsuarios
    .doc(id)
    .update({ activo: false })
    .then((res) => console.log(res))
    .catch((err) => console.log("error", err));
  // Reemplaza la actualizacion por todo el objeto
  // collectUsuarios.doc("bFzI4vkQjAd15RNJjysp").set({ activo: false });
};

// Eliminar un usuario
export const deleteUsuario = (id: string) => {
  collectUsuarios
    .doc(id)
    .delete()
    .then((res) => console.log(res))
    .catch((err) => console.log("error", err));
};

// Obtener los datos de un usuario
export const getUsuario = (id: string) => {
  collectUsuarios
    .doc(id)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No se encontraron registros");
        return;
      }
      console.log(doc.data());
    })
    .catch((err) => {
      console.log("Error obteniendo el registro", err);
    });
};

// Obtener datos los usuarios
export const getUsuarios = () => {
  // Filtro a la collection
  // let query = collectUsuarios.where('activo', '==', true);
  // let query = collectUsuarios.where("salario", "<=", 2000);
  /* let query = collectUsuarios
    .where("activo", "==", true)
    .where("salario", ">=", 2000)
    .where("salario", "<=", 2800); */
  let query = collectUsuarios
    .where("activo", "==", true)
    .orderBy("salario", "desc")
    .orderBy("nombre", "asc");
  // let query = collectUsuarios.orderBy("nombre", "desc").limit(2);

  // Obtenemos los datos del query
  query
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        console.log("No se encontraron registros");
        return;
      }
      snapshot.forEach((doc) => {
        console.log({ id: doc.id, ...doc.data() });
        //console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log("Error obteniendo los registros", err);
    });
};

// addUsuario(usuario);
// updateUsuario(usuarioId);
// deleteUsuario(usuarioId);
// getUsuario(usuarioId);
getUsuarios();
