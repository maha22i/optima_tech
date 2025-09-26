export interface BaseComponent {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends BaseComponent {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  onClick?: () => void
}

export interface ModalProps extends BaseComponent {
  isOpen: boolean
  onClose: () => void
  title?: string
} 