const USER_LIST_ENDPOINT_API = "https://reqres.in/api/users";

export const getUserList = async ({ currentPage, token }) => {
    if (!token) {
        alert("Debe iniciar sesión para ver la lista de usuarios");
        return;
    }
    try {
        const response = await fetch(USER_LIST_ENDPOINT_API + `?page=${currentPage}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw new Error("Error en la solicitud: " + errorData.error);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw error;
    }
};
