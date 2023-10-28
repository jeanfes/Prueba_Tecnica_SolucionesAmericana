import React from "react";
import { render, screen } from '@testing-library/react';
import { Usuarios } from './users';

jest.mock('../../hooks/useUserList.js', () => ({
    useUserList: () => {
        const usuarios = [
            { id: 1, first_name: 'John', last_name: 'Doe', email: 'johndoe@example.com', avatar: 'https://example.com/avatar.jpg' },
            { id: 2, first_name: 'Jane', last_name: 'Doe', email: 'janedoe@example.com', avatar: 'https://example.com/avatar.jpg' },
        ];

        const totalPages = 2;
        const currentPage = 1;
        const setPage = jest.fn();

        return {
            usuarios,
            totalPages,
            currentPage,
            setPage,
        };
    },
}));

describe('Usuarios', () => {
    it('renders a list of users', () => {
        render(<Usuarios />);
        const userCards = screen.getAllByRole('listitem');
        expect(userCards).toHaveLength(2);
    });

    it('renders the user email in each card', () => {
        render(<Usuarios />);
        const userEmails = screen.getAllByText(/@example\.com/);
        expect(userEmails).toHaveLength(2);
    });

    it('renders pagination buttons', () => {
        render(<Usuarios />);
        const paginationButtons = screen.getAllByRole('button');
        expect(paginationButtons).toHaveLength(2);
    });
});
