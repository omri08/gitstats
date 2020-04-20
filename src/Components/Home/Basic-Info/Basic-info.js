import React, { useState, useEffect } from 'react'
import axios from 'axios';

const BasicInformation = () => {
 const [userInfo, setInfo] = useState();
const baseUrl = "https://cors-anywhere.herokuapp.com/https://gitstats-api-stage.herokuapp.com/akashraj9828";

const getUserInfo = async () => {
let responce = await axios.get(baseUrl);
    const userData = responce.data;
    setInfo(userData.data.user);
 }
 
 //On load bind data with UI
    useEffect( () => {
        getUserInfo()
    },[])

    return (
      <section className="pt-5">
        {userInfo ?
          <div className="card p-4">
            <div className="row">
              <div className="left-image-avtar">
                <div className="member-image">
                  <img src={userInfo.avatarUrl} />
                </div>
              </div>
              <div className="col-sm-5">
                <div className="user-details pl-2">
                  <h2 className="font-size-21 mb-3 ">{userInfo.name}</h2>
                  <p className="font-size-13 mb-1">{userInfo.bio}</p>
                 <p className="font-size-13 mb-1">
                    <i
                      className="fa fa-envelope-o email"
                      aria-hidden="true"
                    ></i>
                    {userInfo.email ? userInfo.email : "No email added"}
                  </p>
                  <p className="font-size-13">
                    <i className="fa fa-github git-icon" aria-hidden="true"></i>
                    <a
                      className="text-dark"
                      target="_blank"
                      href={userInfo.url}
                    >
                      {userInfo && userInfo.login}
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="d-flex follow-details justify-content-end text-right">
                  <div>
                    <button type="button" className="btn btn-primary">
                      Fllowers
                      <img src={process.env.PUBLIC_URL + "/img/octocat.png"} />
                    </button>
                    <p className="font-size-12 mb-0 mt-1">
                      {userInfo["followers"].totalCount}
                    </p>
                  </div>
                  <div className="ml-5">
                    <button type="button" className="btn btn-primary outline">
                      <span>Fllowing</span>
                      <img src={process.env.PUBLIC_URL + "/img/octocat.png"} />
                    </button>
                    <p className="font-size-12 mb-0 mt-1">
                      {userInfo["following"].totalCount}
                    </p>
                  </div>
                </div>
                <ul className="p-0 m-0 list-unstyled d-flex justify-content-end font-size-12 mt-4">
                  <li className="mr-3">
                    {" "}
                    <i
                      style={{ color: "#40b14e" }}
                      className="fa fa-bookmark"
                      aria-hidden="true"
                    ></i>{" "}
                    Total Repo :{" "}
                    <span className="font-weight-bold">
                      {userInfo && userInfo["repositories"].totalCount}
                    </span>
                  </li>
                  <li className="mr-3">
                    <i
                      style={{ color: "#FF9800" }}
                      className="fa fa-comment"
                      aria-hidden="true"
                    ></i>{" "}
                    Total Commit : <span className="font-weight-bold">973</span>
                  </li>
                  <li>
                    <i
                      style={{ color: "#00BCD4" }}
                      className="fa fa-star"
                      aria-hidden="true"
                    ></i>{" "}
                    Total Star : <span className="font-weight-bold">23</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        : 
          "loading"}
      </section>
    );

}





export default BasicInformation