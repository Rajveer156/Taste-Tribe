import React from 'react'
import {menu} from '../restApi.json'
const Chapter_8 = () => {
  return (
    <>
      <section className='sabji_s' id='sabji_s'>
        <div className="f_container">
            <div className="s_container">
                <h1 className="heading">Veg. Sabji</h1>
            </div>
            <div className="dishes_container">
                {
                    menu[0].sjs.map(element => (
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

export default Chapter_8
