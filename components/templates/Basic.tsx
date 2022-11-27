import Image from 'next/image'
import Link from 'next/link'
import DownloadIcon from '../icons/DownloadIcon'
import GlobeIcon from '../icons/GlobeIcon'
import MailIcon from '../icons/MailIcon'
import MapPinIcon from '../icons/MapPinIcon'
import PhoneIcon from '../icons/PhoneIcon'
import Instagram from '../png/instagram.png'
import Twitter from '../png/twitter.png'
import Dribbble from '../png/dribbble.png'
import Linkedin from '../png/linkedin.png'
import CalenderIcon from '../icons/CalenderIcon'

interface BasicProps {
  preview?: boolean
}

const Basic = ({ preview }: BasicProps) => {
  return (
    <main className='bg-white h-fit flex flex-col print:flex-row lg:flex-row justify-start gap-16 print:gap-4 max-w-6xl mx-auto print:mx-1 p-10 print:p-0 my-10 print:my-1 rounded-md'>
      {/* // <main className='bg-white h-fit grid grid-cols-12 gap-16 print:gap-4 max-w-6xl mx-auto print:mx-1 p-10 print:p-0 my-10 print:my-1 rounded-md'> */}
      {!preview && (
        <button
          onClick={() => window.print()}
          className='fixed m-5 bottom-4 right-0 capitalize flex flex-1 gap-2 w-fit bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full print:hidden'>
          <DownloadIcon />
          Download CV
        </button>
      )}
      {/* first col */}
      <section className='flex flex-col max-w-[18rem] h-fit gap-5 print:gap-1 col-span-4'>
        <div className='relative w-72 h-56 rounded-md overflow-hidden'>
          <Image
            src={'https://avatars.githubusercontent.com/u/57604289?v=4'}
            alt='profile'
            fill
            className='object-cover'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold capitalize'>
            biruk endris Aman ademnur
          </h1>
          <p className='text-xl text-gray-500'>
            Serverless Architecture and Full Stack Developer
          </p>
        </div>
        <hr className='border-gray-300 print:hidden' />

        {/* Personal Details */}
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-gray-600 mb-2'>Personal Details</h1>
          {/* personal detail card email */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='w-8 h-8 flex justify-center items-center text-gray-600 rounded-full bg-gray-200'>
              <MailIcon />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-xs text-gray-500 p-0 tracking-wide capitalize'>
                Email
              </h1>
              <p className='text-gray-800 text-sm'>biruketblem@gmail.com</p>
            </div>
          </div>
          {/* personal detail card website */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='w-8 h-8 flex justify-center items-center text-gray-600 rounded-full bg-gray-200'>
              <GlobeIcon />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-xs text-gray-500 p-0 tracking-wide capitalize'>
                website
              </h1>
              <p className='text-gray-800 text-sm'>
                https://www.biruk.ruqad.com
              </p>
            </div>
          </div>
          {/* personal detail card phone */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='w-8 h-8 flex justify-center items-center text-gray-600 rounded-full bg-gray-200'>
              <PhoneIcon />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-xs text-gray-500 p-0 tracking-wide capitalize'>
                phone
              </h1>
              <p className='text-gray-800 text-sm'>(+251) 910 5032 30</p>
            </div>
          </div>
          {/* personal detail card address */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='w-8 h-8 flex justify-center items-center text-gray-600 rounded-full bg-gray-200'>
              <MapPinIcon />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-xs text-gray-500 p-0 tracking-wide capitalize'>
                Address
              </h1>
              <p className='text-gray-800 text-sm'>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
        <hr className='border-gray-300 print:hidden' />

        {/* Social links */}
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-gray-600 mb-2'>Socials</h1>
          {/* Social card instagram */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='relative w-8 h-8 rounded-full bg-gray-200 overflow-hidden'>
              <Image
                src={Instagram}
                alt='profile'
                fill
                className='object-cover'
              />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-xs text-gray-500 p-0 tracking-wide capitalize'>
                Instagram
              </h1>
              <p className='text-gray-800 text-sm'>@birukendris2022</p>
            </div>
          </div>
          {/* Social card dribbble */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='relative w-8 h-8 rounded-full bg-gray-200'>
              <Image
                src={Dribbble}
                alt='profile'
                fill
                className='object-cover'
              />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-xs text-gray-500 p-0 tracking-wide capitalize'>
                Dribbble
              </h1>
              <p className='text-gray-800 text-sm'>@birukendris2022</p>
            </div>
          </div>
          {/* Social card twitter */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='relative w-8 h-8 rounded-full bg-gray-200'>
              <Image
                src={Twitter}
                alt='profile'
                fill
                className='object-cover'
              />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-xs text-gray-500 p-0 tracking-wide capitalize'>
                Twitter
              </h1>
              <p className='text-gray-800 text-sm'>@birukendris2022</p>
            </div>
          </div>
          {/* Social card linkedin */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='relative w-8 h-8 rounded-full bg-gray-200'>
              <Image
                src={Linkedin}
                alt='profile'
                fill
                className='object-cover'
              />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-xs text-gray-500 p-0 tracking-wide capitalize'>
                Linkedin
              </h1>
              <p className='text-gray-800 text-sm'>biruk-endris</p>
            </div>
          </div>
        </div>

        <hr className='border-gray-300 print:hidden' />

        {/* Languages */}
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-gray-600 mb-2'>Languages</h1>
          {/* Language card english */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='relative w-10 h-10 rounded-full bg-gray-200 overflow-hidden'>
              <Image
                src={
                  'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg'
                }
                alt='profile'
                fill
                className='object-cover'
              />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-gray-800 font-semibold p-0 tracking-wide capitalize'>
                English
              </h1>
              <p className='text-gray-500 text-xs'>Native</p>
            </div>
          </div>
          {/* Language card amharic */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='relative w-10 h-10 rounded-full bg-gray-200 overflow-hidden'>
              <Image
                src={
                  'http://purecatamphetamine.github.io/country-flag-icons/3x2/ET.svg'
                }
                alt='profile'
                fill
                className='object-cover'
              />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-gray-800 font-semibold p-0 tracking-wide capitalize'>
                Amahric
              </h1>
              <p className='text-gray-500 text-xs'>Native</p>
            </div>
          </div>
          {/* Language card amharic */}
          <div className='flex gap-3 justify-start items-center my-1 print:my-[2px]'>
            <span className='relative w-10 h-10 rounded-full bg-gray-200 overflow-hidden'>
              <Image
                src={
                  'http://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg'
                }
                alt='profile'
                fill
                className='object-cover'
              />
            </span>
            <div className='flex flex-col'>
              <h1 className='text-gray-800 font-semibold p-0 tracking-wide capitalize'>
                Dutch
              </h1>
              <p className='text-gray-500 text-xs'>Basic</p>
            </div>
          </div>
        </div>

        <hr className='border-gray-300 print:hidden' />

        {/* Hobbies */}
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-gray-600 mb-2'>Hobbies</h1>
          {/* Skill card */}
          <p className='text-gray-500'>Football, Basketball, Coding</p>
        </div>
      </section>
      {/* second col */}
      <section className='flex flex-col gap-10 print:gap-2 col-span-8'>
        {/* About me section */}
        <section className='flex flex-col items-start max-w-2xl gap-4 print:gap-2'>
          <div className='flex justify-center items-center gap-8'>
            <span className='flex justify-center items-center w-6 h-6 rounded-full shadow-lg border border-gray-50 print:hidden'>
              <span className='h-2 w-2 bg-green-400 rounded-full'></span>
            </span>
            <h1 className='text-gray-800 tracking-wider font-semibold text-2xl capitalize'>
              About me
            </h1>
          </div>
          {/* about me details */}
          <section className='mx-14 print:mx-0'>
            <p className='text-gray-500 tracking-wide'>
              Passionate web developer with a years of coding experience. I love
              building new products and improving existing ones. I am
              open-minded, have an agile mindset, and can quickly adapt to new
              environments and ways of working.
            </p>
          </section>
        </section>
        {/* Skill section */}
        <section className='flex flex-col items-start max-w-2xl gap-5 print:gap-2'>
          <div className='flex justify-center items-center gap-8'>
            <span className='flex justify-center items-center w-6 h-6 rounded-full shadow-lg border border-gray-50 print:hidden'>
              <span className='h-2 w-2 bg-green-400 rounded-full'></span>
            </span>
            <h1 className='text-gray-800 tracking-wider font-semibold text-2xl capitalize'>
              Skills
            </h1>
          </div>
          {/* list of skills */}
          <section className='mx-14 print:mx-0 flex flex-wrap gap-4 print:gap-2'>
            <span className='bg-gray-100 text-gray-800 text-sm font-semibold tracking-wide rounded-sm px-5 print:px-2 py-1 uppercase'>
              HTML
            </span>
            <span className='bg-gray-100 text-gray-800 text-sm font-semibold tracking-wide rounded-sm px-5 print:px-2 py-1 uppercase'>
              CSS
            </span>
            <span className='bg-gray-100 text-gray-800 text-sm font-semibold tracking-wide rounded-sm px-5 print:px-2 py-1 uppercase'>
              Typescript
            </span>
            <span className='bg-gray-100 text-gray-800 text-sm font-semibold tracking-wide rounded-sm px-5 print:px-2 py-1 uppercase'>
              Next JS
            </span>
            <span className='bg-gray-100 text-gray-800 text-sm font-semibold tracking-wide rounded-sm px-5 print:px-2 py-1 uppercase'>
              Express JS
            </span>
            <span className='bg-gray-100 text-gray-800 text-sm font-semibold tracking-wide rounded-sm px-5 print:px-2 py-1 uppercase'>
              MySQL
            </span>
            <span className='bg-gray-100 text-gray-800 text-sm font-semibold tracking-wide rounded-sm px-5 print:px-2 py-1 uppercase'>
              MongoDB
            </span>
            <span className='bg-gray-100 text-gray-800 text-sm font-semibold tracking-wide rounded-sm px-5 print:px-2 py-1 uppercase'>
              Communication
            </span>
            <span className='bg-gray-100 text-gray-800 text-sm font-semibold tracking-wide rounded-sm px-5 print:px-2 py-1 uppercase'>
              Teamwork
            </span>
          </section>
        </section>
        {/* Educations */}
        {/* <section className='flex flex-col items-start max-w-2xl gap-5 print:gap-2'> */}
        <section className='flex flex-col items-start max-w-2xl gap-5 print:gap-2'>
          <div className='flex justify-center items-center gap-8'>
            <span className='flex justify-center items-center w-6 h-6 rounded-full shadow-lg border border-gray-50 print:hidden'>
              <span className='h-2 w-2 bg-green-400 rounded-full'></span>
            </span>
            <h1 className='text-gray-800 tracking-wider font-semibold text-2xl capitalize'>
              Educations
            </h1>
          </div>
          {/* list of skills */}
          <section className='mx-14 print:mx-0 grid grid-cols-2 gap-4 print:gap-1'>
            {/* st ragual church school */}
            <div className='flex flex-col flex-1 bg-gray-50 print:bg-white px-5 print:p-0 print:w-fit py-2 gap-2 max-w-xs justify-between min-w-[16rem]'>
              <h2 className='text-gray-800 font-semibold first-letter:capitalize'>
                St. Ragual Church School
              </h2>
              <div className='flex flex-col text-xs'>
                <p className='font-bold text-gray-600'>High School</p>
                <span className='text-gray-500'>2010 - 2016</span>
              </div>
            </div>
            {/* Hawassa university */}
            <div className='flex flex-col flex-1 bg-gray-50 print:bg-white px-5 print:p-0 print:w-fit py-2 gap-2 max-w-xs justify-between min-w-[16rem]'>
              <h2 className='text-gray-800 font-semibold first-letter:capitalize'>
                hawassa university
              </h2>
              <div className='flex flex-col text-xs'>
                <p className='font-bold text-gray-600'>
                  Mechanical Engineering
                </p>
                <span className='text-gray-500'>2016 - 2020</span>
              </div>
            </div>
            {/* Fontys University */}
            <div className='flex flex-col flex-1 bg-gray-50 print:bg-white px-5 print:p-0 print:w-fit py-2 gap-2 max-w-xs justify-between min-w-[16rem]'>
              <h2 className='text-gray-800 font-semibold first-letter:capitalize'>
                Fontys university
              </h2>
              <div className='flex flex-col text-xs'>
                <p className='font-bold text-gray-600'>
                  Computer Science Engineering
                </p>
                <span className='text-gray-500'>2020 - 2021</span>
              </div>
            </div>
            {/* HYF University */}
            <div className='flex flex-col flex-1 bg-gray-50 print:bg-white px-5 print:p-0 print:w-fit py-2 gap-2 max-w-xs justify-between min-w-[16rem]'>
              <h2 className='text-gray-800 font-semibold first-letter:capitalize'>
                HackYourFuture
              </h2>
              <div className='flex flex-col text-xs'>
                <p className='font-bold text-gray-600'>
                  Full Stack Web Development
                </p>
                <span className='text-gray-500'>2021 - 2022</span>
              </div>
            </div>
          </section>
        </section>
        {/* Experience */}
        <section className='flex flex-col items-start max-w-2xl gap-5 print:gap-2'>
          <div className='flex justify-center items-center gap-8'>
            <span className='flex justify-center items-center w-6 h-6 rounded-full shadow-lg border border-gray-50 print:hidden'>
              <span className='h-2 w-2 bg-green-400 rounded-full'></span>
            </span>
            <h1 className='text-gray-800 tracking-wider font-semibold text-2xl capitalize'>
              Experience
            </h1>
          </div>
          <section className='mx-14 print:mx-0 flex flex-col gap-5 print:gap-3 w-full'>
            {/* microsoft */}
            <div className='flex flex-1 flex-col gap-3 h-10 print:max-w-xl max-w-lg'>
              <div className='flex flex-1 gap-4 w-fit text-gray-500'>
                <span className=''>
                  <CalenderIcon />
                </span>
                <p className='font-semibold'>July 2021 - January 2022</p>
              </div>
              <div className='flex flex-1 gap-4 w-fit text-gray-500'>
                <div className='relative w-12 h-12 rounded-md overflow-hidden'>
                  <Image
                    src={'https://avatars.githubusercontent.com/u/57604289?v=4'}
                    alt='profile'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h2 className='text-gray-500 capitalize'>Appel</h2>
                  <p className=' text-gray-800 font-semibold first-letter:capitalize'>
                    Front-End Developer
                  </p>
                </div>
              </div>
              <p className='text-gray-500 tracking-wide'>
                Passionate web developer with a years of coding experience. I
                love building new products and improving existing ones. I am
                open-minded, have an agile mindset, and can quickly adapt to new
                environments and ways of working.
              </p>
            </div>
            {/* google */}
            <div className='flex flex-1 flex-col gap-3 h-10 max-w-lg'>
              <div className='flex flex-1 gap-4 w-fit text-gray-500'>
                <span className=''>
                  <CalenderIcon />
                </span>
                <p className='font-semibold'>July 2021 - January 2022</p>
              </div>
              <div className='flex flex-1 gap-4 w-fit text-gray-500'>
                <div className='relative w-12 h-12 rounded-md overflow-hidden'>
                  <Image
                    src={'https://avatars.githubusercontent.com/u/57604289?v=4'}
                    alt='profile'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h2 className='text-gray-500 capitalize'>Google</h2>
                  <p className=' text-gray-800 font-semibold first-letter:capitalize'>
                    UI/UX Designer
                  </p>
                </div>
              </div>
              <p className='text-gray-500 tracking-wide'>
                Passionate web developer with a years of coding experience. I
                love building new products and improving existing ones. I am
                open-minded, have an agile mindset, and can quickly adapt to new
                environments and ways of working.
              </p>
            </div>
            {/* linkedin */}
            <div className='flex flex-1 flex-col gap-3 h-10 max-w-lg'>
              <div className='flex flex-1 gap-4 w-fit text-gray-500'>
                <span className=''>
                  <CalenderIcon />
                </span>
                <p className='font-semibold'>July 2021 - January 2022</p>
              </div>
              <div className='flex flex-1 gap-4 w-fit text-gray-500'>
                <div className='relative w-12 h-12 rounded-md overflow-hidden'>
                  <Image
                    src={'https://avatars.githubusercontent.com/u/57604289?v=4'}
                    alt='profile'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h2 className='text-gray-500 capitalize'>Linkedin</h2>
                  <p className=' text-gray-800 font-semibold first-letter:capitalize'>
                    UI/UX Designer
                  </p>
                </div>
              </div>
              <p className='text-gray-500 tracking-wide'>
                Passionate web developer with a years of coding experience. I
                love building new products and improving existing ones. I am
                open-minded, have an agile mindset, and can quickly adapt to new
                environments and ways of working.
              </p>
            </div>
          </section>
        </section>
        {/* Projects */}
        <section className='flex flex-col items-start max-w-2xl gap-5 print:hidden'>
          <div className='flex justify-center items-center gap-8'>
            <span className='flex justify-center items-center w-6 h-6 rounded-full shadow-lg border border-gray-50'>
              <span className='h-2 w-2 bg-green-400 rounded-full'></span>
            </span>
            <h1 className='text-gray-800 tracking-wider font-semibold text-2xl capitalize'>
              Projects
            </h1>
          </div>
          <section className='mx-14 flex flex-col gap-5 w-full'>
            {/* Project One */}
            <div className='flex flex-1 h-fit gap-3 max-w-lg rounded-md p-3 bg-gray-50'>
              <div className='relative w-40 h-40 rounded-sm overflow-hidden'>
                <Image
                  src={'https://avatars.githubusercontent.com/u/57604289?v=4'}
                  alt='profile'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-1 flex-col gap-3 h-10 max-w-lg'>
                <h2 className='text-gray-800 text-lg font-semibold first-letter:capitalize'>
                  Project 1
                </h2>
                <p className='text-gray-500 tracking-wide'>
                  Passionate web developer with a years of coding experience. I
                  love building new products and improving existing ones.
                </p>

                <Link href='https://www.google.com/'>
                  <span className='text-blue-500 cursor-pointer'>
                    read more...
                  </span>
                </Link>
              </div>
            </div>
            {/* Project Two */}
            <div className='flex flex-1 h-fit gap-3 max-w-lg rounded-md p-3 bg-gray-50'>
              <div className='relative w-40 h-40 rounded-sm overflow-hidden'>
                <Image
                  src={'https://avatars.githubusercontent.com/u/57604289?v=4'}
                  alt='profile'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-1 flex-col gap-3 h-10 max-w-lg'>
                <h2 className='text-gray-800 text-lg font-semibold first-letter:capitalize'>
                  Project 2
                </h2>
                <p className='text-gray-500 tracking-wide'>
                  Passionate web developer with a years of coding experience. I
                  love building new products and improving existing ones.
                </p>

                <Link href='https://www.google.com/'>
                  <span className='text-blue-500 cursor-pointer'>
                    read more...
                  </span>
                </Link>
              </div>
            </div>
            {/* Project Three */}
            <div className='flex flex-1 h-fit gap-3 max-w-lg rounded-md p-3 bg-gray-50'>
              <div className='relative w-40 h-40 rounded-sm overflow-hidden'>
                <Image
                  src={'https://avatars.githubusercontent.com/u/57604289?v=4'}
                  alt='profile'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-1 flex-col gap-3 h-10 max-w-lg'>
                <h2 className='text-gray-800 text-lg font-semibold first-letter:capitalize'>
                  Project 3
                </h2>
                <p className='text-gray-500 tracking-wide'>
                  Passionate web developer with a years of coding experience. I
                  love building new products and improving existing ones.
                </p>

                <Link href='https://www.google.com/'>
                  <span className='text-blue-500 cursor-pointer'>
                    read more...
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </section>
        {/* Courses */}
        <section className='flex flex-col items-start max-w-2xl gap-5 print:hidden'>
          <div className='flex justify-center items-center gap-8'>
            <span className='flex justify-center items-center w-6 h-6 rounded-full shadow-lg border border-gray-50'>
              <span className='h-2 w-2 bg-green-400 rounded-full'></span>
            </span>
            <h1 className='text-gray-800 tracking-wider font-semibold text-2xl capitalize'>
              Courses
            </h1>
          </div>
          {/* list of Courses */}
          <section className='mx-14 flex flex-wrap gap-4'>
            {/* Fullstack in HYF */}
            <div className='flex flex-col flex-1 bg-gray-50 print:bg-white px-5 print:p-0 print:w-fit py-2 gap-2 max-w-xs justify-between min-w-[16rem]'>
              <h2 className='text-gray-800 font-semibold first-letter:capitalize'>
                MERN Stack
              </h2>
              <div className='flex flex-col text-xs'>
                <p className='font-bold text-gray-600'>HYF Bootcamp</p>
                <span className='text-gray-500'>2010 - 2016</span>
              </div>
            </div>
            {/* AWS Arcethectur */}
            <div className='flex flex-col flex-1 bg-gray-50 print:bg-white px-5 print:p-0 print:w-fit py-2 gap-2 max-w-xs justify-between min-w-[16rem]'>
              <h2 className='text-gray-800 font-semibold first-letter:capitalize'>
                AWS Serverless Architecture
              </h2>
              <div className='flex flex-col text-xs'>
                <p className='font-bold text-gray-600'>
                  Production Ready Serverless
                </p>
                <span className='text-gray-500'>2016 - 2020</span>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}

export default Basic
