import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user)
    const{website, name} = user


      const {userId} = useParams();
      console.log(userId)
    // const params = useParams()
    // console.log(params)
      return(
        <div>
            <h2>Users details here</h2>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
        </div>
      )
}

export default UserDetails;