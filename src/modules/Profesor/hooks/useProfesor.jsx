import { useState } from "react";
import { db } from "../../../firebase/firebase";
import { collection, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

const useProfesor = () => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habilitar, setHabilitar] = useState(1);

    const handleSubmit = async (e, operacion) => {
        e.preventDefault();
        
        const profesoresRef = collection(db, "profesores");
        const profesorRef = doc(profesoresRef, dni.toString());

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
                        created_at: serverTimestamp(),
                    };
                    await setDoc(profesorRef, nuevoProfesor);
                    alert("Profesor registrado exitosamente");
                    break;

                case 'actualizar':
                    const profesorActualizado = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        updated_at: serverTimestamp()
                    };
                    await updateDoc(profesorRef, profesorActualizado);
                    alert("Profesor actualizado exitosamente");
                    break;

                case 'eliminar':
                    await updateDoc(profesorRef, {
                        habilitar: 0,
                        updated_at: serverTimestamp()
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

export default useProfesor;