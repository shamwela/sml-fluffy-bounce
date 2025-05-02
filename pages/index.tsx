import Image from 'next/image'
import { useEffect, useState } from 'react'
import Image1 from '@/public/nfts/1.png'
import Image2 from '@/public/nfts/2.avif'
import Image3 from '@/public/nfts/3.avif'
import Image4 from '@/public/nfts/4.avif'
import Image5 from '@/public/nfts/5.avif'
import { Header } from '@/common/Header'
import { Footer } from '@/common/Footer'
import Head from 'next/head'

const imageSize = 150

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const maxScroll = 3000 // Configure max scroll for full animation effect

  // Calculate rotation and scale based on scroll position
  const rotation = Math.min(90, (scrollPosition / maxScroll) * 90)
  // When scrolled, the middle image will be 2x bigger.
  const scale = 1 + Math.min(1, (scrollPosition / maxScroll) * 1)

  // Determine if we should apply the bounce animation
  const isScrolling = scrollPosition > 5 // Small threshold to detect scrolling

  // Calculate the position for the Two image
  // Move it from center to bottom right and then off screen
  const moveThreshold = 3000 // How much scroll before image is completely off screen

  // Calculate X position (from center to right and beyond)
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0
  const xPosition = Math.min(screenWidth + 200, scrollPosition * 1.5)

  // Calculate Y position (from center to bottom and beyond)
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0
  const yPosition = Math.min(screenHeight + 200, scrollPosition * 1.5)

  const backgroundImageStyle = {
    width: imageSize,
    height: imageSize,
    position: 'fixed',
    zIndex: 20,
    transform: `translate(${xPosition}px, ${yPosition}px)`,
    transition: 'transform 0.5s ease-out',
    marginLeft: '-50px',
    marginTop: '-50px',
    // Hide when fully off screen
    opacity: scrollPosition > moveThreshold ? 0 : 1,
    visibility: scrollPosition > moveThreshold ? 'hidden' : 'visible',
    transitionProperty: 'transform, opacity',
    transitionDuration: '0.5s, 0.3s',
  } as const

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
    <div className='h-[10000px]' style={{ backgroundColor: '#FCF3E2' }}>
      <Head>
        <title>Fluffy HUGS NFT</title>
        <meta name='description' content='Fluffy HUGS NFT' />
      </Head>
      <Header />
      <div className='fixed inset-0 flex items-center justify-center pointer-events-none z-10'>
        <Image
          src={Image1}
          alt='Image 1'
          className={`${
            isScrolling ? '' : 'fluffy-bounce'
          } pointer-events-auto`}
          style={{
            width: imageSize,
            height: imageSize,
            transform: `rotate(-${rotation}deg) scale(${scale})`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>
      <div
        style={{
          ...backgroundImageStyle,
          top: '70%',
          left: '40%',
        }}
      >
        <Image
          src={Image2}
          alt='Image 2'
          className={!isScrolling ? 'fluffy-bounce' : ''}
          style={{ animationDelay: '0.05s' }}
        />
      </div>
      <div
        style={{
          ...backgroundImageStyle,
          top: '30%',
          left: '20%',
        }}
      >
        <Image
          src={Image3}
          alt='Image 3'
          className={!isScrolling ? 'fluffy-bounce' : ''}
          style={{ animationDelay: '0.1s' }}
        />
      </div>
      <div
        style={{
          ...backgroundImageStyle,
          top: '25%',
          right: '20%',
        }}
      >
        <Image
          src={Image4}
          alt='Image 4'
          className={!isScrolling ? 'fluffy-bounce' : ''}
          style={{ animationDelay: '0.15s' }}
        />
      </div>
      <div
        style={{
          ...backgroundImageStyle,
          bottom: '30%',
          right: '10%',
        }}
      >
        <Image
          src={Image5}
          alt='Image 5'
          className={!isScrolling ? 'fluffy-bounce' : ''}
          style={{ animationDelay: '0.2s' }}
        />
      </div>
      <Footer />
    </div>
  )
}
