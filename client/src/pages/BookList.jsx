import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Books from "../components/Books";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
 
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
 
`;
const Option = styled.option``;

const BookList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>BOOKS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Books:</FilterText>
          <Select>
            <Option disabled selected>
              Category
            </Option>
            <Option>Fiction</Option>
            <Option>Non-Fiction</Option>
            <Option>Kids</Option>
          </Select>
         
        </Filter>
        <Filter>
          <FilterText>Sort Books:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Books/>
      <Newsletter/>
      <Footer />
    </Container>
  );
};

export default BookList;
