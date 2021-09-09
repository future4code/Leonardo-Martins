import React from "react";
import styled from "styled-components";

const ShareContainer = styled.div`
  height: 200px;
  width: 250px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.8);
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SocialLinks = styled.div`
  display: flex;
`;

const IconImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 8px;
`;

const Tittle = styled.h2`
  margin-top: 0;
`;

class Share extends React.Component {
  state = {};

  onShareConfirm = (e) => {
    const social = e.target.getAttribute("data-name");
    alert(`Compartilhar: ${social}`);
    this.props.onShareClick(false);
  };

  render() {
    return (
      <ShareContainer onClick={this.onShareConfirm}>
        <Tittle>Compatilhar: </Tittle>
        <SocialLinks>
          <IconImage
            alt={"Icone Instagram"}
            src={
              "https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"
            }
            data-name={"Instagram"}
            onClick={this.onShareConfirm}
          />
          <IconImage
            alt={"Icone Facebook"}
            src={
              "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
            }
            data-name={"Facebook"}
            onClick={this.onShareConfirm}
          />
          <IconImage
            alt={"Icone Twitter"}
            src={
              "https://logosmarcas.net/wp-content/uploads/2020/04/Twitter-Logo-650x366.png"
            }
            data-name={"Twitter"}
            onClick={this.onShareConfirm}
          />
        </SocialLinks>
      </ShareContainer>
    );
  }
}

export default Share;
