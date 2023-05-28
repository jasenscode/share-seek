import { source_sans_pro, ibm_plex_sans } from './fonts';
import Image from 'next/image';

import { Container } from '@components/Container';
import { Heading } from '@components/Heading';

export default function Home() {
  return (
    <main
      className={`${source_sans_pro.variable} font-sans pt-12 space-y-16`}>
      <section>
        <Container className='space-y-12'>
          <p
            className={`${ibm_plex_sans.variable} font-ibm text-5xl lg:text-7xl uppercase lg:text-center leading-tight text-floral-white`}>
            <span className='text-uranium'>market leading data</span> at
            your fingertips
          </p>

          <p className='lg:text-center leading-normal text-lg lg:text-xl text-floral-white'>
            Seek out the most accurate and up-to-date US market data at the
            click of a button
          </p>

          <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-10'>
            <div>
              <Image
                src='/nasdaq-logo.svg'
                alt='nasdaq logo'
                height={200}
                width={200}
              />
            </div>
            <div>
              <Image
                src='/nyse-logo.svg'
                alt='nyse logo'
                width={130}
                height={130}
              />
            </div>
          </div>
        </Container>
      </section>
      {/* <div className="absolute h-full w-full z-0 opacity-30 top-0">
        <Image src="/candlestick.jpg" alt="candlestick graph" fill />
      </div> */}

      <section className='bg-uranium'>
        <Container>
          <p className='lg:px-24 py-6 text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi non ab perspiciatis laborum cupiditate modi sed
            impedit explicabo! Qui minus suscipit minima magni! Maiores
            voluptatem, hic nobis consequatur dolorum exercitationem sint,
            maxime ad assumenda aperiam repudiandae eos earum aut dolor
            quos deleniti corrupti dolores consequuntur quasi est eius!
            Earum, voluptas?
          </p>
        </Container>
      </section>

      <section>
        <Container>
          <div className='rounded-md border-2 border-mint px-8 py-12'>
            <Heading
              level='h2'
              headingText='latest news'
            />
            <div className='flex justify-around'>
              <div className='bg-uranium h-72 w-2/12'></div>
              <div className='bg-uranium h-72 w-2/12'></div>
              <div className='bg-uranium h-72 w-2/12'></div>
              <div className='bg-uranium h-72 w-2/12'></div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
