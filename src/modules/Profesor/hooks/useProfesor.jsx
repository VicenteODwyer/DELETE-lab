import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const useProfesor = () => {
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apelldnio, setApelldnio] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habilitar, setHabilitar] = useState(1);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProfesor = {
        dni,
        nombre,
        apelldnio,
        email,
        telefono,
        habilitar,
                created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
        await firebase.firestore().collection("profesores").doc(dni).set(nuevoProfesor);
            alert("Profesor registrado exitosamente");
            limpiarFormulario();
        } catch (error) {
            console.error("Error al registrar al profesor: ", error);
        }
        try {
            await firebase.firestore().collection("profesores").doc(dni).update(nuevoProfesor);
            alert("Profesor actualizado exitosamente");
            limpiarFormulario();
        } catch (error) {
            console.error("Error al actualizar al profesor: ", error);
        }
        try {
            await firebase.firestore().collection("profesores").doc(dni).update({
                habilitar: 0,
                updated_at: firebase.firestore.FieldValue.serverTimestamp()
            });
            setHabilitar(0);
            alert("Profesor deshabilitado exitosamente");
        } catch (error) {
            console.error("Error al deshabilitar al profesor: ", error);
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