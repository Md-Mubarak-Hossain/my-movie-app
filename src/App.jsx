import React from 'react';
import './App.css';
import unirest from 'unirest';
import Movie from "./components/Movie.jsx";
import Search from './components/Search.jsx';
class App extends React.Component {
 
 sendRequest = (title) => {
   const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

   req.query({
     "page": "1",
     "r": "json",
     "s": title
   });

   req.headers({
     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
     "x-rapidapi-key": "a7cfa4ef05msh8cec39513c262bfp11f466jsn82a5d2d5c838"
     
   });

   state = {
    movies: []
  }
   req.end((res) => {
    if (res.error) throw new Error(res.error);
    const movies = res.body.Search;
    this.setState({movies});
  });
 }

 render() {
   return (<div className="App">
       <header className="App-header">
       {
       this.state.movies.map((movie) => {
     return <Movie {...movie}/>
   })
  }
      <Search handleSendRequest={this.sendRequest}/>
       </header>
     </div>
   );
 }
 

}

export default App;