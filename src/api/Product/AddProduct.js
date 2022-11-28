import Swal from "sweetalert2";

export const addProduct = product => {
    console.log(product);
    fetch(`${process.env.REACT_APP_API_URL}/products`,{
        method:"POST",
        // headers:{
        //   'content-type':'application/json',
        //   authorization: `bearer ${localStorage.getItem('accessToken')}`
        // },
        body:JSON.stringify(product)
      })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        Swal.fire("Product added successfully")
        // toast.success("Inserted doctor information")
      })
}