import React from 'react'
import ItemCard from './ItemCard'
import data from "./productData"
function Home() {
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">This is a Shopping Cart</h1>
            <section className="py- container">
                <div className="row justify-content-center">
                {
                    data.productData.map((item,index) => {
                        return (
                        <ItemCard 
                        img={item.img} 
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        key={index}
                        item={item}
                        />

                        )
                    })
                }
                </div>
            </section>
            {/* <div className={theme ? 'theme-dark' : ''}>
      <div className="content-bg-color main-content">
        <h1 className="
        text-info">dark mode</h1>
        <input
          type="checkbox"
          onChange={() => setTheme(!theme)}
          checked={theme ? 'true' : ''}
        />
      </div>
    </div> */}
        </div>
    )
}

export default Home
