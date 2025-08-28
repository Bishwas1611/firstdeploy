import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function User() {
  const [user, setUser] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);

  const getData = () => {
    return fetch("https://reqres.in/api/users", {
      headers: { "x-api-key": "reqres-free-v1" },
    }).then((res) => res.json());
  };

  const fetchandGetUser = async () => {
    try {
      setLoad(true);
      const data = await getData();
      setUser(data.data);
      console.log(data.data);
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
      {user.map((el) => {
        return (
          <div style={{border:"1px solid red",padding:"20px",margin:"20px"}} key={el.id}>
            <img src={el.avatar} alt={el.first_name} />
            <h2>Id: {el.id}</h2>
            <h2>First Name: {el.first_name}</h2>
            <h2>Last Name: {el.last_name}</h2>
            <h2>Email: {el.email}</h2>
            
            <Link to={`/user/${el.id}`}>More Info</Link>
          </div>
        );
      })}
    </>
  );
}
