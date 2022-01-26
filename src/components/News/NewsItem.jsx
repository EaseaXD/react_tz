const NewsItem = (props) =>{
    return(
        <div className="news__item">
            <h3 className="news__item__title">{props.title}</h3>
            <p className="news__p">{props.info}</p>
        </div>
    )
}
export default NewsItem