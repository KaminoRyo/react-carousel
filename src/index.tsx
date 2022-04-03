import React from "react"
import { createRoot } from "react-dom/client";
import { Carousel } from "./Carousel";
import { urlList } from "./model/UrlList";

const container = document.getElementById("root")
if (container === null) { throw new Error("コンテナ要素となるタグが見つかりません") }
const root = createRoot(container)
root.render(<Carousel urlList={urlList} />)