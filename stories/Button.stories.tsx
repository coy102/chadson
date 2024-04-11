import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Button, ButtonProps } from '../src/components/ui/button'

const meta: Meta = {
  title: 'Button',
  component: Button,
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

const Template: StoryFn<ButtonProps> = args => (
  <Button variant="destructive" {...args}>
    Button
  </Button>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
