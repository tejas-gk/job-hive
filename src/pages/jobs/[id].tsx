
import { useRouter } from 'next/router'
import Image from 'next/image'
import { jobs } from '@/data/jobs';
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
  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen py-2 h-screen'
    >
      <div>
        <Image
          src={jobs[0].logo}
          alt={jobs[0].company}
          width={50}
          height={50}
          />
      </div>
    </div>
  )
}
