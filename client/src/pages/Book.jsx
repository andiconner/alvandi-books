import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  
`;

const ImgContainer = styled.div`
  flex: 1;
  text-align: right;
`;

const Image = styled.img`
  width: 50%;
  height: 80vh;
  object-fit: cover;
  
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

const Book = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/GVWgj8J/H-1.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Madhouse at the End of the Earth: The Belgica's Journey into the Dark Antarctic Night</Title>
          <Authors>by Julian Sancton</Authors>
          <Desc>
          Meticulously researched and realized, with a deep novelistic flare, Madhouse at the End of the Earth reconstructs the action-packed survival story of an early expedition to the South Pole. Amundson, Cook and an inexperienced, undisciplined crew, on an ill-fated ship, imprisoned in the Antarctic ice and darkness. This tale of adventure, excitement and, indeed, terror will captivate those who were drawn to The Lost City of Z, In the Kingdom of Ice and In the Heart of the Sea. Julian Sancton has gifted us an insanely gripping book from start to finish.
          </Desc>
          <Price>$ 13.99</Price>
          
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Book;
