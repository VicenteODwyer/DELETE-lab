import React, { useState } from 'react';
import { actualizarProfesor } from '../services/profesorService';

function ProfesorUpdate() {
    const [dni, setDni] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {   
        e.preventDefault();
        try {
            await actualizarProfesor(dni, { nombre, apellido, email });
        alert('Profesor actualizado con éxito');
        setDni('');
        setNombre('');
        setApellido('');
        setEmail('');
    } catch (error) {
        alert('Error al actualizar el profesor: ' + error.message);
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={dni}
            onChange={(e) => setDni(e.target.value)}
            placeholder="DNI del profesor"
            required
        />
        <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nuevo nombre"
        />
        <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Nuevo apellido"
        />
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nuevo email"
        />
        <button type="submit">Actualizar Profesor</button>
    </form>
    );
}

export default ProfesorUpdate;
