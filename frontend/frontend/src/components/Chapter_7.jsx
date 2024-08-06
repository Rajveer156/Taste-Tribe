import React from 'react'
import {menu} from '../restApi.json'
const Chapter_6 = () => {
  return (
    <>
      <section className='rice' id='rice'>
        <div className="f_container">
            <div className="s_container">
                <h1 className="heading">Rice And Biryani</h1>
            </div>
            <div className="dishes_container">
                {
                    menu[0].rc.map(element => (
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

export default Chapter_6
