import NewsItem from "./NewsItem";


const News = (props) =>{

    let newsItem = props.state.map((item) => <NewsItem title={item.title} info={item.info} />);

    return (
        <div className="news">
            <div className="news__title">Главные новости</div>
            <div className="news__content">
                {newsItem}
            </div>
        </div>
    )
}

export default News