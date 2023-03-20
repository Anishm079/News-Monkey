import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import React, { Component } from 'react'
import News from './Components/News';
import NavBar from './Components/NavBar';
import LoadingBar from 'react-top-loading-bar'
import About from './Components/About';

export default class App extends Component {

  apikey=process.env.REACT_APP_NEWS_API_KEY
  //console.log(process.env.REACT_NEWS_API_KEY)
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
      <Router>
      <NavBar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        width={3}
      />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} key="general"  pageSize={5} apikey={this.apikey} country="in" category="general"/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={5} apikey={this.apikey} country="in" category="science"/>}/> 
          <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={5} apikey={this.apikey} country="in" category="business"/>}/>
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={5} apikey={this.apikey} country="in" category="entertainment"/>}/>
          <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={5} apikey={this.apikey} country="in" category="health"/>}/>
          <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={5} apikey={this.apikey} country="in" category="sports"/>}/>
          <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={5} apikey={this.apikey} country="in" category="technology"/>}/>
        </Routes>
      </Router>
      </div>
    )
  }
}
