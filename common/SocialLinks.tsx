import DiscordLogo from '@/public/discord.svg'
import OpenSeaLogo from '@/public/opensea.svg'
import TwitterLogo from '@/public/twitter.svg'
import Image from 'next/image'

export const SocialLinks = () => {
  const containerClassName = 'flex items-center justify-center size-10'
  const socialLinkClassName =
    'size-10 hover:size-9 transform transition-all duration-300 ease-in-out'

  return (
    <div className='flex gap-x-5'>
      <a
        href='https://discord.com/invite/PmWf27cY6p'
        target='_blank'
        rel='noopener noreferrer'
        className={containerClassName}
      >
        <Image
          src={DiscordLogo}
          alt='Discord'
          className={socialLinkClassName}
        />
      </a>
      <a
        href='https://opensea.io/ja/collection/fluffy-hugs89'
        target='_blank'
        rel='noopener noreferrer'
        className={containerClassName}
      >
        <Image
          src={OpenSeaLogo}
          alt='Opensea'
          className={socialLinkClassName}
        />
      </a>
      <a
        href='https://x.com/FluffyHUGS_prj'
        target='_blank'
        rel='noopener noreferrer'
        className={containerClassName}
      >
        <Image
          src={TwitterLogo}
          alt='Twitter'
          className={socialLinkClassName}
        />
      </a>
    </div>
  )
}
