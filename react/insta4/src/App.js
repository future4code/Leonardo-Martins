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

class App extends React.Component {
  state = {
    sharing: false,
  };

  handleShare = (shareStatus) => {
    this.setState({ sharing: shareStatus });
    console.log("status: ", shareStatus);
  };

  render() {
    return (
      <div>
        <div>
          <MainContainer>
            <Post
              onShareClick={this.handleShare}
              nomeUsuario={"User 1"}
              fotoUsuario={"https://source.unsplash.com/50x50/?profile,person"}
              fotoPost={"https://source.unsplash.com/500x500/?nature"}
            />
          </MainContainer>
        </div>
        <div>
          <MainContainer>
            <Post
              onShareClick={this.handleShare}
              nomeUsuario={"User 2"}
              fotoUsuario={"https://source.unsplash.com/50x50/?avatar,person"}
              fotoPost={"https://source.unsplash.com/500x500/?sports"}
            />
          </MainContainer>
        </div>
        <div>
          <MainContainer>
            <Post
              onShareClick={this.handleShare}
              nomeUsuario={"User 3"}
              fotoUsuario={"https://source.unsplash.com/50x50/?profile,woman"}
              fotoPost={"https://source.unsplash.com/500x500/?travel"}
            />
          </MainContainer>
        </div>
        {this.state.sharing && <Share onShareClick={this.handleShare} />}
      </div>
    );
  }
}

export default App;
