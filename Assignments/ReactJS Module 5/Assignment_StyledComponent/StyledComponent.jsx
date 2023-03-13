import React from 'react'
import styled from 'styled-components'
// import Background from './Background'
function StyledComponent() {
  return (
  <div>
      <div>
        
            <H3> <img src="https://shoplineimg.com/5d01cb90fc0d3d0001896b76/5eba06ba46aab9001e6f19f7/x280.webp?source_format=png" alt="" height="50px" style={{float:"left"}} />BigCart</H3>
        </div>
       <Nav> 
       
      <Button>Home</Button>
       <Button>About</Button>
       <Button>Contact Us</Button>
       <Button>Buy Online</Button>
       <Button>News</Button>
       <Button>Add To Cart</Button>
       <input type="text" placeholder='search'style={{padding:"9px",float:"right",margin:"10px"}} />
       </Nav>
       <div style={{background:'url("https://as1.ftcdn.net/v2/jpg/01/71/32/52/1000_F_171325250_VtBJeNOHtTPzq0BD4JEtZTEn0yelBLvW.jpg")no-repeat center center/cover',height:"800px"}}>
         
          <H1>Don't Miss BigCart Special Deals</H1>
      
       </div>
       <Footer>All Rights are reserved !</Footer>
    </div>
  )
}
const Button = styled.button`
padding:10px;
margin:10px;
background-color:white;
color :black;
border-radius:5px;
font-weight:bold`

const H3=styled.h3`color:black;background-color:lightgrey;padding:15px`
const Nav = styled.nav`background-color:tomato;
padding:10px;
`;

const H1=styled.h1`color:white;font-size:60px;text-shadow:2px 2px 2px black;text-align:center`

const Footer=styled.div`color:white;font-weight:bold;background-color:tomato;text-align:center ;padding:10px`
export default StyledComponent
