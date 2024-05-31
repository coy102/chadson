import { Meta } from '@storybook/react'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '../src/components/Avatar'

const meta: Meta = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template = () => (
  <>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </>
)

export const Default = Template.bind({})

Default.args = {}
