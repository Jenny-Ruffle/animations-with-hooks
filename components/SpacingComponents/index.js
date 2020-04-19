import React from 'react'
import { createComponent } from 'react-fela'
import { Paragraph } from '../StyledText'

const container = ({ height = '300px' }) => ({
  height,
  margin: '80px 10% ',
  padding: '30px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  width: '80%'
})

export const PaddingContainer = createComponent(container, 'div')

export const LatinText = ({extraStyles}) => (
  <PaddingContainer height="auto">
    <Paragraph extraStyles={extraStyles}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante urna, dapibus eget mauris eu, tincidunt varius lacus. Etiam in tempus sem. Etiam eu
      commodo lacus. Sed quam orci, consectetur a enim ac, auctor rutrum libero. In egestas mi sed fermentum consectetur. In cursus molestie tortor. Quisque
      convallis ultrices leo, cursus bibendum massa pellentesque sit amet. Nullam aliquet, orci sed dapibus tempor, libero quam tincidunt elit, tempor porttitor
      tellus ante id leo. Suspendisse pharetra justo nec nisi ultricies, in luctus metus venenatis. Aliquam erat volutpat. Mauris non nulla mauris. Suspendisse
      potenti. Phasellus ut sollicitudin mi. Fusce vestibulum laoreet gravida. Integer mi diam, dictum eu pellentesque sit amet, malesuada id augue. Integer
      consectetur risus augue. Proin ultrices tellus nibh. Donec facilisis nulla magna, et rhoncus sapien suscipit ut. Nam at mauris id mi gravida tristique.
      Vivamus ultrices dolor eu justo lacinia, placerat tempor est semper. Mauris varius malesuada ex, eget egestas mi tincidunt sed. Suspendisse potenti. In
      nec ex sit amet magna mattis malesuada vitae eu purus. Fusce vitae neque quis nibh fringilla sodales sed vel sem. Nulla velit est, tincidunt ultrices
      lacinia id, sollicitudin sed erat. Nulla libero libero, blandit eget metus at, tempus vulputate ligula. Donec sit amet orci imperdiet, accumsan tellus ac,
      aliquet urna. Mauris sapien mi, malesuada fringilla ex sed, eleifend molestie ipsum. Proin suscipit libero id elit suscipit, at cursus lorem congue. Etiam
      egestas lorem sapien, vitae accumsan neque convallis vel. Donec faucibus metus ullamcorper massa elementum tristique. Curabitur dui nunc, hendrerit ut
      dignissim nec, euismod vel nisl.
    </Paragraph>
  </PaddingContainer>
)
