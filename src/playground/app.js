import React from 'react';

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



class Playground extends React.Component {

  state = {
    name: "Karsten",
    counter: 0,
    users: null
  }



  componentDidMount() {
    this.fetchUsersFromServer()
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

  incrementCounter(){
    this.setState ({ counter: this.state.counter +=1})

  }

  decreseCounter(){
    this.setState ({ counter: this.state.counter -=1})
  }

  render() {
    return (
      <div>
        <h1> my name is: {this.state.name} </h1>
        <p> counter: {this.state.counter}</p>
        <button onClick={
          () => this.incrementCounter()}> Increase Counter </button>
          <button onClick={
            () => this.decreseCounter()}> Decrese Counter </button>

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
