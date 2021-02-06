import { Component } from "react";
import console from "react-console";
import Layout from "../layout/Layout";
import { Container, MyButton } from "./style";

class Students extends Component {
  state = {
    triStudents: [],
  };

  sortTri = () => {
    const { getStudents } = this.props;
    let verify = [];
    while (verify.length < 3) {
      const studentRandom = Math.floor(Math.random() * getStudents.length);
      if (verify.includes(studentRandom) === false) {
        verify = [...verify, studentRandom];
      }
    }
    this.setState({
      triStudents: [...verify.map((item) => getStudents[item])],
    });
  };

  componentDidUpdate() {
    console.log(this.state.triStudents);
  }

  render() {
    const {triStudents} = this.state
    return (
      <>
        {triStudents.length ? (
          <Container>
            <Layout tri={triStudents} />
          </Container>
        ) : (
          <div>
            <h1>Torneio Tribruxo</h1>
            <p>Clique no botão para encontrar os feiticeiros</p>
          </div>
        )}
       
        <MyButton onClick={this.sortTri}>{triStudents.length ? 'Tentar Novamente' : 'Começar'}</MyButton>
      </>
    );
  }
}
export default Students;
