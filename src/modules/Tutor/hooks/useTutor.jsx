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

    const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoTutor = {
        dni,
        nombre,
        apellido,
        email,
        telefono,
        habilitar,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
        await firebase.firestore().collection("Tutores").doc(dni).set(nuevoTutor);
        alert("Tutor registrado exitosamente");
        limpiarFormulario();
        } catch (error) {
        console.error("Error al registrar al Tutor: ", error);
    }
    try {
        await firebase.firestore().collection("tutores").doc(dni).update(nuevoTutor);
        alert("Tutor actualizado exitosamente");
        limpiarFormulario();
        } catch (error) {
        console.error("Error al actualizar al Tutor: ", error);
    }
    try {
        await firebase.firestore().collection("tutores").doc(dni).update({
            habilitar: 0,
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
        });
        setHabilitar(0);
        alert("Tutor deshabilitado exitosamente");
        } catch (error) {
        console.error("Error al eliminar al Tutor: ", error);
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