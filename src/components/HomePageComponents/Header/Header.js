import React from "react";
import { Card, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegQuestionCircle, FaTimes } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

//style
import style from "./style.module.css";
import SelectOption from "../../Select";

function Header() {
  return (
    <>
      <Card className={style.card}>
        <Card.Header className={style.cardHeader}>
          {/** Left Side */}
          <div className={style.headerLeft}>
            <Navbar.Brand className={style.logo}>Logo</Navbar.Brand>
            <Navbar>
              <Nav className="mr-auto">
                <Link className={style.menuLink} to="/">
                  Find tutors
                </Link>
                <Link className={style.menuLink} to="/">
                  Become a tutor
                </Link>
              </Nav>
            </Navbar>
          </div>

          {/** Right Side */}
          <div className={style.headerRight}>
            <div className={`${style.selectMenu}`}>
              <select>
                <option>English, USD</option>
                <option>English, USD</option>
                <option>English, USD</option>
                <option>English, USD</option>
              </select>
            </div>
            <div className={style.rightIcon}>
              <FaRegQuestionCircle
                color="#6F757B"
                cursor="pointer"
                fontSize="19"
              />
            </div>
            <div className={style.loginBtn}>
              <FiLogIn fontSize="19" color="#6F757B" />
              <Link to="/">Log In</Link>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <div className={style.search}>
            <SelectOption
              options={[1, 2, 3, 4]}
              lable="TUTOR TEACHES"
              placeHolder="Select Subject"
              value="English Language"
              Icon={<FaTimes color="#707070" fontSize="14" />}
              type="what"
            />
            <SelectOption
              options={[1, 2, 3, 4]}
              lable="TUTOR TEACHES"
              placeHolder="Select Subject"
              value="English Language"
              Icon={<FaTimes color="#707070" fontSize="14" />}
            />
            <SelectOption
              options={[1, 2, 3, 4]}
              lable="TUTOR TEACHES"
              placeHolder="Select Subject"
              value="English Language"
              Icon={<FaTimes color="#707070" fontSize="14" />}
            />
            <SelectOption
              options={[1, 2, 3, 4]}
              lable="TUTOR TEACHES"
              placeHolder="Select Subject"
              value="English Language"
              Icon={<FaTimes color="#707070" fontSize="14" />}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default React.memo(Header);
