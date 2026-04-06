import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [usersData, setUsersData] = useState([])
  const [productsData, setProductsData] = useState([])

  const handleSubmit = ()=>{
    // axios.post("http://localhost:8000/create",{
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password:password
    // });
    // fetch("http://localhost:8000/create", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     firstName:firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password
    //   })
    // });

async function post() {
  const usersdataRes = await axios.post("http://localhost:8000/create", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  // console.log(usersdataRes.data);
  // setData(usersdataRes.data)
  
  

}
post()


  }


  // fetch data for ui
useEffect(()=>{
  async function userdata() {
    const data = await axios.get("http://localhost:8000/users");
    console.log(data.data);
    setUsersData(data.data)
    
  }
  userdata()
},[])

 useEffect(()=>{
  async function productData() {
    const data = await axios.get("http://localhost:8000/products");

    setProductsData(data.data.products);

  }
  productData()
 },[])

 
  
  return (
    <>
      <div className="container">
        <h1>Login Form</h1>
        <div className="form">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button onClick={handleSubmit}>submit</button>
        </div>
      </div>
      <div className="container">
        <h1>user data from api</h1>
        <div className="div">
          {usersData.map((item, index) => (
            <ul key={index}>
              <li>{item.firstName}</li>
              <li>{item.lastName}</li>
              <li>{item.email}</li>
            </ul>
          ))}
        </div>
        <div className="">
          <h1>product Data from api</h1>
          
{
  productsData.map((item)=>{
    return (
      
        <div className="" key={item.id}>
          <img src={item.thumbnail} alt="" />
          <h3>{item.title}</h3>
          <span>$ {item.price} </span>
          <span>rating {item.rating} </span>
          <span>{item.stock} in stock </span>
        </div>
        
      
    );
              
  })
}
        </div>
      </div>
    </>
  );
}
