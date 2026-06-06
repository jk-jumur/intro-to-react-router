import { useLoaderData } from "react-router";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return(
        <div>

            <h2>This is users</h2>
        </div>
    )
}

export default Users;