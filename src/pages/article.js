import { NavLink, useParams } from "react-router-dom";
import "../styles/articles.css"

function getArticle(id) {
    const article = require(`../articles/${id}.json`)
    return article
}

export default function Article() {
    const params = useParams()
    const article = getArticle(params.articleID)
    return (
        <div>
            <div className="project-header">
                <NavLink to="/posts">Posts</NavLink>
                <i className="material-icons">navigate_next</i>
                <h2>{article.name}</h2>
            </div>
            <section style={{ marginTop: "30px" }}>
                <div className="banner-container">
                    <img
                        src={require(`../img/articleBanners/${article.banner}`).default}
                        alt=""
                        className="banner"
                    />
                </div>
                <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </section>
        </div>)
}