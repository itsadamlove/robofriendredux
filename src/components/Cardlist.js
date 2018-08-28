import React from 'react'
import Card from './Card'

const Cardlist = ({robots}) => {
  // Can throw error in the error boundry - not shown in dev mode
  //if (true) {
    //throw new Error('Noooo!')
  //}
  const cardComponent = robots.map(user => {
    return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
  })

  return(
    <div>
      {cardComponent}
    </div>
  )
}

export default Cardlist
