'use client'

import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
  withPadding?: boolean
}

const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  className = '', 
  withPadding = true 
}) => {
  const baseClasses = withPadding ? 'pt-16 sm:pt-20 lg:pt-24' : ''
  
  return (
    <div className={`${baseClasses} ${className}`.trim()}>
      {children}
    </div>
  )
}

export default PageContainer
