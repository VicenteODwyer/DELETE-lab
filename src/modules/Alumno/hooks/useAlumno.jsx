import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useAlumno = () => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habilitar, setHabilitar] = useState(1);

    const handleSubmit = async (e, operacion) => {
        e.preventDefault();
        
        const db = firebase.firestore();
        const alumnoRef = db.collection("alumnos").doc(dni);

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
                        created_at: firebase.firestore.FieldValue.serverTimestamp(),
                    };
                    await alumnoRef.set(nuevoAlumno);
                    alert("Alumno registrado exitosamente");
                    break;

                case 'actualizar':
                    const alumnoActualizado = {
                        dni,
                        nombre,
                        apellido,
                        email,
                        telefono,
                        updated_at: firebase.firestore.FieldValue.serverTimestamp()
                    };
                    await alumnoRef.update(alumnoActualizado);
                    alert("Alumno actualizado exitosamente");
                    break;

                case 'eliminar':
                    await alumnoRef.update({
                        habilitar: 0,
                        updated_at: firebase.firestore.FieldValue.serverTimestamp()
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
}

export default useAlumno;