import React, { useState } from "react";

const TutorAdd = ({ onAdd }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoTutor = { nombre, apellido, email, telefono };
        onAdd(nuevoTutor);
        setNombre("");
        setApellido("");
        setEmail("");
        setTelefono("");
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre:</label>
            <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Apellido:</label>
            <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Email:</label>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Teléfono:</label>
            <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            />
        </div>
        <button type="submit">Agregar Tutor</button>
        </form>
    );
};

export default TutorAdd;