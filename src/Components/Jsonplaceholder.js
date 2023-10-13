import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useMemo, useState } from "react";
import instance from "./Api/Thirdparty";

const Jsonplaceholder = () => {
  // to store the result from the server
  const [res, setresult] = useState([]);

  // function to fetch data from the server

  const FetchData = async () => {
     instance
    .get("users")
    // await fetch("https://jsonplaceholder.typicode.com/users")
    .then (function(response){
      setresult(response.data)
    })
      // .then((response) => response.json())
      // .then((json) => setresult(json));

      .catch (function(error){
        console.log(error)
      })

      .finally(function(){
    console.log("finally always excute")
      })
  };

  // function to find the longest name after data recieved from the server
  const longestName = () => {
    let data = "";
    for (let i = 0; i < res.length; i++) {
      if (data.length < res[i].username.length) {
        data = res[i].username;
      }
    }
    return data;
  };

  // catching the lonegest name in getlongestname variable
  let getLongestName = useMemo(() => {
    return longestName();
  }, [res]);

  // fetch data from the backend only once when components gets load
  useEffect(() => {
    try {
      FetchData();
    } catch (error) {
      alert("something went wrong");
    }
  }, []); // dependancy for one time excution

  return (
    <>
      <h2>Jsonplaceholder</h2>
      <h4>Longest username :{getLongestName}</h4>
      <div className="container">
        <div className=" d-flex flex-wrap gap-3 justify-content-center align-i">
        {res.length === 0 ? (
          <span>No result</span>
        ) : (
          res.map((item, index) => {
            return (
              <div className="col-md-3 col-sm-6">
                 <div className="card mt-2" style={{ width: "18rem" }} key={index}>
                <div className="card-body">
                  <h5 className="card-title">User Information</h5>
                  <p className="card-text">Username:{item.username}</p>
                  <p className="card-text">Email:{item.email}</p>
                  <p className="card-text">Website:{item.website}</p>
                  <p className=" card-text"></p>
                </div>
              </div>
              </div>
            );
          })
        )}

</div>
      </div>
    </>
  );
};

export default Jsonplaceholder;
