'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { TextInput } from '@repo/ui/input-text' // Adjust based on your package structure

export default function Home() {
  const router = useRouter()
  const [room, setRoom] = useState('')

  const handleJoin = () => {
   
      router.push(`/chat/123`)
   
  }
return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
          padding: '32px',
          borderRadius: '12px',
          minWidth: '300px',
        }}
      >
        <TextInput
          size="small"
          placeholder="Enter Room Name"
        
        />
        <button
          onClick={handleJoin}
          style={{
            padding: '10px 16px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            marginTop: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  )
}
