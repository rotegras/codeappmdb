import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // width: 60%;
  // padding: 4rem;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
`;

const AddButton = styled(Button)`
`;


export { Wrapper, Inner, Input, Textarea, AddButton };
