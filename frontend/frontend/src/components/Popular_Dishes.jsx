import React from 'react'
import {data} from '../restApi.json'
const popular_dishes = () => {
  return (
    <>
      <section className='p_dish' id='p_dish'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>These are the most popular dishes among the customers and we recommend you to try atleast once.
                </p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                        </div>
                    ))
                }   
            </div>
            <div className="heading_section">
                <h1 className="heading">POPULAR BOOKS</h1>
                <p>These are the most popular Books among the customers and we recommend you to try atleast once.
                </p>
            </div>
            <div className="dishes_container">
                {
                    data[0].books.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default popular_dishes
