import { Component } from "react";
import { Card, Img } from "./style";

class Layout extends Component {
  render() {
    return (
      <>
        {this.props.tri.map((item, index) => (
            
          <Card idd={index} key={index}>
              {console.log(<Card key={index}/>)}
            <Img src={item.image} alt=""/>
            <h2>{item.name}</h2>
            <p>{item.house}</p>
          </Card>
        ))}
      </>
    );
  }
}
export default Layout;
