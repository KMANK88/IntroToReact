import React from 'react';

const UsersList = (props) => {
  return (
    <div>
      <h1> Found Usres List </h1>

      <div className='userCardContainer'>
        {
          props.userData.map((users,index) =>{
            return(
            <div className='userCard'>
              <h3>{users.firstName}</h3>
              <h3>{users.lastName}</h3>
              <img src={users.img} />
            </div>
          )
          })
        }
      </div>
    </div>
  )
}

export default UsersList;
