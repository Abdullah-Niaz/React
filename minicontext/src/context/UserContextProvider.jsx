import React from "react";
import UserContext from "./UserContext";

// jo b data app k pass a raha, us ko  as it pass kar do 
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;