import * as AvatarPrimitive from '@radix-ui/react-avatar'
import React from 'react'

import { cn } from '../../libs/utils'

// Avatar component props
interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  className?: string
}

// Avatar component
const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>((props, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', props.className)}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

// AvatarImage component props
interface AvatarImageProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  className?: string
}

// AvatarImage component
const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, AvatarImageProps>((props, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn('aspect-square h-full w-full', props.className)} {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

// AvatarFallback component props
interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  className?: string
}

// AvatarFallback component
const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, AvatarFallbackProps>(
  (props, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', props.className)}
      {...props}
    />
  )
)
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
