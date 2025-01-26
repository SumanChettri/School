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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    animation: ${fadeIn} 1s ease-in-out;
  }

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    animation: ${fadeIn} 1.5s ease-in-out;
  }

  a {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.75rem 1.5rem;
    background-color: #ff7f50; /* Coral */
    color: #ffffff;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
    animation: ${pulse} 2s infinite;

    &:hover {
      background-color: #ff4500; /* Orange Red */
      transform: scale(1.1);
    }
  }
`;

const PrincipalSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffffff, #f3f4f6);
  color: #333;
  padding: 3rem 1rem;
  margin: 4rem 1rem; /* Added gap between sections */
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: relative;
  font-family: "Georgia", "Times New Roman", serif;

  .image-container {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .principal-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin: 1rem 0;
  }

  .signature {
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 600;
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 2rem;

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
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
    <div className="bg-gradient-to-b from-orange-100 to-orange-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative text-center text-white bg-gradient-to-b from-orange-500 to-yellow-400">
        <Slider {...sliderSettings} className="relative">
          {["bg1.jpg", "bg2.jpg", "bg3.jpg"].map((img, index) => (
            <div key={index} className="p-2">
              <img
                src={`images/${img}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px] lg:h-[700px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
        <HeroText>
          <h1 className="text-4xl lg:text-6xl">Welcome to Sikkim School</h1>
          <p className="text-lg lg:text-2xl mt-4">
            A blend of tradition and modern education
          </p>
          <a href="/admissions">Get Started</a>
        </HeroText>
      </div>

      {/* Principal Section */}
      <PrincipalSection>
        <div className="image-container mt-5">
          <img
            src="/images/principal.jpg"
            alt="Principal"
            className="principal-image"
          />
        </div>
        <h2>From the Desk of Principal</h2>
        <p>
          It is with great pleasure that I welcome you to our School Website. As
          you navigate through the site, you will discover the many offerings of
          our school, including academic excellence and student life. We aim to
          nurture holistic development through a partnership between home and
          school.
        </p>
        <p>
          Let us work together to create an environment where all students can
          thrive and achieve their best.
        </p>
        <div className="signature">Suman Tewari</div>
        <div>Principal</div>
      </PrincipalSection>

      {/* Meet Our Section */}
      <section className="py-16 text-center bg-gradient-to-b from-teal-100 to-cyan-50">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {[
            {
              img: "teaching_staff.jpg",
              title: "Teaching Staff",
              desc: "Dedicated to providing the best education and support.",
            },
            {
              img: "non_teaching_staff.jpg",
              title: "Non-Teaching Staff",
              desc: "Ensuring smooth operations and maintenance.",
            },
            {
              img: "student_council.jpg",
              title: "Student Council",
              desc: "Representing students and organizing activities.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-xl transform transition-all hover:scale-105"
            >
              <img
                src={`images/${item.img}`}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-2xl mb-4"
              />
              <h3 className="text-xl font-bold text-teal-600">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
