import React from 'react'

import Content from '../../content/header.mdx'

import { Background, Wrap } from './styles'

const Header = () => {
  return (
    <Background>
      <Wrap>
        <Content />
      </Wrap>
    </Background>
  )
}

export { Header }