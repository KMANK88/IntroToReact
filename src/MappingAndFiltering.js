import React from 'react';

const NamesList = (props) => {
  const nameItems = props.names.filter(function(name){
  return  name.length === 4;
  })
    .map(function(name){
        return <li> {name} </li>
    })
    return(
      <div>
        <h3>Names</h3>
        <ul>
          { nameItems }
        </ul>
      </div>
    )
}

const ListOfNumbers = (props) => {
  const Numbers = props.numbers.filter(function(num){
    return num < 70 && num > 30
  })
  .map(function(num){
    return <li> { num } </li>
  })
  return(
    <div>
      <h3> Numbers </h3>
      <ul>
        { Numbers }
      </ul>
    </div>
  )
}

//arrya of objects with books

const Books = (props) => {
  const book = props.books.map(function(book){
    return(
      <div>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      </div>
    )
  })
  return (
    <div>
      <h1>{book}</h1>
    </div>
  )
}

const MappingAndFiltering = (props) => {

  return(
    <div className="jumbotron2">
      <h1>{props.title}</h1>
        <NamesList names={props.allTheData.names} />
        <ListOfNumbers numbers={props.allTheData.numbers}  />
        <Books books={props.allTheData.books} />
      </div>
  )
}

export default MappingAndFiltering;
