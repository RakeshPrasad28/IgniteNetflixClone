import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-black my-3 p-10 text-white/70">
      <p className="ml-[11vw]">Questions? Call <u>000-800-919-1694</u></p>
      <div className="grid grid-cols-4 gap-4 ml-[11vw] mr-[12vw] mt-5">
        <a href="" target="blank">
          FAQ
        </a>
        <a href="https://help.netflix.com/en" target="blank">
          help centre
        </a>
        <Link to="/login">Account</Link>
        <a href="https://media.netflix.com/en/" target="blank">
          Media Centre
        </a>
        <a href="https://ir.netflix.net/ir-overview/profile/default.aspx" target="blank">
          Investers Relations
        </a>
        <a href="https://jobs.netflix.com/" target="blank">
          Jobs
        </a>
        <a href="https://help.netflix.com/en/node/14361" target="blank">
          Ways to watch
        </a>
        <a href="https://help.netflix.com/legal/termsofuse" target="blank">
          Terms of use
        </a>
        <a href="https://help.netflix.com/legal/privacy" target="blank">
          Privacy
        </a>
        <a href="/" target="blank">
          Cookie Preferences
        </a>
        <a href="/" target="blank">
          Corporate Information
        </a>
        <a href="/" target="blank">
          Contact US
        </a>
        <a href="/" target="blank">
          Speed Test
        </a>
        <a href="/" target="blank">
          Legal Notices
        </a>
        <a href="https://www.netflix.com/in/browse/genre/839338" target="blank">
          Only on Netflix
        </a>
      </div>
      <div className="ml-[10.8vw] mt-7">
        <select className="bg-transparent cursor-pointer text-white border-[1px] px-4 py-1 border-gray-400 font-semibold rounded-lg">
          <option className="text-black">English</option>
          <option className="text-black">Hindi</option>
        </select>
      </div>
      <div className="ml-[11vw] mt-5 mb-10 text-white/60">Netflix India</div>
    </div>
  );
};

export default Footer;
