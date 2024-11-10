import { useState } from "react";
import { db } from "../../../firebase/firebase";
import { collection, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

const usePreceptor = () => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habilitar, setHabilitar] = useState(1);

    const handleSubmit = async (e, operacion) => {
        e.preventDefault();
        
        const preceptoresRef = collection(db, "preceptores");
        const preceptorRef = doc(preceptoresRef, dni.toString());

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
                        created_at: serverTimestamp(),
                    };
                    await setDoc(preceptorRef, nuevoPreceptor);
                    alert("Preceptor registrado exitosamente");
                    break;

                case 'actualizar':
                    const preceptorActualizado = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        updated_at: serverTimestamp()
                    };
                    await updateDoc(preceptorRef, preceptorActualizado);
                    alert("Preceptor actualizado exitosamente");
                    break;

                case 'eliminar':
                    await updateDoc(preceptorRef, {
                        habilitar: 0,
                        updated_at: serverTimestamp()
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

    return {
        dni,
        setDni,
        nombre,
        setNombre,
        apellido,
        setApellido,
        email,
        setEmail,
        telefono,
        setTelefono,
        habilitar,
        setHabilitar,
        handleSubmit,
        limpiarFormulario
    };
};

export default usePreceptor;