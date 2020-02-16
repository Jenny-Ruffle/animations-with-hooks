import React, { useState } from 'react'
import { createComponent } from 'react-fela'
import Link from 'next/link'
import { HeadingMedium } from './StyledText'

const navigationBar = () => ({
  display: 'flex',
  height: '38px',
  backgroundColor: 'white'
})

const NavigationBar = createComponent(navigationBar, 'nav')

const DropdownCaret = () => (
  <svg width="30" height="30">
    <path d="M24 11.305l-7.997 11.39L8 11.305z" />
  </svg>
)

const dropdownArea = () => ({
  float: 'left',
  overflow: 'hidden'
})

const DropdownArea = createComponent(dropdownArea, 'div')

const dropdownButton = () => ({
  border: 'none',
  outline: 'none',
  height: '30px',
  padding: '0 0 0 4px',
  ':hover': {
    cursor: 'pointer'
  }
})

const DropdownButton = createComponent(dropdownButton, 'button', ['onClick'])

const dropdownList = ({ open }) => ({
  display: open ? 'flex' : 'none',
  flexDirection: 'column',
  position: 'absolute',
  backgroundColor: 'white',
  minWidth: '250px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 8px 0px',
  zIndex: 20,
  padding: '6px'
})

const DropdownList = createComponent(dropdownList, 'div')

const pageLink = () => ({
  textDecoration: 'none',
  font: '12px/18px Verdana, serif',
  padding: '4px',
  color: 'black',
  ':hover': {
    cursor: 'pointer',
    color: '#008f9c',
    fontStyle: 'bold'
  }
})

const PageLink = createComponent(pageLink, 'a', ['onClick'])

const headingLink = () => ({
  cursor: 'pointer',
  textDecoration: 'none',
  paddingTop: '5px'
})

const HeadingLink = createComponent(headingLink, 'a', ['onClick'])

const Navigation = ({ animations }) => {
  const [dropdownOpen, setDropdownOpen] = useState(0)
  return (
    <NavigationBar>
      <Link href="/">
        <HeadingLink>
          <HeadingMedium>Animation Library</HeadingMedium>
        </HeadingLink>
      </Link>
      <DropdownArea>
        <DropdownButton onClick={(e) => setDropdownOpen(!dropdownOpen)}>
          <DropdownCaret />
        </DropdownButton>
        <DropdownList open={dropdownOpen}>
          {animations.map((item, index) => (
            <Link href={`/${item.animationKey}`}>
              <PageLink>{item.navigationName}</PageLink>
            </Link>
          ))}
        </DropdownList>
      </DropdownArea>
    </NavigationBar>
  )
}

export default Navigation
