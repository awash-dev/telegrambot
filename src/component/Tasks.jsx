import React from "react";
import {YouTubeIcon} from "@mui/icons-material/YouTube";
import {Facebook} from "@mui/icons-material/FaceBook";
import {Instagram } from "@mui/icons-material/Instagram";
import { Telegram } from "@mui/icons-material";
const Tasks = () => {
  return (
    <div className="tasks">
      <h1>Tasks</h1>

      <div className="hor">
        <div className="sub">
          <div className="st">
            <span>
              subscribe on <YouTubeIcon className="icon" fontSize="large" />
            </span>
            <a
              href="https://www.youtube.com/channel/UCGSroElDPOtCb8Wwhkae7qw"
              target="_blank"
            >
              claim
            </a>
          </div>
        </div>
        <div className="sub">
          <div className="st">
            <span>
              follow on <Instagram className="icon" fontSize="large" />
            </span>
            <a href="https://www.instagram.com/awash_dev/" target="_blank">
              claim
            </a>
          </div>
        </div>
        <div className="sub">
          <div className="st">
            <span>
              follow on <Facebook className="icon" fontSize="large" />
            </span>
            <a href="https://www.facebook.com/mgdstudio4242/" target="_blank">
              claim
            </a>
          </div>
        </div>
        <div className="sub">
          <div className="st">
            <span>
              join on <Telegram className="icon" fontSize="large" />
            </span>
            <a href="https://t.me/awash_claim" target="_blank">
              claim
            </a>
          </div>
        </div>
        <div className="sub">
          <div className="st">
            <span>
              join on <Telegram className="icon" fontSize="large" />
            </span>
            <a href="https://t.me/awash_claim" target="_blank">
              claim
            </a>
          </div>
        </div>
      </div>
    </div> //
  );
};

export default Tasks;
