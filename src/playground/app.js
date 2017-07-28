import React from 'react';
import faker from 'faker';
import Counter from './Counter';
import UsersList from './UsersList';

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
