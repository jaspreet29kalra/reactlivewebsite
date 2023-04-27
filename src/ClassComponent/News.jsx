import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

export default class News extends Component{
    constructor(){
        super()
        this.state={
            articles:[],
            totalResult:0,
            page:1,
            pageSize:8
        }
    }
    async getData(){
        // console.log(this.props.search);
        if(this.props.search=="None")
            var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=${this.props.language}&page=${this.state.page}&pageSize=${this.pageSize}&apiKey=1ce5320826ae45279ac14a25da94e670`)
            else
            var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&page=${this.state.page}&pageSize=${this.pageSize}&apiKey=1ce5320826ae45279ac14a25da94e670`)
            var result = await rawdata.json()
            // console.log(result);
            this.setState(
                {
                    articles:result.articles,
                    totalResult:result.totalResults
                }
            )
// console.log(result.totalResults)
            
    }
    componentDidMount(){
        this.getData()
    }
    componentDidUpdate(old){
        if(this.props.category!=old.category||this.props.language!=old.language || this.props.search!=old.search)
        this.getData()
    }
    fetchMoreData=async()=>{
        this.setState({page:this.state.page+1})
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&language=${this.props.language}&page=${this.state.page}&pageSize=${this.pageSize}&apiKey=1ce5320826ae45279ac14a25da94e670`)
        var result = await rawdata.json()
        // console.log(result);
        this.setState(
            {
                articles:this.state.articles.concat(result.articles)
                
            }
        )
    }
    render(){
        return(
            <>
            {/* <h5 className='mt-1 background text-light p-2 text-center'> News Section</h5> */}
            <h5 className='mt-3 background text-light p-2 text-center'> {this.props.category} News Section</h5>
            {/* <div className="row"> */}
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length<this.state.articles.totalResult}
                loader={<Spinner/>}
                >
                <div className='row'>
                {
                this.state.articles.map((item,index)=>{
                return <div key ={index} className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                    <NewsItem
                    title={item.title}  //ye newsapi se attribute liya ese or bhi boht attributes h
                    description={item.description}
                    url={item.url}
                    pic={item.urlToImage} 
                    source={item.source} 
                    date={item.publishedAt}  
                    />
                </div>
})
            }
                </div>
                </InfiniteScroll> 
            {/* </div> */}
            </>
        )
    }
}