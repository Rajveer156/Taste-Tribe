import React from 'react'
import {menu} from '../restApi.json'
const Chapter_3 = () => {
  return (
    <>
      <section className='pizza' id='pizza'>
        <div className="f_container">
            <div className="s_container">
                <h1 className="heading">Pizza</h1>
            </div>
            <div className="dishes_container">
                {
                    menu[0].piz.map(element => (
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

export default Chapter_3
