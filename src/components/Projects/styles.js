import styled, { css } from 'styled-components'

export const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Description = styled.div`
  padding: 1rem;

  p {
    color: var(--color-haze);
    transition: color 300ms ease;
  }
`

export const Figure = styled.figure`
  width: 100%;
  height: 0;
  overflow: hidden;
  position: relative;
  div,
  img {
    width: 100%;
    height: 100%;
    transition: transform 300ms ease;
  }

  div {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0.3em;
    overflow: hidden;
  }

  img {
    object-fit: cover;
  }

  figcaption {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 0.3em;
    padding: 6rem 1rem 1rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
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

  ${Figure} {
    padding-top: 80%;
  }

`