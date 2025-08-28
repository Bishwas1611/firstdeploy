import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
export default function SingleUser() {
    const val =useParams();
    console.log(val);
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);

  const getData = () => {
    return fetch(`https://reqres.in/api/users/${val.user_id}`, {
      headers: { "x-api-key": "reqres-free-v1" },
    }).then((res) => res.json());
  };

  const fetchandGetUser = async () => {
    try {
      setLoad(true);
      const data = await getData();
      setUser(data);
      console.log(data);
      setLoad(false);
    } catch (error) {
      setErr(true);
      setLoad(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchandGetUser();
  }, []);
  if (load) {
    return <h1>Loading....</h1>;
  }
  if (err) {
    return <h1>Something went Wrong....</h1>;
  }

  return (
    <>
      
          
          
    <div style={{border:"1px solid red",padding:"20px",margin:"20px"}} key={user?.data?.id}>
            <h2>Id: {user?.data?.id}</h2>
            <h2>First Name: {user?.data?.first_name}</h2>
            <h2>Last Name: {user?.data?.last_name}</h2>
            <h2>Email: {user?.data?.email}</h2>
            <img src={user?.data?.avatar} alt={user?.first_name} />
            <h4>Body:{user?.support?.text}</h4>
           
          </div>
    
     
    </>
  );
}
