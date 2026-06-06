import { use } from "react";

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise)
    console.log( 'users to data loading',users);
    return(
        <div>
            <h2>This is users2 data</h2>
        </div>
    )
}
export default Users2;