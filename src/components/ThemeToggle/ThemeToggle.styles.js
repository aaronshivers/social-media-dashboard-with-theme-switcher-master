import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
`;

const Span = styled.label`
  text-transform: capitalize;
  color: ${({ theme }) => theme.textAlt};
  font-weight: bold;
  white-space: nowrap;
  margin-right: 2rem;
`;

export {
  Label,
  Span,
};
