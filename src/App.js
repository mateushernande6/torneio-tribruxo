import { Component } from "react";
import "./App.css";
import Students from './components/students/Students'

class App extends Component {

  state = {
    allStudents: [],

  }

  IAmFetch = () => {
    fetch('https://hp-api.herokuapp.com/api/characters/students' )
    .then(response => response.json())
    .then(dados => {
      this.setState({
        allStudents: [...this.state.allStudents, ...dados]
      })
    })
    .catch((err) => console.log(err))
  }

  componentDidMount(){
    this.IAmFetch()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Students getStudents={this.state.allStudents}/>
        </header>
      </div>
    );
  }
}

export default App;
