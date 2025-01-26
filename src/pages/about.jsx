import React from 'react';
import styled from 'styled-components';
import 'animate.css';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  color: #333;
  padding: 2rem;
  overflow: hidden;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size:30px;
  font-family: times new roman;
  @apply text-5xl font-extrabold mb-4;
  color: #1a73e8;
`;

const Subtitle = styled.p`
  @apply text-lg text-gray-600 italic;
`;

const ImageBanner = styled.div`
  position: relative;
  margin: 2rem 0;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Section = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 80px;
    margin-bottom: 1rem;
  }

  h3 {
    @apply text-xl font-bold mb-2;
    color: #1a73e8;
  }

  p {
    @apply text-gray-600;
  }
`;

const VideoSection = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  iframe {
    width: 100%;
    max-width: 720px;
    height: 400px;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const AboutUs = () => {
  return (
    <Container>
      <HeaderSection className="animate__animated animate__fadeInDown">
        <Title>About Our School</Title>
        <Subtitle>
          Inspiring young minds to achieve excellence in education and beyond.
        </Subtitle>
      </HeaderSection>

      <ImageBanner className="animate__animated animate__fadeIn">
        <BannerImage
          src="/images/school_building.jpg"
          alt="Beautiful school campus"
        />
      </ImageBanner>

      <Section className="animate__animated animate__fadeInUp">
        <h2 className="text-2xl font-bold text-center mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At [School Name], we are committed to fostering a nurturing
          environment where students can excel academically, socially, and
          emotionally. Our mission is to provide holistic education that equips
          students with the skills and values to make a meaningful impact on
          the world.
        </p>
      </Section>

      <Section className="animate__animated animate__fadeInUp">
        <h2 className="text-2xl font-bold text-center mb-4">Our Features</h2>
        <FeaturesGrid>
          {[
            {
              icon: '/icons/academic.png',
              title: 'Academic Excellence',
              description:
                'Our programs are designed to promote critical thinking and creativity.',
            },
            {
              icon: '/icons/sports.png',
              title: 'Sports & Activities',
              description:
                'A variety of extracurricular activities to nurture every talent.',
            },
            {
              icon: '/icons/library.png',
              title: 'Modern Library',
              description:
                'Access to a vast collection of books and digital resources.',
            },
            {
              icon: '/icons/tech.png',
              title: 'Tech-Enabled Learning',
              description:
                'Smart classrooms and state-of-the-art labs for hands-on learning.',
            },
          ].map((feature, index) => (
            <FeatureCard key={index}>
              <img src={feature.icon} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>

      <VideoSection className="animate__animated animate__zoomIn">
        <h2 className="text-2xl font-bold text-center mb-4">
          Watch Our Introduction
        </h2>
        <iframe
          src="https://www.youtube.com/embed/example"
          title="School Introduction Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoSection>
    </Container>
  );
};

export default AboutUs;
