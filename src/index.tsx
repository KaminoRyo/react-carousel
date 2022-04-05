import React from "react"
import { createRoot } from "react-dom/client";
import { Carousel } from "./component/Carousel";
import { imageAndLinkUrls } from "./model/UrlList";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
  }
`;

const container = document.getElementById("root")
if (container === null) { throw new Error("コンテナ要素となるタグが見つかりません") }
const root = createRoot(container)
root.render(
  <div>
    <GlobalStyle />
    <Carousel imageAndLinkUrls={imageAndLinkUrls} />
  </div>
)