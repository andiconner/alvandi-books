import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { allBooks } from "../utils/data";
import Book from "./Book";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Books = (props) => {
  const {category} = props

  return (
    <Container>
      {console.log(category,allBooks)}
      {allBooks.map((item) => {
           
       if (category===item.category){
        console.log(category, item.id)
        return   <Book item={item} key={item.id} />
       }
       else {
         return ""
       }
    
      })}
    </Container> 
  );
};

export default Books;