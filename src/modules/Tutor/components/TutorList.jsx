import React, { useState } from "react";

const TutorList = ({ tutores, onEdit, onDelete }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editTutor, setEditTutor] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
    });

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditTutor({ ...editTutor, [name]: value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEdit(editIndex, editTutor);
        setEditIndex(null);
    };

    return (
        <ul>
            {tutores.map((tutor, index) => (
            <li key={index}>
                {editIndex === index ? (
                    <form onSubmit={handleEditSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        value={editTutor.nombre}
                        onChange={handleEditChange}
                        required
                    />
                    <input
                        type="text"
                        name="apellido"
                        value={editTutor.apellido}
                        onChange={handleEditChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={editTutor.email}
                        onChange={handleEditChange}
                        required
                    />
                    <input
                        type="text"
                        name="telefono"
                        value={editTutor.telefono}
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
                        {tutor.nombre} {tutor.apellido} - {tutor.email} -{" "}
                        {tutor.telefono}
                        <button
                            onClick={() => {
                                setEditIndex(index);
                                setEditTutor(tutor);
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

export default TutorList;