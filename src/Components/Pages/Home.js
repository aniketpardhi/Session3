import React from 'react'

const Home = ({mytyle,display,alignItem,gap,padding,background}) => {
    
  return (
    <>
    <div className="container">
        <div className="navbar" style={mytyle.data}>
            <div className="logo">
                <h3>MyLogo</h3>
            </div>
            <div className="list">
                <ul style={{alignItem,display,gap,padding,background}}>
                  
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home