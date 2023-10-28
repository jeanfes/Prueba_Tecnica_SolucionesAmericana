import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Login } from "./login";

describe("Login component", () => {
    test("renders email and password inputs", () => {
        const { getByPlaceholderText } = render(<Login />);
        const emailInput = getByPlaceholderText("Email");
        const passwordInput = getByPlaceholderText("Password");
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    test("submits form with email and password values", () => {
        const { getByPlaceholderText, getByText } = render(<Login />);
        const emailInput = getByPlaceholderText("Email");
        const passwordInput = getByPlaceholderText("Password");
        const submitButton = getByText("Iniciar sesión");

        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.click(submitButton);

        expect(emailInput.value).toBe("test@example.com");
        expect(passwordInput.value).toBe("password123");
    });
});
