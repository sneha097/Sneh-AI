'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: rgba(30, 30, 30, 0.6);
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  border-left: 3px solid #854CE6;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(133, 76, 230, 0.3);
    border-left: 3px solid #a78bfa;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(133, 76, 230, 0.05), rgba(133, 76, 230, 0.02));
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const School = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ffffff;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #854CE6, #a78bfa);
    border-radius: 2px;
  }
`;

const Degree = styled.h4`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 12px 0 8px;
  font-weight: 600;
`;

const Date = styled.div`
  font-size: 0.85rem;
  color: #a78bfa;
  padding: 4px 12px;
  background: rgba(133, 76, 230, 0.15);
  border-radius: 14px;
  display: inline-block;
  font-weight: 500;
  margin-bottom: 12px;
`;

const Description = styled.ul`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 12px;
  padding-left: 20px;
  line-height: 1.7;
`;

const DescriptionItem = styled.li`
  margin-bottom: 8px;
  position: relative;
  padding-left: 14px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #854CE6;
  }
`;

const EducationCard = ({ education }) => {
  const descriptionItems = education.description.split('|').map(item => item.trim());

  return (
    <Card
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <Content>
        <School>{education.school}</School>
        <Degree>{education.degree}</Degree>
        <Date>{education.date}</Date>
        <Description>
          {descriptionItems.map((item, index) => (
            <DescriptionItem key={index}>{item}</DescriptionItem>
          ))}
        </Description>
      </Content>
    </Card>
  );
};

export default EducationCard;