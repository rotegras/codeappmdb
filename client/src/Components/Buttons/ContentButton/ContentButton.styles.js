import styled from 'styled-components';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  margin:  0 ${({ theme }) => theme.padding.halfNormal};
  z-index: 1030;
`;

const Inner = styled.button`
  color: ${(props) => props.theme.colors[props.color]};
  background: ${(props) => props.theme.colors[props.type]};
  padding:  ${({ theme }) => theme.padding.contentButton};
  border: 1px solid ${(props) => props.theme.colors[props.color]};
  border-radius: .25rem;
  color: white;
  display: flex;
  align-items: center;
  height: 24px;
  font-size: ${({ theme }) => theme.fontSize.small};

  &:hover {
    cursor: pointer;
  }
`;

Inner.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

Inner.defaultProps = {
  type: 'transparent',
  color: 'white'
}


export { Wrapper, Inner };
