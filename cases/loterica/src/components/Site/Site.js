// import styled from "styled-components";

import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants";

class Site extends React.Component{
  state ={
    sorteios:[{}]
  }

  getLoterias = () => {
    axios.get(`${BASE_URL}/loterias`)
    .then(response => {
      // this.setState({sorteios: response.data.result})
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  };
  render(){
    return (
      <div>
        <button onClick={this.getLoterias()}>clicar</button>
        {/* <p>{this.state.sorteios}</p> */}
     </div>
    )
  }
}
export default Site;
