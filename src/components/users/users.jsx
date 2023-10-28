import { useUserList } from "../../hooks/useUserList.js"
import "../../styles/users.css"
export function Usuarios() {
    const { usuarios, totalPages, currentPage, setPage } = useUserList();
    return (
        <>
            <h1>Lista de usuarios</h1>
            <ul>
                {usuarios.map(usuario => (
                    <li className="user_card" key={usuario.id}>
                        <img src={usuario.avatar} alt={`Imagen de ${usuario.first_name} ${usuario.last_name}`} width="100" />
                        <p>{usuario.email}</p>
                    </li>
                ))}
            </ul>
            <div className="pagination_container_buttons">
                {
                    [...Array(totalPages)].map((_, index) => (
                        <button key={index} onClick={() => setPage(index + 1)} style={{ filter: index + 1 === currentPage ? "brightness(0.6)" : "brightness(0.9)" }}>{index + 1}</button>
                    ))
                }
                <p></p>
            </div>
        </>
    )
}

