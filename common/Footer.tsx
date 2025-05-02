import { SocialLinks } from './SocialLinks'
import { ViewCollection } from './ViewCollection'

export const Footer = () => {
  return (
    <footer className='fixed flex justify-between items-end left-0 bottom-0 right-0 px-5 pb-[20px] md:px-10 md:pb-[30px]'>
      <SocialLinks />
      <ViewCollection />
    </footer>
  )
}
