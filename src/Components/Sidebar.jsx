import React, { useState } from "react";
import styled from 'styled-components';
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BugReportIcon from "@mui/icons-material/BugReport";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";

const Hover = styled.button`
   padding:10px;
   border-radius:30px;
   &:hover {
     background-color:#2dd4bf;
     color:black;
  }
`

const Sidebar = () => {
    return (
      <div className="grid grid-cols-1 rounded-md w-[250px]">
        <div className={`bg-black text-white`}>
          
            <h1 className="text-2xl mb-2 ml-5 ">HackerOne</h1>
            <div className="flex flex-col justify-center gap-y-60">
              <ul className="space-y-5 ml-5">
                <li>
                  <Hover as="button">
                    <GpsFixedIcon />
                    Opportunities
                  </Hover>
                </li>
                <li>
                  <Hover as="button">
                    <DashboardOutlinedIcon />
                    Dashboard
                  </Hover>
                </li>
                <li>
                  <Hover as="button">
                    <BugReportIcon />
                    Inbox
                  </Hover>
                </li>
                <li>
                  <Hover as="button">
                    <MonitorHeartOutlinedIcon />
                    Hacktivity
                  </Hover>
                </li>
                <li>
                  <Hover as="button">
                    <LeaderboardOutlinedIcon />
                    Leaderboard
                  </Hover>
                </li>
                <li>
                  <Hover as="button">
                    <AssignmentTurnedInIcon />
                    Directory
                  </Hover>
                </li>
              </ul>
              <div>
                <ul className="space-y-5">
                  <hr />
                  <li>
                    <Hover as="button">
                      <HelpOutlineSharpIcon />
                      Help
                    </Hover>
                  </li>
                  <li>
                    <Hover as="button">
                      <NotificationsNoneSharpIcon />
                      Notifications
                    </Hover>
                  </li>
                  <li>
                    <Hover as="button">
                      <AccountCircleSharpIcon />
                      Profile
                    </Hover>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

    );
  };
  
  export default Sidebar;