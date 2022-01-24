// import {  ContainerHeader } from "./styled"
import styled from "styled-components";

const ContainerHeader = styled.header `
  padding: 2rem;
  background-color:#6BEFA3;
  `
const Select = styled.select `
  padding: 12px;
  border-radius:8px;
  border: 0px solid black;
  `

const Header = () => {
  return (
    <div>
      <ContainerHeader>
        <Select>
          <option value="item1">MEGA-SENA</option>
          <option value="item2">QUINA</option>
          <option value="item3">LOTOFACIL</option>
          <option value="item4">LOTOMANIA</option>
          <option value="item5">TIMEMANIA</option>
          <option value="item6">DIA DE SORTE</option>
        </Select>
      </ContainerHeader>
    </div>
  )
}

export default Header;
