import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin,setIsAdmin] = useState(false)
    const [isAdminLoading,setIsAdminLoading] = useState(true);

    useEffect(()=> {
        if(email){
            fetch(`${process.env.REACT_APP_API_URL}/users/admin/${email}`,{
                headers:{
                    'content-type':'application/json',
                    authorization:`bearer ${localStorage.getItem('antique-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
                setIsAdminLoading(false)
            })
        }
    },[email])
    return [isAdmin,isAdminLoading]
}

export default useAdmin;