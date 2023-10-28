import { useEffect, useState, useContext } from "react";
import { TokenContext } from "../context/tokenContext.jsx";
import { getUserList } from "../services/users.js";

export const useUserList = () => {
    const { token } = useContext(TokenContext);
    const [usuarios, setUsuarios] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const UserList = () => {
        getUserList({ currentPage, token }).then(usuarios => {
            setUsuarios(usuarios.data);
            setTotalPages(usuarios.total_pages);
        });
    }
    const setPage = (index) => {
        setCurrentPage(index)
    }
    useEffect(UserList, [currentPage, token]);
    return { usuarios, totalPages, currentPage, setPage };
}