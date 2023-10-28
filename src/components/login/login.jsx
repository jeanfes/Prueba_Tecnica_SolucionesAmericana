import { useUserLogin } from "../../hooks/useUserLogin.js";
import "../../styles/login.css";

export function Login() {
    const { formData, response, token, handleSubmit, handleInputChange } = useUserLogin();
    return (
        <form className="form_login" onSubmit={handleSubmit}>
            <h2>Inicio de Sesion</h2>
            <input
                style={{ border: response.typeError ? "1px solid red" : "1px solid green" }}
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
                type="email"
                placeholder="Email"
                className="input_login"
            />
            <input
                style={{ border: response.typeError ? "1px solid red" : "1px solid green" }}
                required
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
                type="password"
                className="input_login"
                placeholder="Password"
            />
            <button>Iniciar sesión</button>
            <p id="error_message" style={{ color: response.typeError ? "red" : "green" }}>{response.message}</p>
            {token && <p style={{ fontSize: "0.6rem" }}>Token de autenticación: {token}</p>}
        </form>
    );
}


