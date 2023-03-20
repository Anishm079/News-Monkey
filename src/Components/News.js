import React, { Component } from "react";
import NewItem from "./NewItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 18,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    this.headline = this.capitalizeFirstLetter(this.props.category);
    document.title = this.headline + "-- NewsMonkey";
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updatePage() {
    this.props.setProgress(30)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50)
    let parseData = await data.json();
    this.props.setProgress(70)
    this.setState({
      page: this.state.page,
      articles: parseData.articles,
      loading: false,
      totalResults: parseData.totalResults,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updatePage();
    //eslint-disable-next-line
  }

  fetchMoreData=async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page+1,
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  }

  render() {
    return (
      <div style={{marginTop:'90px'}}>
        <>
          <h1 className="text-center" style={{ margin: "35px 0" }}>
            News Monkey - Top {this.headline} HeadLines
          </h1>
          {this.state.loading && <Loading/>}
          <InfiniteScroll
            dataLength={ this.state.articles? this.state.articles.length:5}
            next={this.fetchMoreData}
            hasMore={this.state.articles? this.state.articles.length !== this.state.totalResults:false}
            loader={<Loading />}
          >
            <div className="container my-4">
              <div className="row row-gap-5">
                {!this.state.loading && this.state.articles &&
                  this.state.articles.map((ele) => {
                    return (
                      <div className="col-md-4 " key={ele.url}>
                        <NewItem
                          imageUrl={ele.urlToImage}
                          title={ele.title}
                          description={ele.description}
                          author={ele.author}
                          date={ele.publishedAt}
                          source={ele.source.name}
                          newsUrl={ele.url}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </InfiniteScroll>
          
        </>
      </div>
    );
  }
}

export default News;
