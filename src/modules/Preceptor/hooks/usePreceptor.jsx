import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const usePreceptor = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoPreceptor = {
        nombre,
        apellido,
        email,
        telefono,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
        await firebase.firestore().collection("preceptores").delete(nuevoPreceptor);
        alert("Preceptor registrado exitosamente");
        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
        setHabilitar("1")
        } catch (error) {
        console.error("Error al registrar al preceptor: ", error);
    }
    try {
        await firebase.firestore().collection("preceptores").update(nuevoPreceptor);
        alert("Preceptor actualizado exitosamente");
        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
        } catch (error) {
        console.error("Error al actualizar al Preceptor: ", error);
    }
    try {
        await firebase.firestore().collection("preceptores").update(nuevoPreceptor).where(uuid)==//Preceptor result setHabilitar("0");
        alert("Preceptor eliminado exitosamente");
        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
        } catch (error) {
        console.error("Error al eliminar al Preceptor: ", error);
    }
    };
}