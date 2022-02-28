import { NavLink } from "react-router-dom"
import articles from "../static/articles.json"
import "../styles/articles.css"

export default function Posts() {
    return (
        <div id="posts-page">
            <h2>Posts</h2>
            <hr style={{ marginBottom: "20px" }} />
            {articles.articles.map((article) => (
                <NavLink to={`/blog/${article.id}`} >
                    <Post key={article.id} article={article} />
                </NavLink>
            ))
            }
        </div >
    )
}

const Post = (props) => {
    const article = require(`../articles/${props.article.id}.json`)
    console.log(article.content)
    return (
        <div className="article-item">
            <div className="article-preview-left">
                <div>
                    <h3 style={{ marginBottom: 0, marginTop: 0 }}>{article.name}</h3>
                    <p className="article-preview" dangerouslySetInnerHTML={{ __html: article.blurb }} />
                </div>
            </div>
            <p className="datePub">{article.datePublished}</p>
        </div>
    )
}