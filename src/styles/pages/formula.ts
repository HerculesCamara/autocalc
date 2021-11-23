import styled from 'styled-components'

export const FormulaContent = styled.div`
  display: relative;
`

export const PostContent = styled.div`
  color: ${props => props.theme.colors.grayMedium};
  padding: 0rem 3rem;

  p {
    text-align: justify;
    font-weight: 300;
    font-size: 1.3rem;
    position: auto;
    margin: 1rem;

    :last-child {
      margin-bottom: 2rem;
    }
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;

    color: ${props => props.theme.colors.grayDark};
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.colors.grayText};

    margin-left: 1rem;

    text-decoration: underline 2px;
  }

  @media (max-width: 400px) {
    padding: 0rem 1rem;
  }
`
