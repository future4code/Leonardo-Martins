import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import Share from "./components/Share/Share";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  background-color: lightsalmon;
  margin-bottom: 12px;
  border-bottom: 1px solid black;
`;

const Feed = styled.div`
  background-color: white;
`;

const AdicionarPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 20px;
    width: 100px;
    margin: 16px 4px;
    border-radius: 8px;
    text-align: center;
  }
  button {
    margin: 8px;
    width: 100px;
    height: 40px;
    border-radius: 16px;

  }
`;

class App extends React.Component {
  state = {
    sharing: false,
    posts: [
      {
        nomeUsuario: "User 1",
        fotoUsuario: "https://source.unsplash.com/50x50/?profile,person",
        fotoPost: "https://source.unsplash.com/500x500/?nature",
      },
      {
        nomeUsuario: "User 2",
        fotoUsuario: "https://source.unsplash.com/50x50/?avatar,men",
        fotoPost: "https://source.unsplash.com/500x500/?sports",
      },
      {
        nomeUsuario: "User 3",
        fotoUsuario: "https://source.unsplash.com/50x50/?profile,woman",
        fotoPost: "https://source.unsplash.com/500x500/?travel",
      },
    ],
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputPost: "",
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputPost,
    };
    const postsNovos = [...this.state.posts, novoPost];

    this.setState({
      posts: postsNovos,
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputPost: "",
    });
  };

  onChangeInputNomeUsuario = (e) => {
    this.setState({ inputNomeUsuario: e.target.value });
  };

  onChangeInputFotoUsuario = (e) => {
    this.setState({ inputFotoUsuario: e.target.value });
  };

  onChangeInputPost = (e) => {
    this.setState({ inputPost: e.target.value });
  };

  handleShare = (shareStatus) => {
    this.setState({ sharing: shareStatus });
    console.log("status: ", shareStatus);
  };

  render() {
    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post
          onShareClick={this.handleShare}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <div>
        <Header>
          <AdicionarPost>
            <input
              value={this.state.inputNomeUsuario}
              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Nome"}
            />
            <input
              value={this.state.inputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
             placeholder={"Foto perfil"}
            />
            <input
              value={this.state.inputPost}
              onChange={this.onChangeInputPost}
             placeholder={"Foto post"}
            />
            <button onClick={this.adicionaPost}>Postar</button>
          </AdicionarPost>
        </Header>

        <Feed>
          <MainContainer>{listaPosts}</MainContainer>
        </Feed>

        {this.state.sharing && <Share onShareClick={this.handleShare} />}
      </div>
    );
  }
}

export default App;
