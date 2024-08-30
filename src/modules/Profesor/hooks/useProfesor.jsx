import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useProfesor = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProfesor = {
        nombre,
        apellido,
        email,
        telefono,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
        await firebase.firestore().collection("profesores").add(nuevoProfesor);
        alert("Profesor registrado exitosamente");
        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
        setHabilitar("1");
        } catch (error) {
        console.error("Error al registrar al profesor: ", error);
    }
    try {
        await firebase.firestore().collection("profesores").update(nuevoProfesor);
        alert("Profesor actualizado exitosamente");
        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
        } catch (error) {
        console.error("Error al registrar al profesor: ", error);
    }
    try {
        await firebase.firestore().collection("profesores").update(nuevoProfesor).where(uuid)==//profesor result setHabilitar("0");
        alert("Profesor eliminado exitosamente");
        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
        } catch (error) {
        console.error("Error al registrar al profesor: ", error);
    }
    };
}