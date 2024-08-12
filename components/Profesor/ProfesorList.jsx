import React, { useState } from "react";

const ProfesorList = ({ Profesores, onEdit, onDelete }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editProfesor, setEditProfesor] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
    });

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditProfesor({ ...editProfesor, [name]: value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEdit(editIndex, editProfesor);
        setEditIndex(null);
    };

    return (
        <ul>
            {Profesores.map((Profesor, index) => (
            <li key={index}>
                {editIndex === index ? (
                    <form onSubmit={handleEditSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        value={editProfesor.nombre}
                        onChange={handleEditChange}
                        required
                    />
                    <input
                        type="text"
                        name="apellido"
                        value={editProfesor.apellido}
                        onChange={handleEditChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={editProfesor.email}
                        onChange={handleEditChange}
                        required
                    />
                    <input
                        type="text"
                        name="telefono"
                        value={editProfesor.telefono}
                        onChange={handleEditChange}
                        required
                    />
                    <button type="submit">Guardar</button>
                    <button type="button" onClick={() => setEditIndex(null)}>
                        Cancelar
                    </button>
                </form>
                ) : (
                    <div>
                        {Profesor.nombre} {Profesor.apellido} - {Profesor.email} -{" "}
                        {Profesor.telefono}
                        <button
                            onClick={() => {
                                setEditIndex(index);
                                setEditProfesor(Profesor);
                            }}
                        >
                            Editar
                        </button>
                        <button onClick={() => onDelete(index)}>Eliminar</button>
                    </div>
                )}
            </li>
            ))}
        </ul>
    );
};

export default ProfesorList;