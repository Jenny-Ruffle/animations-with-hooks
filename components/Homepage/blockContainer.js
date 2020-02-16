import { createComponent } from 'react-fela'

const blockContainer = () => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
})

const BlockContainer = createComponent(blockContainer, 'div')

export default BlockContainer
