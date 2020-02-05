import React, {Component} from "react";
import API from "../utils/API";

class Movies extends Component {
    state = {
        movies: []
    };

    componentDidMount(){
        this.loadMovies();
    }

    loadMovies = () => {
        API.getMovies()
            .then(res => this.setState({movies: res.data}))
            .catch(err => console.log(err));
    };

    render(){
        return(
            <div>
                <p>Movies Component</p>
                <p>{this.state.movies}</p>
            </div>
        )
    }
}

export default Movies;