import Image from 'next/image';
import Card from '../../src/app/components/card'
import Footer from '../../src/app/components/footer'
import Form from '../../src/app/components/form'
import TwoColumnLayout from '../../src/app/components/switch'
import { createClient } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { useRouter } from 'next/navigation';


async function getData(){
  const fetchData = await client.fetch(`*[_type == 'slidercard']`)
  return fetchData
}

const cardData = [
  {
    title: 'Invoice Digitization',
    description: 'Automate all formats of invoices received across any channel into a centralized repository in a single format to reduce error & increase team efficiency',
    source: '/digitization.svg', // Replace with the actual path to your image
  },
  {
    title: 'Invoice Processing',
    description: 'Automate invoice capturing, invoice exchange with vendors & approval workflows. Centralized vendor portal for tracking all PO’s',
    source: '/processing.svg', // Replace with the actual path to your image
  },
  {
    title: 'Centralized access and collaboration',
    description: 'Collaboration, interaction and documentation is centered at each invoice level making approval workflows efficient, seamless and audit ready',
    source: '/setting.svg', // Replace with the actual path to your image
  },
  {
    title: 'Advanced & Quick customizable workflows',
    description: 'Advanced AI that adapts to AP processes unique to your organization within the shortest amount of time',
    source: '/access-colab.svg', // Replace with the actual path to your image
  },
  {
    title: 'Invoice Matching',
    description: 'Effortless 2 and 3 way matching with easy to understand ‘reason’ coding for users increasing efficiency & protect against fraud and duplication',
    source: '/matching.svg', // Replace with the actual path to your image
  },
  {
    title: 'Integrated Vendor Management',
    description: 'Manage vendor onboarding, documentation and payment from one place',
    source: '/management.svg', // Replace with the actual path to your image
  },
  {
    title: 'Strengthen treasury & your supply chain',
    description: 'Increase treasury income through early payments via dynamic discounting. Earn more from each spend via KredX’s AP card program',
    source: '/supply-chain.svg', // Replace with the actual path to your image
  },
  {
    title: 'Audit ready',
    description: 'One-click access to all conversations and notes at each invoice level. Data available on cloud archived after 7 years for full audit trail wherever required.',
    source: '/audit.svg', // Replace with the actual path to your image
  },
  // Add more image objects as needed
];

export default async function Home() {
  const data = await getData();



  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
            />
          </a>
        </div>
      </div> */}

      <div className="container h-[806px]  bg-[url('/bg-section1.png')] bg-no-repeat bg-cover px-28 py-10">
        <div>
          <Image
            src="/cms-logo.svg"
            alt="Cms Logo"
            className=""
            width={334}
            height={80}
            />
        </div>
        <div className="w-full grid grid-cols-2 items-center justify-between">
          <div>
            <div className="w-full text-white text-6xl font-semibold font-['Inter'] mb-7">Automate Your Finance Function</div>
            <div className="text-white text-[34px] font-bold font-['Inter'] capitalize mb-14">WITHOUT Reworking Your ERP</div>
            <button className="text-white text-center text-[20px] bg-teal-400 py-2 px-7 rounded">
              Learn More
            </button>
          </div>
          <div>
          <Image
              src="/robot.png"
              alt="Robot Logo"
              className=""
              width={610}
              height={443}
            />
          </div>
        </div>
      </div>
      
      <div className='flex justify-center items-center p-24'>
        <Image
          src="/arrowleft.svg"
          alt="Vercel Logo"
          className='mx-2'
          width={56}
          height={109}
        />
        <h3 className='text-center'> Only KredX’s AP Solution lets you automate and streamline your entire PO-to-Pay process without messing up your existing processes. That’s because we support all native functionality for 40+ ERPs</h3>
        <Image
          src="/arrowright.svg"
          alt="Vercel Logo"
          width={56}
          height={109}
          className='mx-2'
        />
      </div>
      <div className="container p-8 bg-[url('/bg-section2.png')]">
        <div className="text-center text-teal-600 text-[50px] font-semibold font-['Inter'] mb-20 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-sky-400">KredX AP Automation Capabilities</div>
        <Card data={cardData}/>
        <div className="flex justify-center items-center">
          <button className="text-white text-center text-[20px] bg-teal-400 py-2 px-7 rounded">
            Request Demo
          </button>
        </div>      
      </div>
      <div className='container px-28 mt-20 mb-24'>
        <div className='text-[50px] text-center font-semibold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-950 to-teal-500'>The KredX CMS Advantage</div>
        <TwoColumnLayout/>
      </div>
      <div className='container  py-28 px-28'>
        <div className='text-[50px] text-center font-semibold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-950 to-teal-500'>Resources</div>
        <div className='flex'>
        {
          data.map((value, index)=> {
            return (
              <div key={index} className='w-1/3'>
                <Image
                    src={value.source}
                    alt="1"
                    className=""
                    width={387}
                    height={218}
                  />
                  <div className='text-[20px'>{value.title}</div>
                  <div className='text-slate-600 text-[14px]'>{value.date}</div>
              </div>
            )
          })
        }
      </div>
      </div>
      <div className='container pb-28 px-28'>
        <div className='flex shadow-md p-10 rounded'>
          <div className='w-1/2 grow-0'>
            <Image
              src="/form-img.jpg"
              alt="form"
              width={543}
              height={473}
              className='rounded'
            />
          </div>
          <div className='w-1/2 grow'>
            <div className='text-[34px] text-center font-semibold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-indigo-950 to-teal-500'>Experience the simplicity and efficiency of KredX today!</div>
            <Form/>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
