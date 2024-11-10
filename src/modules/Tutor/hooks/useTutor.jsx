import { useState } from "react";
import { db } from "../../../firebase/firebase";
import { collection, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

const useTutor = () => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habilitar, setHabilitar] = useState(1);

    const handleSubmit = async (e, operacion) => {
        e.preventDefault();
        
        const tutoresRef = collection(db, "tutores");
        const tutorRef = doc(tutoresRef, dni.toString());

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
                        created_at: serverTimestamp(),
                    };
                    await setDoc(tutorRef, nuevoTutor);
                    alert("Tutor registrado exitosamente");
                    break;

                case 'actualizar':
                    const tutorActualizado = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        updated_at: serverTimestamp()
                    };
                    await updateDoc(tutorRef, tutorActualizado);
                    alert("Tutor actualizado exitosamente");
                    break;

                case 'eliminar':
                    await updateDoc(tutorRef, {
                        habilitar: 0,
                        updated_at: serverTimestamp()
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

export default useTutor;