import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

import { cn } from '../../libs/utils'

import './style.css'

const buttonVariants = cva('x-btn-wrapper', {
  variants: {
    variant: {
      default: 'x-btn-default',
      'default-outline': 'x-btn-default-outline',
      destructive: 'x-btn-destructive',
      'destructive-outline': 'x-btn-destructive-outline',
      outline: 'x-btn-outline',
      secondary: 'x-btn-secondary',
      ghost: 'x-btn-ghost',
      link: 'x-btn-link',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    },
    rounded: {
      default: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      xxl: 'rounded-2xl',
      none: 'rounded-none',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    rounded: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className, rounded }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
