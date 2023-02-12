import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Search from '@/components/Search'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const jobData = [
  {
    title: 'web dev',
    location: 'India',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    time: 'now',
    type: 'full-time',
    skills: ['react', 'node', 'js'],
    link: '/'
  },
  {
    title: 'python dev',
    location: 'combodia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    time: 'now',
    type: 'contract',
    skills: ['python', 'node', 'js'],
    link: '/'
  },
  {
    title: 'web dev',
    location: 'India',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    time: 'now',
    type: 'full-time',
    skills: ['react', 'node', 'js'],
    link: '/'
  },
  {
    title: 'laravel dev',
    location: 'france',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    time: 'now',
    type: 'contract',
    skills: ['laravel', 'livewire', 'vuejs'],
    link: '/'
  },
  {
    title: 'cpp dev',
    location: 'India',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    time: 'now',
    type: 'full-time',
    skills: ['cpp', 'c', 'js'],
    link: '/'
  },
  {
    title: 'vue js',
    location: 'India',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    time: 'now',
    type: 'full-time',
    skills: ['vuejs', 'node', 'js'],
    link: '/'
  }

]
export default function Home() {
  return (
    <>
      <Head>
        <title>Job Hive</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='md:w-[85%] m-auto bg-white
      '>
        <Navbar />
        <Search />
        <div className="job-card-container grid lg:grid-cols-4  grid-cols-1
        
        ">
          {jobData.map((job, i) => (
            <div key={i}>
              <Link
                href={job.link}
              >
                <Card
                  title={job.title}
                  location={job.location}
                  description={job.description}
                  time={job.time}
                  type={job.type}
                  skills={job.skills}
                />
              </Link>
            </div>
          ))}
        </div>

      </main>
    </>
  )
}
