export const setAuthToken = currentUser => {
    // const currentUser = {
    //     email: user?.email,
    //     userType:user?.userType,
    // }
    fetch(`${process.env.REACT_APP_API_URL}/user/${currentUser?.email}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json',

        },
        body:JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        localStorage.setItem('antique-token',data.token)
    })
}