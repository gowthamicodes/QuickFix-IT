import { useEffect, useContext } from "react"
import { AuthContext } from "../../Context/Auth-context";

function Users () {

const {users, setUsers} = useContext(AuthContext)   


    const getUsers = async () => {
    
        const token = localStorage.getItem("token");
        try {
          const response = await fetch(
            "http://localhost:5000/api/users",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
    
          const responseData = await response.json();
    
          console.log(responseData);

if (!response.ok)
 {
    console.error(responseData.message);
    return
 }
setUsers(responseData.user)

        } catch (err) {
    
          console.error("Get users error:", err)
        } 
      }

      useEffect (() => {
        getUsers();
      },[])


      return (
<div>
<h2>Users</h2>
{
    users.map((user) => (
    <div key={user._id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        </div>
    ))
}
</div>
      )

}


export default Users;