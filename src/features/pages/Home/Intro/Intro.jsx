import clsx from "clsx";
import React from "react";
import {
  AiOutlineBranches,
  AiOutlineReddit,
  AiTwotoneSecurityScan,
} from "react-icons/ai";
import ImageOutro from "../../../../assets/img/image1.jpeg";
import intro from "./intro.module.scss";

const Intro = () => {
  return (
    <div className={clsx(intro.intro)}>
      <div className={clsx(intro.intro_container)}>
        <div className={clsx(intro.intro_container_about)}>
          <div className={clsx(intro.intro_img)}>
            <img src={ImageOutro} alt="" />
          </div>
          <div className={clsx(intro.intro_about)}>
            <h2>Our Story</h2>
            <p>
              Contemporary classics that issue from the convergence of the most
              sophisticated crafting methods and cutting edge technology.
              Alongside the creative and experimental production of the made in
              Italy industry we find the expertly crafted creations,at times
              handcrafted,typical of BNS service studied to meet the demand for
              customised furniture, as in an atelier.
            </p>
            <button className={clsx(intro.intro_about_btn)}>
              Move
            </button>
          </div>
        </div>

        <div className={clsx(intro.intro_infor)}>
          <div>
            <AiTwotoneSecurityScan />
            <h3>Mordern Design</h3>
            <p>
              Lorem ipsum dolor sit amet,con secte-tur adipiscing elit,sed do
              elus mod tempor incididunt ut labore et dolore magna atiqua
            </p>
          </div>
          <div>
            <AiOutlineReddit />
            <h3>HONEST PRICES</h3>
            <p>
              Lorem ipsum dolor sit amet,con secte-tur adipiscing elit,sed do
              elus mod tempor incididunt ut labore et dolore magna atiqua
            </p>
          </div>
          <div>
            <AiOutlineBranches />
            <h3>GREAT SUPPORT</h3>
            <p>
              Lorem ipsum dolor sit amet,con secte-tur adipiscing elit,sed do
              elus mod tempor incididunt ut labore et dolore magna atiqua
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
