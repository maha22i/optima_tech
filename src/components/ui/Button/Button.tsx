import { ButtonPresenter } from './ButtonPresenter'
import { ButtonProps } from '@/types'

export const Button = ({ onClick, ...props }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <ButtonPresenter
      {...props}
      onClick={handleClick}
    />
  )
} 