import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useProfesor = () => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habilitar, setHabilitar] = useState(1);

    const handleSubmit = async (e, operacion) => {
        e.preventDefault();
        
        const db = firebase.firestore();
        const profesorRef = db.collection("profesores").doc(dni);

        try {
            switch (operacion) {
                case 'crear':
                    const nuevoProfesor = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        habilitar,
                        created_at: firebase.firestore.FieldValue.serverTimestamp(),
                    };
                    await profesorRef.set(nuevoProfesor);
                    alert("Profesor registrado exitosamente");
                    break;

                case 'actualizar':
                    const profesorActualizado = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        updated_at: firebase.firestore.FieldValue.serverTimestamp()
                    };
                    await profesorRef.update(profesorActualizado);
                    alert("Profesor actualizado exitosamente");
                    break;

                case 'eliminar':
                    await profesorRef.update({
                        habilitar: 0,
                        updated_at: firebase.firestore.FieldValue.serverTimestamp()
                    });
                    setHabilitar(0);
                    alert("Profesor eliminado exitosamente");
                    break;

                default:
                    throw new Error("Operación no válida");
            }
            
            if (operacion !== 'eliminar') {
                limpiarFormulario();
            }
        } catch (error) {
            console.error(`Error al ${operacion} al profesor:`, error);
            alert(`Error al ${operacion} al profesor`);
        }
    };

    const limpiarFormulario = () => {
        setDni("");
        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
        setHabilitar(1);
    };
}

export default useProfesor;