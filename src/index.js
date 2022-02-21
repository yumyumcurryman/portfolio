import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./pages/projects";
import Home from "./pages/home";
import Project from "./pages/project";
import Posts from "./pages/posts";
import Article from "./pages/article";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/projects/:projectId" element={<Project />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:articleID" element={<Article />} />
                </Routes>
                <div id="footer">
                    <p>© 2021 Micah Elias. All rights reserved.</p>
                </div>
                <NavBar />
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
