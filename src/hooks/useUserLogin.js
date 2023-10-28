import { useState, useContext } from "react";
import { TokenContext } from "../context/tokenContext.jsx";

export const useUserLogin = () => {
    const { token, setToken } = useContext(TokenContext);
    const [response, setResponse] = useState({ message: "", typeError: false });
    const [formData, setFormData] = useState({ email: "", password: "" });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                setResponse({ message: "Inicio de sesion exitoso: ", typeError: false });
                setFormData({ email: "", password: "" });
            } else {
                const data = await response.json();
                setResponse({ message: "Error en el inicio de sesión: " + data.error, typeError: true });
            }
        } catch (error) {
            setResponse("Error en la solicitud POST");
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    return { token, response, formData, handleSubmit, handleInputChange };
}
