import React from 'react';

import { Add, Remove } from "@material-ui/icons"; //Change Book
import styled from "styled-components";

import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { mobile } from "../utils/responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
//import { publicRequest } from "../requestMethods";
import { allBooks } from "../utils/data";
import { useParams } from 'react-router-dom'
// import { useDispatch } from "react-redux";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  text-align: right;
  ${mobile({ padding: "10px", textAlign: "center" })}
`;

const Image = styled.img`
  width: 50%;
  height: 80vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

`;

const Title = styled.h1`
  font-weight: 200;
`;
const Authors = styled.h4`
  font-weight: 200;
  font-style: italic;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Book = (item) => {
  const location = useLocation();
  const {id} = useParams ()
  // const id = location.pathname.split("/")[2];
  // const [book, setBook] = useState({});
  const book = allBooks.find(book => book.id == id);
  const [quantity, setQuantity] = useState(1);
 
console.log (id)

  const {
    title,
    authors,
    img,
    price,
    //quantity
  } = item;

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // const handleClick = () => {
     // dispatch(
    //  addBook({ ...book, quantity })
    // );
    const shoot = () => {
      
      alert("Great Shot!");
    // dispatch(
    //  addBook({ ...book, quantity })
    // );
  };


    return (
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src={book.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{book.title}</Title>
            <Authors>{book.authors}</Authors>
            <Desc>
            {book.desc}
            </Desc>
            <Price>{book.price}</Price>
            
            <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={shoot}>ADD TO CART</Button>
          </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    );
};
  

export default Book;
