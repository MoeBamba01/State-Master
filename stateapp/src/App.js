import React, { Component} from "react";
import './App.css';

class App extends Component {
    state = {
      person: {
        fullName: "Moe Bamba",
        bio: "Stack Mern Junior",
        imgSrc: "https://img.freepik.com/free-photo/african-american-young-programmer-wearing-headphone-while-typing-security-codes-business-website-working-rmeote-from-home-employee-programming-software-application-software-screen_482257-28569.jpg?w=826&t=st=1681928123~exp=1681928723~hmac=c9a08ad5e221d0961786bf6873f41fcd39058c9aaa56f8f66c39de4b5e96ca4d",
        profession: "Web Developer"
      },
      show: false,
      mountedTime: 0
    };
  
    toggleShow = () => {
      this.setState({ show: !this.state.show });
    };
  
    componentDidMount() {
      this.interval = setInterval(
        () => this.setState({ mountedTime: this.state.mountedTime + 1 }),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      const { fullName, bio, imgSrc, profession } = this.state.person;
      const { show, mountedTime } = this.state;
  
      return (
        <div>
          
          <button style={{marginLeft:"25px",marginTop:'25px'}}  onClick={this.toggleShow} style={{marginLeft:"25px",marginTop:'25px'}} className="button">
            {show ? "Hide Profile" : "Show Profile"}
          </button>
          <br />
          <br />
          {show && (
            <div>
              <div className='d-flex' style={{marginLeft:"600px"}}>
              <div className="p-4"></div>
              <img src={imgSrc} style={{ width: '200px', height: '200px', borderRadius: '50%' }}/>
              <div className="" style={{marginTop:'100px'}}>
              <span style={{fontSize:"28px",fontWeight:"bold",fontFamily: 'Mynerve',background:`black,black)`}}>{fullName}</span>
              <p style={{fontSize:"18px",fontWeight:"bold",fontFamily: 'Inter',color:`black`}}>{profession}</p>
              <p style={{fontSize:"18px",fontWeight:"bold",fontFamily: 'Inter',color:`black`,fontStyle:'italic'}}>{bio}</p>
            </div>
            </div>
            </div>
          )}
          <p>Component mounted since: {mountedTime} seconds</p>
        </div>
      );
    }
  }

  export default App
