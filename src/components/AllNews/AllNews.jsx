import { useEffect } from "react";
import { useState } from "react";
import News from "../News/News";


const AllNews = () => {

    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(news => setAllNews(news))
    }, []);


    return (
        <section className="col-span-3">
            <h3 className="text-2xl font-semibold">Dragon News Home</h3>
            <div className="mt-6 space-y-6">
                {
                    allNews.map(news => <News
                        key={news._id}
                        news={news}></News>)
                }
            </div>
        </section>
    );
};

export default AllNews;