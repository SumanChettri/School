import React from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Styled Components
const PageWrapper = styled.div`
  background-color: #f5f5f5;
  overflow-x: hidden;
`;

const HeroContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  padding: 1px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9));
`;

const SliderWrapper = styled.div`
  margin: 2rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #ffffff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #ffffff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }

  a {
    display: inline-block;
    padding: 0.75rem 2rem;
    background-color: #ff7f50;
    color: #fff;
    font-weight: bold;
    border-radius: 50px;
    text-decoration: none;
    transition: transform 0.3s ease, background-color 0.3s ease;
    animation: ${bounce} 2s infinite;

    &:hover {
      background-color: #ff4500;
      transform: scale(1.1);
    }
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 10px;
  }
  .slick-dots li button:before {
    color: white;
    font-size: 12px;
  }
  .slick-dots li.slick-active button:before {
    color: #ff4500;
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`


  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #ff4500;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const PrincipalCard = styled(Card)`
    color:black;

  h3 {
    color: #ff4500;
   
  }

  p {
   color: #666;
    line-height: 1.6;
  }
`;

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroContainer>
        <SliderWrapper>
          <StyledSlider {...sliderSettings}>
            <div>
              <img src="images/bg1.jpg" alt="Slide 1" />
            </div>
            <div>
              <img src="images/bg2.jpg" alt="Slide 2" />
            </div>
            <div>
              <img src="images/bg3.jpg" alt="Slide 3" />
            </div>
          </StyledSlider>
        </SliderWrapper>
        <HeroText>
          <h1>Welcome to Sikkim School</h1>
          <p>A blend of tradition and modern education</p>
          <a href="/admissions">Get Started</a>
        </HeroText>
      </HeroContainer>

      {/* Meet Our Section */}
      <Section>
        <SectionTitle>Meet Our</SectionTitle>
        <Grid>
          <PrincipalCard>
            <img src="images/principal.jpg" alt="Principal" />
            <h3>Principal</h3>
            <p>
              Our principal leads the school with a vision for excellence and a
              commitment to student success.
            </p>
          </PrincipalCard>
          <Card>
            <img src="images/teaching_staff.jpg" alt="Teaching Staff" />
            <h3>Teaching Staff</h3>
            <p>
              Our teaching staff is dedicated to providing the best education
              and support to our students.
            </p>
          </Card>
          <Card>
            <img src="images/non_teaching_staff.jpg" alt="Non-Teaching Staff" />
            <h3>Non-Teaching Staff</h3>
            <p>
              Our non-teaching staff ensures the smooth operation and
              maintenance of our school facilities.
            </p>
          </Card>
        </Grid>
      </Section>
    </PageWrapper>
  );
};

export default Home;