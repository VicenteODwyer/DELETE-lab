import React, { useState } from "react";

const PreceptorList = ({ Preceptores, onEdit, onDelete }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editPreceptor, setEditPreceptor] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
    });

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditPreceptor({ ...editPreceptor, [name]: value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEdit(editIndex, editPreceptor);
        setEditIndex(null);
    };

    return (
        <ul>
            {Preceptores.map((Preceptor, index) => (
            <li key={index}>
                {editIndex === index ? (
                    <form onSubmit={handleEditSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        value={editPreceptor.nombre}
                        onChange={handleEditChange}
                        required
                    />
                    <input
                        type="text"
                        name="apellido"
                        value={editPreceptor.apellido}
                        onChange={handleEditChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={editPreceptor.email}
                        onChange={handleEditChange}
                        required
                    />
                    <input
                        type="text"
                        name="telefono"
                        value={editPreceptor.telefono}
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
                        {Preceptor.nombre} {Preceptor.apellido} - {Preceptor.email} -{" "}
                        {Preceptor.telefono}
                        <button
                            onClick={() => {
                                setEditIndex(index);
                                setEditPreceptor(Preceptor);
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

export default PreceptorList;