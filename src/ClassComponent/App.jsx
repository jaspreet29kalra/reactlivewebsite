import React,{Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import News from './News';

export default class App extends Component{
    constructor(){
        super()
        this.state={
            language:"hi",
            search:"None"
        }
    }
    changeLanguage=(lang)=>{
        // alert(lang)
        this.setState({language:lang})
        // console.log(this.language)    //wse isme to undefine hi aara h
    }

    changeSearch=(srch)=>{
        console.log(srch)
        this.setState({search:srch})
        if(this.search=="")
        this.setState({serach:"None"})
        else
        this.setState({search:srch})
    }
    render(){
        return(
            <>
            <BrowserRouter>
            <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
            {/* <h1>{this.state.language}</h1> */}
            <Routes>
                <Route path='/' element={<News search={this.state.search} language={this.state.language} category="All"/>}></Route>
                <Route path='/Politics' element={<News search={this.state.search} language={this.state.language} category="Politics"/>}></Route>
                <Route path='/Crime' element={<News search={this.state.search} language={this.state.language} category="Crime"/>}></Route>
                <Route path='/Technology' element={<News search={this.state.search} language={this.state.language} category="Technology"/>}></Route>
                <Route path='/Science' element={<News search={this.state.search} language={this.state.language} category="Science"/>}></Route>
                <Route path='/Education' element={<News search={this.state.search} language={this.state.language} category="Education"/>}></Route>
                <Route path='/Sports' element={<News search={this.state.search} language={this.state.language} category="Sports"/>}></Route>
                <Route path='/IPL' element={<News search={this.state.search} language={this.state.language} category="IPL"/>}></Route>
                <Route path='/Covid19' element={<News search={this.state.search} language={this.state.language} category="Covid19"/>}></Route>
                <Route path='/Jokes' element={<News search={this.state.search} language={this.state.language} category="Jokes"/>}></Route>
                <Route path='/Entertainment' element={<News search={this.state.search} language={this.state.language} category="Entertainment"/>}></Route>
z
            </Routes>
            </BrowserRouter>
              
             {/* <News/> */}
            </>
                )
                
    }
   
}