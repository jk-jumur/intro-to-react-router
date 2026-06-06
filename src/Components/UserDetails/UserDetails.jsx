import { useLoaderData } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user)
    const{website, name} = user
      return(
        <div>
            <h2>Users details</h2>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
        </div>
      )
}

export default UserDetails;