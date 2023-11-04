import useUserStore from "../store/userStore"

const ProfileOptions = () => {

    const logout = useUserStore((state) => state.logoutUser)

    return (
        <div className="profile-options col-2 m-5 me-0 p-4">
            <div className="bg-white rounded p-3 pt-1 pb-1">
                <button className="border-0 bg-white text-dark p-2 container text-end border-bottom border-dark">Editar Perfil</button>
                <button onClick={() => logout()} className="border-0 bg-white text-dark p-2 text-end container">Cerrar Sesion</button>
            </div>
        </div>
    );
};

export default ProfileOptions;
