import React from "react";
import { Text,View, StyleSheet} from "react-native";
import Constants from 'expo';

const Main = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-500 to-pink-500">
            <div className="flex-1 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-white">Cuaderno Digital</h1>
            </div>
            <footer className="bg-black bg-opacity-50 text-white p-6">
                <p className="text-center text-sm">
                    &copy; {new Date().getFullYear()} Cuaderno Digital. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    )
    
}

export default Main