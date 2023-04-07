import {AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'

import Link from 'next/link'
import {GiSkills} from 'react-icons/gi'

export default function About() {
  return (
    <div className='flex-col w-screen h-max bg-white overflow-scroll -z-20 justify-center '>

      <div className='w-full h-full lg:h-screen lg:pt-28 px-6 lg:px-96 py-6'>
        <h1 className='text-7xl text-[#FF5C00] pb-4'>My story</h1>
        <span>My name is Ignazio and I am a Frontend Web Developer.
          <br/><br/>Ever since I was a child, I have always been passionate about Technology. 
As a kid, I would spend hours and hours on our old, dusty, family PC. It wasn't even about video games: I was just very curious about how it all worked. I built my first PC at 13 years old, and from then on, I never stopped, but I always dismissed it as "just a hobby".
<br/><br/>
Later in my life, after studying Law for 2 years in University, something sparked inside of me: although I had tried to “cover” it, I still had that nerdy, pure, love for Tech.<br/>
So I started learning Programming and some basics of Digital Marketing, and for the last months this is what I have been practicing, getting some Certifications on the way.
<br/><br/>
If you are an employer looking for someone with really high motivation and passion, I would love to be part of your team.
</span>
      </div>

      <div className='flex w-screen justify-between relative pt-28 lg:pt-0 px-4 bottom-3'>
        <div className='flex text-md lg:text-xl text-black z-10 relative top-[0.1rem]'>
          <h1>© 2023 Ignazio Marrone</h1>
        </div>
        <div className='flex text-3xl text-black align-middle gap-1 z-10'>
          <Link href='https://pdfhost.io/v/rdsiQiDWc_CVEN'><h1 className='hover:text-[#FF5C00] hover:scale-110 transition-all duration-200 text-2xl'>CV</h1></Link>
          <Link href='https://www.linkedin.com/in/ignazio-marrone-080560201?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcJh590N5SuGo8GYaS75Acg%3D%3D'><h1 className='hover:text-[#FF5C00] hover:scale-110 transition-all duration-200'><AiOutlineLinkedin/></h1></Link>
          <Link href='mailto:ignaziomarronedev@gmail.com'><h1 className='hover:text-[#FF5C00] hover:scale-110 transition-all duration-200'><FiMail/></h1></Link>
          <Link href='https://github.com/ignaziomarrone'><h1 className='hover:text-[#FF5C00] hover:scale-110 transition-all duration-200'><AiFillGithub/></h1></Link>
        </div>
      </div>
    </div>
  )
}
