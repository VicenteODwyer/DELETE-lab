import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const usePreceptor = () => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habilitar, setHabilitar] = useState(1);

    const handleSubmit = async (e, operacion) => {
        e.preventDefault();
        
        const db = firebase.firestore();
        const preceptorRef = db.collection("preceptores").doc(dni);

        try {
            switch (operacion) {
                case 'crear':
                    const nuevoPreceptor = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        habilitar,
                        created_at: firebase.firestore.FieldValue.serverTimestamp(),
                    };
                    await preceptorRef.set(nuevoPreceptor);
                    alert("Preceptor registrado exitosamente");
                    break;

                case 'actualizar':
                    const preceptorActualizado = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        updated_at: firebase.firestore.FieldValue.serverTimestamp()
                    };
                    await preceptorRef.update(preceptorActualizado);
                    alert("Preceptor actualizado exitosamente");
                    break;

                case 'eliminar':
                    await preceptorRef.update({
                        habilitar: 0,
                        updated_at: firebase.firestore.FieldValue.serverTimestamp()
                    });
                    setHabilitar(0);
                    alert("Preceptor eliminado exitosamente");
                    break;

                default:
                    throw new Error("Operación no válida");
            }
            
            if (operacion !== 'eliminar') {
                limpiarFormulario();
            }
        } catch (error) {
            console.error(`Error al ${operacion} al preceptor:`, error);
            alert(`Error al ${operacion} al preceptor`);
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

export default usePreceptor;