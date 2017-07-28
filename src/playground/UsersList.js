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

export default UsersList;
