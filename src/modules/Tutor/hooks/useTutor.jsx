import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useTutor = () => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habilitar, setHabilitar] = useState(1);

    const handleSubmit = async (e, operacion) => {
        e.preventDefault();
        
        const db = firebase.firestore();
        const tutorRef = db.collection("tutores").doc(dni);

        try {
            switch (operacion) {
                case 'crear':
                    const nuevoTutor = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        habilitar,
                        created_at: firebase.firestore.FieldValue.serverTimestamp(),
                    };
                    await tutorRef.set(nuevoTutor);
                    alert("Tutor registrado exitosamente");
                    break;

                case 'actualizar':
                    const tutorActualizado = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        updated_at: firebase.firestore.FieldValue.serverTimestamp()
                    };
                    await tutorRef.update(tutorActualizado);
                    alert("Tutor actualizado exitosamente");
                    break;

                case 'eliminar':
                    await tutorRef.update({
                        habilitar: 0,
                        updated_at: firebase.firestore.FieldValue.serverTimestamp()
                    });
                    setHabilitar(0);
                    alert("Tutor eliminado exitosamente");
                    break;

                default:
                    throw new Error("Operación no válida");
            }
            
            if (operacion !== 'eliminar') {
                limpiarFormulario();
            }
        } catch (error) {
            console.error(`Error al ${operacion} al tutor:`, error);
            alert(`Error al ${operacion} al tutor`);
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

export default useTutor;