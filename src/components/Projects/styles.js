import styled, { css } from 'styled-components'

export const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Description = styled.div`
  margin-top: 60px;

  p {
    color: var(--color-haze);
    transition: color 300ms ease;
  }
`

export const Figure = styled.figure`
  width: 100%;
  height: 260px;
  position: relative;

  div,
  img {
    width: 100%;
    height: 100%;
    transition: transform 300ms ease;
  }

  div {
    border-radius: 0.3em;
  }

  figcaption {
    margin-top: 16px;
  }

  * {
    margin: 0;
    color: rgb(var(--color-foreground));
  }
`

export const hoverArticle = css`
  @media (hover: hover) {
    &:hover {
      img {
        transform: scale(1.02);
      }
      p {
        color: rgb(var(--color-foreground));
      }
    }
  }
`

export const Article = styled.article`
  width: 100%;
  margin-bottom: 2em;
  &::not(::last-of-type) {
    margin-bottom: 2em;
  }

  ${hoverArticle};

  @media (min-width: 576px) {
    margin-bottom: 0;
    width: calc(50% - 2em);
  }

  @media (min-width: 769px) {
    margin-bottom: 0;
    width: calc(
      50% - (var(--grid-width) / var(--grid-column) - var(--grid-gutter)) / 2
    );
  }

  h2 {
    line-height: 1.4;
  }

  a {
    display: block;
  }

`