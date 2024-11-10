import { useState } from "react";
import { db } from "../../../firebase/firebase";
import { collection, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

const useAlumno = () => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habilitar, setHabilitar] = useState(1);

    const handleSubmit = async (e, operacion) => {
        e.preventDefault();
        
        const alumnosRef = collection(db, "alumnos");
        const alumnoRef = doc(alumnosRef, dni);

        try {
            switch (operacion) {
                case 'crear':
                    const nuevoAlumno = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        habilitar,
                        created_at: serverTimestamp(),
                    };
                    await setDoc(alumnoRef, nuevoAlumno);
                    alert("Alumno registrado exitosamente");
                    break;

                case 'actualizar':
                    const alumnoActualizado = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        updated_at: serverTimestamp()
                    };
                    await updateDoc(alumnoRef, alumnoActualizado);
                    alert("Alumno actualizado exitosamente");
                    break;

                case 'eliminar':
                    await updateDoc(alumnoRef, {
                        habilitar: 0,
                        updated_at: serverTimestamp()
                    });
                    setHabilitar(0);
                    alert("Alumno eliminado exitosamente");
                    break;

                default:
                    throw new Error("Operación no válida");
            }
            
            if (operacion !== 'eliminar') {
                limpiarFormulario();
            }
        } catch (error) {
            console.error(`Error al ${operacion} al alumno:`, error);
            alert(`Error al ${operacion} al alumno`);
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

export default useAlumno;