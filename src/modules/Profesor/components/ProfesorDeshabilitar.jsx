import React, { useState } from "react";
import useProfesor from "../hooks/useProfesor";

const ProfesorDeshabilitar = () => {
    const [dni, setDni] = useState("");
    const { deshabilitarProfesor } = useProfesor();

    const handleSubmit = (e) => {
        e.preventDefault();
        deshabilitarProfesor(dni);
        setDni("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>DNI del profesor a deshabilitar:</label>
                <input
                    type="text"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Deshabilitar Profesor</button>
        </form>
    );
};

export default ProfesorDeshabilitar;
