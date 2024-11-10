import { useState } from "react";
import useAlumno from "../../modules/Alumno/hooks/useAlumno";
import usePreceptor from "../../modules/Preceptor/hooks/usePreceptor";
import useProfesor from "../../modules/Profesor/hooks/useProfesor";
import useTutor from "../../modules/Tutor/hooks/useTutor";

const useSwitch = () => {
    // Inicializamos los hooks
    const alumnoHook = useAlumno();
    const preceptorHook = usePreceptor();
    const profesorHook = useProfesor();
    const tutorHook = useTutor();

    // Estado para manejar errores
    const [error, setError] = useState(null);

    const handleRolSubmit = async (formData, operacion = 'crear') => {
        console.log('FormData recibido:', formData); // Para debugging

        if (!formData.rol) {
            console.log('Rol no detectado'); // Para debugging
            throw new Error('Por favor selecciona un rol');
        }

        // Creamos el objeto con los datos comunes
        const userData = {
            dni: formData.dni,
            nombre: formData.nombre,
            apellido: formData.apellido,
            email: formData.email,
            telefono: formData.telefono,
            password: formData.password,
            habilitar: 1
        };

        try {
            // Seleccionamos el hook correspondiente según el rol
            let selectedHook;
            switch (formData.rol) {
                case 'alumno':
                    selectedHook = alumnoHook;
                    break;
                case 'profesor':
                    selectedHook = profesorHook;
                    break;
                case 'preceptor':
                    selectedHook = preceptorHook;
                    break;
                case 'tutor':
                    selectedHook = tutorHook;
                    break;
                default:
                    throw new Error('Rol no válido');
            }

            // Actualizamos los estados del hook seleccionado
            Object.keys(userData).forEach(key => {
                switch (key) {
                    case 'dni':
                        selectedHook.setDni(userData[key]);
                        break;
                    case 'nombre':
                        selectedHook.setNombre(userData[key]);
                        break;
                    case 'apellido':
                        selectedHook.setApellido(userData[key]);
                        break;
                    case 'email':
                        selectedHook.setEmail(userData[key]);
                        break;
                    case 'telefono':
                        selectedHook.setTelefono(userData[key]);
                        break;
                }
            });

            // Ejecutamos la operación en el hook seleccionado
            await selectedHook.handleSubmit(new Event('submit'), operacion);
            setError(null);
            return true;

        } catch (error) {
            setError(error.message);
            throw error;
        }
    };

    const getRolData = (rol, dni) => {
        try {
            switch (rol) {
                case 'alumno':
                    return alumnoHook.getAlumnoData(dni);
                case 'profesor':
                    return profesorHook.getProfesorData(dni);
                case 'preceptor':
                    return preceptorHook.getPreceptorData(dni);
                case 'tutor':
                    return tutorHook.getTutorData(dni);
                default:
                    throw new Error('Rol no válido');
            }
        } catch (error) {
            setError(error.message);
            throw error;
        }
    };

    return {
        handleRolSubmit,
        getRolData,
        error
    };
};

export default useSwitch;
