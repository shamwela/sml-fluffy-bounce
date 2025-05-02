import Image from 'next/image'
import { useEffect, useState } from 'react'
import FluffyHug1 from '../public/fluffy-hug-1.png'
import Two from '../public/2.avif'

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const maxScroll = 3000 // Configure max scroll for full animation effect

  // Calculate rotation and scale based on scroll position
  const rotation = Math.min(90, (scrollPosition / maxScroll) * 90)
  const scale = 1 + Math.min(2, (scrollPosition / maxScroll) * 2)

  // Determine if we should apply the bounce animation
  const isScrolling = scrollPosition > 5 // Small threshold to detect scrolling

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='h-[10000px]'>
      {/* Fixed content in the center of the screen */}
      <div className='fixed inset-0 flex items-center justify-center pointer-events-none z-10'>
        <Image
          src={FluffyHug1}
          alt='Fluffy Hug 1'
          className={`${
            isScrolling ? '' : 'fluffy-bounce'
          } pointer-events-auto`}
          style={{
            transform: `rotate(-${rotation}deg) scale(${scale})`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>
      <Image src={Two} alt='Two' className='fluffy-bounce' />
    </div>
  )
}
