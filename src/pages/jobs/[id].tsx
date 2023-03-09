
import { useRouter } from 'next/router'
import Image from 'next/image'
import { jobs } from '@/data/jobs';
import JobTitle from '@/components/Job/JobTitle';
import JobDesc from '@/components/Job/JobDesc';
interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}



export default function id() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  let jobId = Number(id)
  return (
    <div
      className='flex flex-col items-center mx-auto min-h-screen py-2 h-screen w-full debug'
    >
      {jobs.map((job: Job,i) => {
        if (job.id === jobId) {
          return (
            <div key={i}>
            <JobTitle
              id={job.id}
              company={job.company}
              logo={job.logo}
              logoBackground={job.logoBackground}
              url={job.website}
              />
            </div>
          )
        }
      })}


      {
        jobs.map((job: Job, i) => {
          if (job.id === jobId) {
            return (
              <div key={i}>
              <JobDesc
                id={job.id}
                  role={job.role}
                  requirements={job.requirements}
                  description={job.description}
                  place={job.location}
                  type={job.contract}
                  postedAt={job.postedAt}
              />
              </div>
            )
          }
        })
      }
  
    </div>
  )
}
