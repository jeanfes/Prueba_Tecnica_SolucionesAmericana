import { useUserCreate } from "../../hooks/useUserCreate.js";
import "../../styles/create.css"

export function Crear() {
    const { formData, response, data, handleSubmit, handleInputChange } = useUserCreate();
    return (
        <form className="form_create" onSubmit={handleSubmit}>
            <h2>Crear usuario</h2>
            <input
                style={{ border: response.typeError ? "1px solid red" : "1px solid green" }}
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                name="name"
                type="text"
                placeholder="Nombre"
                className="input_create"
            />
            <input
                style={{ border: response.typeError ? "1px solid red" : "1px solid green" }}
                required
                autoComplete="job"
                value={formData.job}
                onChange={handleInputChange}
                name="job"
                type="text"
                className="input_create"
                placeholder="Trabajo"
            />
            <button>Crear usuario</button>
            <p id="error_message" style={{ color: response.typeError ? "red" : "green" }}>{response.message}</p>
            {data && (
                <div className="container_data_user">
                    <p>{"Nombre: " + data.name}</p>
                    <p>{"Trabajo: " + data.job}</p>
                    <p>{"Id: " + data.id}</p>
                    <p>{"Creado el: " + data.createdAt}</p>
                </div>
            )}
        </form>
    )
}

