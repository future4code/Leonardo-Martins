// import styled from "styled-components";

import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants";

class Site extends React.Component{
  state ={
    sorteios:{}
  }

  getLoterias = () => {
    axios.get(`${BASE_URL}/loterias`)
    .then(resonse=>{
      this.setState({sorteios: Response.data.result})
    }).catch(error => {
      console.log(error);
    })
  };
  render(){
    return (
      <div>

     </div>
    )
  }
}
export default Site;
