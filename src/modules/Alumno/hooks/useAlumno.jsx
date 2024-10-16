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

    const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoAlumno = {
        dni,
        nombre,
        apellido,
        email,
        telefono,
        habilitar,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
        await firebase.firestore().collection("alumnos").doc(dni).set(nuevoAlumno);
        alert("Alumno registrado exitosamente");
        limpiarFormulario();
        } catch (error) {
        console.error("Error al registrar al alumno: ", error);
    }
    try {
        await firebase.firestore().collection("alumnos").doc(dni).update(nuevoProfesor);
        alert("Alumno actualizado exitosamente");
        limpiarFormulario();
        } catch (error) {
        console.error("Error al actualizar al Alumno: ", error);
    }
    try {
        await firebase.firestore().collection("alumnos").doc(dni).update({
            habilitar: 0,
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
        });
        setHabilitar(0);
        alert("Alumno eliminado exitosamente");
        } catch (error) {
        console.error("Error al eliminar al Alumno: ", error);
    }
    };

    const limpiarFormulario = () => {
        setDni("");
        setNombre("");
        setApelldnio("");
        setEmail("");
        setTelefono("");
        setHabilitar(1);
    };
}