import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import faker from 'faker';
import Counter from './Counter';
import UsersList from './UsersList';


class Playground extends React.Component {

  state = {
    firstName: "Karsten",
    lastName: null,
    img: null,
    counter: 0,
    users: null,
    showCounter: true
  }

increaseCount = this.increaseCount.bind(this)
decreaseCount = this.decreaseCount.bind(this)

  componentDidMount() {
    this.fetchUsersFromServer();
  }

  fetchUsersFromServer = () => {
    //temporary array to hold people.
    //for loop to create person and push into temp array
    //set state of users to temp array.
    const temporaryArray = [];
    for(var i=0; i<20; i+=1){
      temporaryArray.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        img: faker.random.image()
      })
    }
    this.setState({users: temporaryArray});
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

  updateFirstName = (event) => this.setState({firstName: event.target.value})
  updateLastName = (event) => this.setState({lastName: event.target.value})
  updateImg = (event) => this.setState({img: event.target.value});

  handleFormSubmit = (event) => {
  event.preventDefault();
    const person = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      img: this.state.img,
    }
    console.log(person)
    let peopleArr = this.state.users.push(person)
    this.setState({users: this.state.users.concat(peopleArr)})
  }

  render() {
    return (
      <div className="playground-main">
      <form onSubmit={this.handleFormSubmit}>
      <input onChange={this.updateFirstName}/>
      <input onChange={this.updateLastName}/>
      <input onChange={this.updateImg}/>
        <button type="submit">Submit</button>
        </form>
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
