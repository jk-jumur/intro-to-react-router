import { Link } from "react-router";

const User = ({user}) => {
     const {id, name, email, username, phone, website} = user;

     const userStyle = {
         border: '2px solid greenYellow',
         borderRadius: '10px',
         padding: "10px",
         margin: "10px"
     }
    return(
        <div style={userStyle}>
                 <h2>{name}</h2>
                 <p>Email: {email}</p>
                 <p><small>Phone: {phone}</small></p>
                 <p>username: {username}</p>
                 <p>website: {website}</p>
                 <Link to={`/users/${id}`}>Show Details Here</Link>
        </div>
    )
}

export default User;