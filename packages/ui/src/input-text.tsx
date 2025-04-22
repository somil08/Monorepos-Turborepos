import { InputHTMLAttributes } from 'react'

interface PropType {
  placeholder: string
  size: 'big' | 'small'
}

export function TextInput({ placeholder, size,  }: PropType) {
  const padding = size === 'big' ? '12px 16px' : '8px 12px'
  const margin = size === 'big' ? '12px 0' : '8px 0'

  return (
    <input
      placeholder={placeholder}
      style={{
        padding,
        margin,
        border: '1px solid black',
        borderRadius: '6px',
        fontSize: size === 'big' ? '16px' : '14px',
        outline: 'none',
        width: '100%',
      }}
    />
  )
}
