'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import imageBg from './images/images/cta-bg.png'
import imageProduct from './images/images/FOOD CONSULTANT (2).png'


// Styled components
const Section = styled.section`
  padding: 4rem 0;
   background: url(${imageBg}) center/cover no-repeat; /* Correct interpolation *;
  
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: Green;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: black;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SolutionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const SolutionText = styled.p`
  color: #718096;
  margin-bottom: 1.5rem;
`;

const Button = styled(motion.button)`
  background-color: var(--emerald);
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--emerald);
    transform: translateY(-0.25rem);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  height: 24rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

export default function FoodSection() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TextCenter>
            <Title>Your Food, Our Passion</Title>
            <Subtitle>
              Are You Facing Food Safety & Quality-Related Issues In Your Food Business?
            </Subtitle>
          </TextCenter>
        </motion.div>

        <Grid>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SolutionTitle>
              Food Technology Labs Offers Unique Solutions For This!
            </SolutionTitle>
            <SolutionText>
              Our experts are ready to assist you with short-term needs or long-term projects. You're just one click away
              from the solution you've been searching for.
            </SolutionText>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HIRE A FOOD CONSULTANT
            </Button>
          </motion.div>

          <ImageContainer
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img width="100%" height="100%" src={imageProduct} alt="" />
          </ImageContainer>
        </Grid>
      </Container>
    </Section>
  );
}
