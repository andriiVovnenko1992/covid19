import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const CountryLink = styled.div`
    text-decoration: none;
    transition: 0.7s;
        :hover {
            color: green;
        }
`;


const Table = ({ statistics }) => {
  return (
          <div className="container">
              <table className='table table-bordered mt-3'>
                  <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>Country</th>
                        <th scope='col'>Total</th>
                        <th scope='col'>Active</th>
                        <th scope='col'>Recovered</th>
                        <th scope='col'>Death</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                      statistics.map(({country, total, active, recovered, death}) =>
                          <tr key={country}>
                              <th scope='row'><CountryLink as={Link} to={`/country/${country}`} >{country}</CountryLink></th>
                              <td>{total}</td>
                              <td>{active}</td>
                              <td>{recovered}</td>
                              <td>{death}</td>
                          </tr>
                      )
                  }
                  </tbody>
              </table>
          </div>
  )
};

export default Table
