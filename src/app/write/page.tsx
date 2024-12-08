"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { playwriteFRModerne } from '@/lib/fonts';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const MAX_CHARS = 500 // Maximum character limit for a ship

export default function WritePage() {
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim().length === 0 || content.length > MAX_CHARS) return

    setIsSubmitting(true)

    const res = await fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify({ content })
    })

    if (!res.ok) {
      toast({
        title: 'Failed to launch ship',
        description: 'Please try again later',
      })
      console.error('Failed to launch ship', res)
      setIsSubmitting(false)
      return
    }
    const data = await res.json()
    console.log('Ship launched', data)

    toast({
      title: 'Ship launched',
      description: 'Your ship has been launched successfully',
    })

    setIsSubmitting(false)
    router.push(`/message/${data.id}`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Launch a Ship</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your message here..."
          className={`mb-4 h-40 ${playwriteFRModerne.className}`}
        />
        <div className="flex justify-between items-center mb-4">
          <span className={`text-sm ${content.length > MAX_CHARS ? 'text-red-500' : 'text-gray-500'}`}>
            {content.length}/{MAX_CHARS}
          </span>
          <Button type="submit" disabled={isSubmitting || content.trim().length === 0 || content.length > MAX_CHARS}>
            {isSubmitting ? 'Launching...' : 'Launch Ship'}
          </Button>
        </div>
      </form>
    </div>
  )
}
