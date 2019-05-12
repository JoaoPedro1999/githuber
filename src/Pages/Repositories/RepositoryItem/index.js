import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container, Title, InfoContainer, Info, InfoText,
} from './styles';

const RepositoryItem = ({ repository }) => (
  <Container>
    <Title>{repository.full_name}</Title>
    <InfoContainer>
      <Info>
        <Icon name="star" size={12} color="#666" />
        <InfoText>{repository.stargazers_count}</InfoText>
      </Info>
      <Info>
        <Icon name="code-fork" size={12} color="#666" />
        <InfoText>{repository.forks_count}</InfoText>
      </Info>
      <Info>
        <Icon name="eye" size={12} color="#666" />
        <InfoText>{repository.watchers_count}</InfoText>
      </Info>
    </InfoContainer>
  </Container>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};

export default RepositoryItem;
