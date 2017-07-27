import React from 'react';
import faker from 'faker';

const UsersList = (props) => {
  return (
    <div>
      <h1> Found Usres List </h1>
      <ul>
        {
          props.userData.map((user,index) =>{
            return <div>
            <li key={index}> {user.name} </li>
            </div>

          })
        }
      </ul>
    </div>
  )
}

const Counter = (props) => {
  return(
    <div>
        <p> counter: {props.counter}</p>
          <button onClick={
            () => props.increaseCount()}> Increase Counter </button>
          <button onClick={
            () => props.decreaseCount()}> Decrese Counter </button>

    </div>
  )
}

class Playground extends React.Component {

  state = {
    name: "Karsten",
    counter: 0,
    users: null,
    showCounter: true
  }

increaseCount = this.increaseCount.bind(this)
decreaseCount = this.decreaseCount.bind(this)

  componentDidMount() {
    this.fetchUsersFromServer()
    const randomName = faker.name.firstName();
    const someProd = faker.commerce.product();
    alert (someProd);
  }

  fetchUsersFromServer(){
    const users = [
      {name: "Karsten" , id: 1},
      {name: "Emily" , id: 2},
      {name: "John" , id: 3},
      {name: "Joel" , id: 4},
      {name: "Mike" , id: 5},
    ]
    setTimeout(() => {
      this.setState({ users: users })
    }, 3000)
  }

  increaseCount(){
    this.setState ({ counter: this.state.counter +=1})

  }

  decreaseCount(){
    this.setState ({ counter: this.state.counter -=1})
  }

  toggleCounter(){
    this.setState({showCounter: !this.state.showCounter})
  }

  render() {
    return (
      <div className="playground-main">
        <button className={this.state.showCounter ? "open-btn" : "close-btn"}
         onClick={() => this.toggleCounter()}> {this.state.showCounter ? "Open" : "Close"}</button>
        {
        this.state.showCounter
        ?<Counter
        counter={this.state.counter}
        increaseCount={this.increaseCount}
        decreaseCount={this.decreaseCount}
        />: null
      }
      {
        this.state.users
        ? <UsersList userData={this.state.users}/>
        : <h1> Users Being Loaded</h1>
          }

      </div>
    )
  }

}
export default Playground;
