import styled from "@emotion/styled";

export const Header = styled.header`
  border-bottom: 1px solid;
  margin-bottom: 1em;
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  text-align: center;
  margin-bottom: 0.3em;
`;

export const Footer = styled.footer`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 5vh;
  padding-top: 0.5em;
  text-align: center;
`;

export const FooterText = styled.p``;

export const Main = styled.main`
  color: #333434;
  display: flex;
  height: 87vh;
`;

export const AsideContent = styled.aside`
  max-height: 100%;
  padding: 2vh 1vw;
  overflow-y: auto;
  width: 50vw;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  background-color: #acacac;
  border: 1px solid #333434;
  border-radius: 10px;
  margin-bottom: 1em;
  padding: 0.5em;

  &.read {
    background-color: #43bd9b;
  }
`;

export const ListItemTitle = styled.h2`
  line-height: 1em;
  margin-bottom: 0.3em;
`;

export const ListItemText = styled.p`
  line-height: 1.2em;
  margin-bottom: 1em;
`;

export const ListItemButton = styled.button`
  background: none;
  color: #146894;
  cursor: pointer;
  font-weight: bold;
  line-height: 1.2em;

  &:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.article`
  max-height: 100%;
  padding: 2vh 1vw;
  overflow-y: auto;
  width: 50vw;
`;

export const ContentHeader = styled.header`
  margin-bottom: 0.3em;
`;

export const ContentTitle = styled.h1`
  line-height: 1em;
  margin-bottom: 0.3em;
`;

export const ContentAuthor = styled.h2`
  line-height: 1em;
  margin-bottom: 0.3em;
`;

export const ContentPublishedDate = styled.small``;

export const ContentImage = styled.img`
  margin-bottom: 0.3em;
  max-width: 100%;
`;

export const ContentText = styled.p`
  line-height: 1.2em;
  margin-bottom: 0.3em;
`;

export const ContentFooter = styled.footer``;

export const ContentSource = styled.a`
  margin-left: 0.3em;
`;
