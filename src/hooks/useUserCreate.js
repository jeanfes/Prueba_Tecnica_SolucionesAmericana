import { useState, useContext } from "react";
import { TokenContext } from "../context/tokenContext.jsx";

export const useUserCreate = () => {
    const [formData, setFormData] = useState({ name: "", job: "" });
    const [response, setResponse] = useState({ message: "", typeError: false });
    const [data, setData] = useState();
    const { token } = useContext(TokenContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!token) {
            alert("Debe iniciar sesión para crear un usuario");
            return;
        }
        try {
            const response = await fetch("https://reqres.in/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setData({ name: data.name, job: data.job, id: data.id, createdAt: data.createdAt });
                setResponse({ message: "Creación de usuario exitosa: ", typeError: false });
                setFormData({ name: "", job: "" });
            } else {
                const data = await response.json();
                setResponse({ message: "Error en la creación del usuario: " + data.error, typeError: true });
            }
        } catch (error) {
            setResponse("Error en la solicitud POST");
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    return { formData, response, data, handleSubmit, handleInputChange };
}