import React from "react";
import styled from "styled-components";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import iconeSalvarBranco from "../../img/bookmark_branco.svg";
import iconeSalvarPreto from "../../img/bookmark_preto.svg";
import iconeEncaminhar from "../../img/send.svg";

import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;
const Interacoes = styled.div`
  display: flex;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
  };

  onClickCurtida = () => {
    console.log("Curtiu!");
    if (this.state.curtido) {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1,
      });
    } else {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1,
      });
    }
  };

  onClickSalvar = () => {
    console.log("salvou!");
    this.setState({
      salvo: !this.state.salvo,
    });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  onClickEncaminhar = () => {
    this.props.onShareClick(true);
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let iconeSalvar;

    if (this.state.salvo) {
      iconeSalvar = iconeSalvarPreto;
    } else {
      iconeSalvar = iconeSalvarBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostFooter>
          <Interacoes>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />

            <IconeComContador
              icone={iconeEncaminhar}
              onClickIcone={this.onClickEncaminhar}
            />
          </Interacoes>

          <div>
            <IconeComContador
              icone={iconeSalvar}
              onClickIcone={this.onClickSalvar}
            />
          </div>
        </PostFooter>
        {componenteComentario}
      </PostContainer>
    );
  }
}

export default Post;
