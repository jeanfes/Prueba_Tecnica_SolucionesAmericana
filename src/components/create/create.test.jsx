import { render, screen, fireEvent } from '@testing-library/react';
import { Crear } from './create';

jest.mock('../../hooks/useUserCreate', () => {
    return {
        useUserCreate: () => ({
            formData: {
                name: 'John Doe',
                job: 'Software Engineer',
            },
            response: { typeError: false, message: 'Usuario creado exitosamente!' },
            data: {
                name: 'John Doe',
                job: 'Software Engineer',
                id: 1,
                createdAt: '2023-10-28',
            },
            handleSubmit: jest.fn(),
            handleInputChange: jest.fn(),
        }),
    };
});

describe('Crear', () => {
    it('renders the form with input fields and a submit button', () => {
        render(<Crear />);
        const nameInput = screen.getByPlaceholderText('Nombre');
        const jobInput = screen.getByPlaceholderText('Trabajo');
        const submitButton = screen.getByRole('button', { name: 'Crear usuario' });
        expect(nameInput).toBeInTheDocument();
        expect(jobInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it('displays an error message if the form is submitted with empty fields', () => {
        render(<Crear />);
        const submitButton = screen.getByRole('button', { name: 'Crear usuario' });
        fireEvent.click(submitButton);
        const errorMessage = screen.getByText('Por favor, complete todos los campos.');
        expect(errorMessage).toBeInTheDocument();
    });

    it('displays a success message and the user data if the form is submitted with valid input', async () => {
        render(<Crear />);
        const nameInput = screen.getByPlaceholderText('Nombre');
        const jobInput = screen.getByPlaceholderText('Trabajo');
        const submitButton = screen.getByRole('button', { name: 'Crear usuario' });
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(jobInput, { target: { value: 'Software Engineer' } });
        fireEvent.click(submitButton);
        const successMessage = await screen.findByText('Usuario creado exitosamente!');
        const userData = screen.getByText('Nombre: John Doe');
        expect(successMessage).toBeInTheDocument();
        expect(userData).toBeInTheDocument();
    });
});