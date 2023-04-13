import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  List,
  Item,
  Label,
  Percentage,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const isOpen = true;
  return (
    <Section>
      {isOpen && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage> {percentage} </Percentage>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
