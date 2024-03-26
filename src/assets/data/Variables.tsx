import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  margin-top: 25px;
  font-size: 40px;
  margin-bottom: 100px;
  color: white;
  // background-color: #1a1a1a;
  cursor: default;
`;

export const icons = {
  accept: "/src/assets/images/accept.png", // check vert
  decline: "/src/assets/images/cancel.png", // croix rouge
  delete: "/src/assets/images/delete.png", // poubelle
  profile: "/src/assets/images/profile.png",
  stop: "/src/assets/images/delete.png", //
  block: "/src/assets/images/block.png",
  reviens: "/src/assets/images/arrow.png",
};

export const ButtonMenu = styled.button`
  // border: 1px solid white;
  width: 550px;
  height: 45px;
  font-size: 15px;
  font-family: "PS", sans-serif;
  align-content: center;
  text-align: center;
  border-radius: 8px;
  // border: 1px solid transparent;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    background-color: #646cff;
  }
`;

export const LinkButton = styled(Link)`
  // border: 1px solid white;
  margin-bottom: 5px;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  // width: 100%;
  &hover {
    color: #646cff;
  }
`;
export interface Category {
  id: number;
  name: string;
  srcimg?: string;
  path: string;
  route: string;
}

export const GameRoomRoute: Category = {
  id: 0,
  name: "GameRoom",
  path: "/src/pages/Game/GameRoom.tsx",
  route: "/gameroom/:gameUUID",
};

export interface SubCategory {
  id: number;
  name: string;
  srcimg: string;
  path: string;
  route: string;
}

export const Home: Category = {
  id: 0,
  name: "Home",
  path: "/src/pages/Test.tsx",
  srcimg: "/src/assets/images/Home.png",
  route: "/Test",
};

export const Chat: Category = {
  id: 1,
  name: "Chat",
  path: "/src/pages/Chat.jsx",
  srcimg: "/src/assets/images/Chat2.png",
  route: "/Chat",
};

export const Game: Category = {
  id: 2,
  name: "GameCreate",
  path: "/src/pages/GameCreate.tsx",
  srcimg: "/src/assets/images/Game.png",
  route: "/gamecreate",
};

export const Gamelist: Category = {
  id: 15,
  name: "Gamelist",
  path: "/src/pages/Gamelist.tsx",
  srcimg: "/src/assets/images/Game.png",
  route: "/gamelist",
};

export const Setting: Category = {
  id: 3,
  name: "Setting",
  path: "/src/pages/Setting.tsx",
  srcimg: "/src/assets/images/Setting.png",
  route: "/Setting",
};

export const User: Category = {
  id: 1,
  name: "User",
  path: "/src/pages/User.tsx",
  srcimg: "/src/assets/images/UserFinal.png",
  route: "/User",
};

export const QRCode: Category = {
  id: 1,
  name: "QRCode",
  path: "/src/pages/QRCode.tsx",
  srcimg: "/src/assets/images/QRCode.png",
  route: "/QRCode",
};

export const Music: Category = {
  id: 4,
  name: "Music",
  path: "/src/pages/Music.tsx",
  srcimg: "/src/assets/images/Music.png",
  route: "/Music",
};

export const Resume: Category = {
  id: 5,
  name: "Chat",
  path: "/src/pages/Chat/Chat.tsx",
  srcimg: "/src/assets/images/Chat2.png",
  route: "/Chat",
};

export const UserAdd: Category = {
  id: 5,
  name: "UserAdd",
  path: "/src/pages/UserAdd.tsx",
  srcimg: "/src/assets/images/UserAdd.svg",
  route: "/UserAdd",
};

export const Test: Category = {
  id: 6,
  name: "Test",
  path: "/src/pages/Test.tsx",
  srcimg: "/src/assets/images/Test.png",
  route: "/Test",
};

export const Display: Category = {
  id: 7,
  name: "Display",
  path: "/src/pages/Display.tsx",
  srcimg: "/src/assets/images/Display.png",
  route: "/Display",
};

export const Moha: Category = {
  id: 7,
  name: "Moha",
  path: "/src/pages/Moha.tsx",
  srcimg: "/src/assets/images/Moha.jpg",
  route: "/Moha",
};

export const TicTacToe: Category = {
  id: 0,
  name: "TicTacToe",
  path: "/src/pages/TicTacToe.tsx",
  srcimg: "/src/assets/images/TicTacToe.gif",
  route: "/TicTacToe",
};

export const Pong: Category = {
  id: 1,
  name: "pong",
  path: "/src/pages/pong.tsx",
  srcimg: "/src/assets/images/Pong.gif",
  route: "/pong",
};

export const Logout: Category = {
  id: 2,
  name: "Logout",
  path: "/src/pages/Logout.tsx",
  srcimg: "/src/assets/images/Logout.png",
  route: "/Logout",
};

export const KatDu: Category = {
  id: 0,
  name: "42",
  path: "/src/pages/42.tsx",
  srcimg: "/src/assets/images/42.svg",
  route: "/42",
};

export const ListUser: Category = {
  id: 0,
  name: "ListUser",
  path: "/src/pages/Friends/ListUser.tsx",
  srcimg: "/src/assets/images/UserListFinal.png",
  route: "/ListUser",
};

export const AddUser: Category = {
  id: 0,
  name: "AddUser",
  path: "/src/pages/AddUser.tsx",
  srcimg: "/src/assets/images/UserAdd.png",
  route: "/AddUser",
};

export const BanUser: Category = {
  id: 0,
  name: "BanUser",
  path: "/src/pages/BanUser.tsx",
  srcimg: "/src/assets/images/BanUser.png",
  route: "/BanUser",
};

export const Casino: Category = {
  id: 0,
  name: "Casino",
  path: "/src/pages/Casino.tsx",
  srcimg: "/src/assets/images/Casino.gif",
  route: "/Casino",
};

export const Clochard: Category = {
  id: 0,
  name: "Clochard",
  path: "/src/pages/Clochard.tsx",
  srcimg: "/src/assets/images/Clochard2.png",
  route: "/Clochard",
};
