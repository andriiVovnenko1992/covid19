import React from "react";
import styled from "styled-components";

const List = styled.div`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Item = styled.div`
    padding: 1%;
    margin: 1%;
    background-color: ${props => props.color || "rgba(215, 54, 55, 0.2)"};
    border: 1px solid black;
`;

const Header = ({ statistic }) => {
    const { active, total, death, recovered, country } = statistic;
  return (
      <div className="mt-5">
          <List>
              <Item as='li'>country = {country}</Item>
              <Item as='li' color="rgba(255,0,0, 0.2)">total = {total}</Item>
              <Item as='li' color="rgba(0,0,0, 0.2)">active = {active}</Item>
              <Item as='li' color="rgba(30,144,255, 0.2)">recovered = {recovered}</Item>
              <Item as='li' color="rgba(255,255,0, 0.2)">death = {death}</Item>
          </List>
      </div>
  )
};

export default Header;
