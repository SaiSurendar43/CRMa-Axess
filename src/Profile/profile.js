import React from "react";
import "./profile.css";
import { useState,useEffect} from "react";
import Tabs from "./Tabs/tabs";
import InputIcon from "@mui/icons-material/Input";
import SearchIcon from "@mui/icons-material/Search";
import RatingValue from "./Rating/rating";

/* profile-dropdown-----------*/
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

/* current-status-----------*/
import CheckIcon from "@mui/icons-material/Check";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";


const Profile = () => {
  const [username, setUserName] = useState("Nikandrav");
  const [userList, setUserList] = useState([
    {
      name: "Nikil",
      role:"Remote UI/UX Designers(Mobile/Web)",
      age: 42,
      dateOfBirth: "17/05/1884",
      email: "nikil.1882@gamil.com",
      jobsDone: 40,
      specification: "UI/UX",
      joBSuccess:3,
      totalEarned:"50",
      hoursRate:"$130",
      hoursWorked:2213,
      skills:"ui/ux,products",
      attachments:"",

    },
  ]);

  // useEffect(() => {
  //   const getProfile = async () => {
  //     let res = await fetch(
  //         "https://"bbbvjbdj"
  //       )             
  //       res = await res.json()
  //       setUserList(res.data);
  //   };
  //   getProfile();
  // }, []);

 const [user,setUser] = useState(userList[0])

  const othersList = [
    { name: "Radha krishna", available: "interview" },
    { name: "Hasin mohamad", available: "yes" },
    { name: "Rekha nayar", available: "no" },
  ];

  const [actions, setActions] = useState("");

  const handleSearch = () => {};
  const changePage = () => {};
  const handleActionChange = (event) => {
    setActions(event.target.value);
  };

  return (
    <div>
      <div className ="profile-page ">
        <div className="container">
          <header className="border-bottom">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <div className="nav-icon">
                  <a href="#">
                    <img></img>
                  </a>
                  <a href="#" onClick={changePage}>
                    Dashboard
                  </a>
                  <a href="#" onClick={changePage}>
                    Report
                  </a>
                  <a href="#" onClick={changePage}>
                    Messages
                  </a>
                  <a href="#" onClick={changePage}>
                    Freelancers
                  </a>
                  <a href="#" onClick={changePage}>
                    Jobs
                  </a>
                </div>
              </div>

              <div className="d-flex header-right align-items-center justify-content-between">
                <div className="seachbar">
                  <span>
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={handleSearch}
                  ></input>
                  {/* 
                  <input
                className="from form-control"
                list="from"
                // value={from}
                name="from"
                onChange={(e) => setFrom(e.target.value)}
                // onChange={(e)=>search(e)}
                placeholder="from"
              ></input>
              <datalist id="from">
                {fromOption.map((a, i) => {
                  return <option key={i} value={a}></option>;
                })}
              </datalist> */}
                </div>
                <div className="d-flex header-name align-items-center justify-content-between">
                  <div>
                    <p className="firstLetter">{user.name[0]}</p>
                  </div>
                  <p>{user.name}</p>
                  <a>
                    <InputIcon />
                  </a>
                </div>
              </div>
            </div>
          </header>
          {/*     main section starts --------------------------------   */}
          <main>
            <div className="navigation-section p-2">
              <div className="container">
                <div className="d-flex align-items-center">
                  <p className="slash">
                    <b>Freelancers</b>
                  </p>
                  <p className="slash">
                    <b>Designers</b>
                  </p>
                  <p>{username}</p>
                </div>
              </div>
            </div>
            {/*----------------------------profile section----------------*/}
            <div className="profile-section">
              <div className="container">
                <div className="row ">
                  <div className="col-lg-9 ">
                    <div className="profile d-flex section-border">
                      <div className="col-md-3 profile-image">
                        <img src=""></img>
                      </div>
                      <div className="col-md-9 ps-3">
                        <div className="row">
                          <div className="col-lg-9">
                            <b>{user.name}</b>
                            <p className="user-role">
                              {user.role}
                            </p>
                          </div>
                          <div className="col-lg-3">
                            <Box sx={{ minWidth: 120 }}>
                              <FormControl fullWidth>
                                <InputLabel
                                  sx={{ placeholder: "Action" }}
                                  id="demo-simple-select-label"
                                >
                                  {/* Action */}
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={actions}
                                  label="Action"
                                  onChange={handleActionChange}
                                >
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </div>
                        </div>
                        <div className="row user-details">
                          <div className="col-md-6">
                            <div className="d-flex">
                              <ul className="profile-labels">
                                <li>Name</li>
                                <li>Date of Birth</li>
                                <li>Email</li>
                                <li>Jobs</li>
                                <li>Specifications</li>
                              </ul>
                              <ul className="profile-values">
                                {console.log(user.name)}
                                <li>{user.name || ""}</li>
                                <li>{user.dateOfBirth || ""}</li>
                                <li>{user.email || ""}</li>
                                <li>{user.jobsDone || ""}</li>
                                <li>{user.specification || ""}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="d-flex ">
                              <ul className="profile-labels">
                                <li>Job Success</li>
                                <li>Total earned</li>
                                <li>Hour Rate</li>
                                <li>Hours Worked</li>
                                <li>Skills</li>
                              </ul>
                              <ul className="profile-values">
                                <li>{<RatingValue rating={user.joBSuccess} />}</li>
                                <li>{user.totalEarned}</li>
                                <li>{user.hoursRate}</li>
                                <li>{user.hoursWorked}</li>
                                <li>{user.skills}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="d-flex attachments">
                              <p className="profile-labels">Attachments</p>
                              <p className="file">
                                <PictureAsPdfIcon />
                                <a href="">{user.attachments}</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 ">
                    {/*---------------------------current status-----------------*/}
                    <div className="current-status-section section-border ">
                      <div className="row align-items-center">
                        <p className="col-6 current-status">
                          <b>Current Status</b>
                        </p>
                        <div className=" col-6 status-box position-relative">
                          current status{" "}
                          <span className=" check position-absolute ">
                            <CheckIcon />
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <div className="others d-flex">
                          <div className="person-logo">
                            {othersList[0].name[0]}
                          </div>
                          <div className=" person-status">
                            <p>
                              <b>{othersList[0].name}</b> status changed as{" "}
                              <span>{othersList[0].available}</span>
                            </p>
                            <div>
                              <QueryBuilderIcon /> {"10 mins ago"}
                            </div>
                          </div>
                        </div>
                        <div className="others d-flex">
                          <div className="person-logo">
                            {othersList[1].name[0]}
                          </div>
                          <div className=" person-status">
                            <p>
                              <b>{othersList[1].name}</b> status changed as{" "}
                              <span>{othersList[1].available}</span>
                            </p>
                            <div>
                              <QueryBuilderIcon /> {"10 mins ago"}
                            </div>
                          </div>
                        </div>
                        <div className="others d-flex">
                          <div className="person-logo">
                            {othersList[2].name[0]}
                          </div>
                          <div className=" person-status">
                            <p>
                              <b>{othersList[2].name}</b> status changed as{" "}
                              <span>{othersList[2].available}</span>
                            </p>
                            <div>
                              <QueryBuilderIcon /> {"10 mins ago"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**--------------------------tab-section starts----------------------------- */}
            <section className="tab-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <Tabs />
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
