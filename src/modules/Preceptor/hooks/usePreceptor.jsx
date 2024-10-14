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

    const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoPreceptor = {
        dni,
        nombre,
        apellido,
        email,
        telefono,
        habilitar,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
        await firebase.firestore().collection("preceptores").doc(dni).set(nuevoPreceptor);
        alert("Preceptor registrado exitosamente");
        limpiarFormulario();
        } catch (error) {
        console.error("Error al registrar al preceptor: ", error);
    }
    try {
        await firebase.firestore().collection("preceptores").doc(dni).update(nuevoPreceptor);
        alert("Preceptor actualizado exitosamente");
        limpiarFormulario();
        } catch (error) {
        console.error("Error al actualizar al Preceptor: ", error);
    }
    try {
        await firebase.firestore().collection("preceptores").doc(dni).update({
            habilitar: 0,
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
        });
        setHabilitar(0);
        alert("Preceptor eliminado exitosamente");
        } catch (error) {
        console.error("Error al eliminar al Preceptor: ", error);
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