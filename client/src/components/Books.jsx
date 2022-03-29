import styled from "styled-components";
import { allBooks } from "../utils/data";
import Book from "./Book";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Books = () => {

  return (
    <Container>
      
      {allBooks.map((item) => (
        <Book item={item} key={item.id} />
      ))}
    </Container> 
  );
};

export default Books;