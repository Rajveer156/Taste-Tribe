import React from 'react'
import {menu} from '../restApi.json'
const Chapter_7 = () => {
  return (
    <>
      <section className='dessert' id='dessert'>
        <div className="f_container">
            <div className="s_container">
                <h1 className="heading">Dessert</h1>
            </div>
            <div className="dishes_container">
                {
                    menu[0].dt.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <div className='overlay'>
                                  <txt className="txt" >{element.text}</txt>
                                </div>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Chapter_7
