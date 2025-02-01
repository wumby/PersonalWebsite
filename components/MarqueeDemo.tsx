import { cn } from "@/lib/utils";
import { Marquee } from "./Marquee";
import { LinkPreview } from "./LinkPreview";
import Image from "next/image";

const reviews = [
  {
    name: "Syam Alakula",
    username: "Java Developer",
    body: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    img: "/syam.png",
    linkedIn: 'https://www.linkedin.com/in/syam-alakula/',
    linkImg:'/syam2.png'
  },
  {
    name: "Samuel Valencia",
    username: "Software Engineer",
    body: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    img: "/samuel.jpg",
    linkedIn: 'https://www.linkedin.com/in/samuel-valencia/',
    linkImg:'/samuel.png'
  },
  {
    name: "Marcus Longwell",
    username: "Senior Software Engineer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/marcus.jpg",
    linkedIn: 'https://www.linkedin.com/in/marcuslongwell/',
    linkImg:'/marcus.png'
  },
  {
    name: "Mike Korth",
    username: "Front-End Engineer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/mike.jpg",
    linkedIn: 'https://www.linkedin.com/in/mike-korth/',
    linkImg:'/mike.png'
  },
  {
    name: "Todd Gindlesperger",
    username: "Program Manager",
    body: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    img: "/todd.jpg",
    linkedIn: 'https://www.linkedin.com/in/todd-gindlesperger-b38b1910/',
    linkImg:'/todd.png'
  },
  {
    name: "Gnanam Rajamanickam",
    username: "Tech Lead",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/gnanam.jpg",
    linkedIn: 'https://www.linkedin.com/in/gnanam-rajamanickam-13794188/',
    linkImg:'/gnanam.png'
  },
  {
    name: "Michael Krasilinec",
    username: "Software Developer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/michael.jpg",
    linkedIn: 'https://www.linkedin.com/in/michaelkrasilinec/',
    linkImg:'/michael.png'
  },
  {
    name: "Ankur Shahi",
    username: "Instructional Designer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/ankur.jpg",
    linkedIn: 'https://www.linkedin.com/in/ankur-shahi/',
    linkImg:'/ankur.png'
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  linkedIn,
  linkImg
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  linkedIn: string;
  linkImg: string;
}) => {
  return (
    <LinkPreview imageSrc={linkImg} url={linkedIn} isStatic>
    <figure
      className={cn(
        "relative w-[22rem] cursor-pointer rounded-xl border p-4 h-[20vh] overflow-hidden",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    ><div className="flex flex-row items-center gap-2">
    <Image className="rounded-full z-0" width="50" height="50" alt="" src={img} />
    <div className="flex flex-col">
      <figcaption className="text-sm font-medium dark:text-white">
        {name}
      </figcaption>
      <p className="text-xs font-medium dark:text-white/40">{username}</p>
    </div>
  </div>
  <blockquote className="mt-2 text-sm">{body}</blockquote>
      
    </figure>
    </LinkPreview>
  );
};

export function MarqueeDemo() {
  return (
    <div className=" flex w-full flex-col items-center justify-center rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
