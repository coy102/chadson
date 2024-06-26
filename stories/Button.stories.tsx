import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Button, ButtonProps } from '../src/components/Button'

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

const containedButton = [
  {
    variant: 'default',
    label: 'Default',
  },
  {
    variant: 'secondary',
    label: 'Secondary',
  },
  {
    variant: 'destructive',
    label: 'Destructive',
  },
  {
    variant: 'ghost',
    label: 'Ghost',
  },
  {
    variant: 'link',
    label: 'Link',
  },
]

const Template: StoryFn<ButtonProps> = () => (
  <>
    <div className="flex flex-row gap-2">
      {containedButton.map(btn => (
        <Button variant={btn.variant as ButtonProps['variant']} key={btn.label}>
          {btn.label}
        </Button>
      ))}
    </div>
  </>
)

export const Default = Template.bind({})

Default.args = {}
