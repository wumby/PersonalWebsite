import { cn } from "@/lib/utils";
import { Marquee } from "./Marquee";
import { LinkPreview } from "./LinkPreview";
import Image from "next/image";

const reviews = [
  {
    name: "Syam Alakula",
    username: "Java Developer",
    body: "Working with Jack as a backend dev has been smooth from day one. He asks the right questions, and creates a clean, well-structured UI that makes our backend services shine.",
    img: "/syam.png",
    linkedIn: "https://www.linkedin.com/in/syam-alakula/",
    linkImg: "/syam2.png",
  },
  {
    name: "Samuel Valencia",
    username: "Software Engineer",
    body: "Jack has a deep understanding of frontend development, but they never act like the smartest person in the room. He is happy to jump in to help when needed, and always keep the team moving in the right direction.",
    img: "/samuel.jpg",
    linkedIn: "https://www.linkedin.com/in/samuel-valencia/",
    linkImg: "/samuel.png",
  },
  {
    name: "Marcus Longwell",
    username: "Senior Software Engineer",
    body: "I know I can always count on Jack to deliver solid work. He takes ownership, thinks through problems, and doesn't need hand-holding.",
    img: "/marcus.jpg",
    linkedIn: "https://www.linkedin.com/in/marcuslongwell/",
    linkImg: "/marcus.png",
  },
  {
    name: "Mike Korth",
    username: "Front-End Engineer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/mike.jpg",
    linkedIn: "https://www.linkedin.com/in/mike-korth/",
    linkImg: "/mike.png",
  },
  {
    name: "Todd Gindlesperger",
    username: "Program Manager",
    body: "Jack is one of those engineers you can always count on. He takes ownership of his work, communicatse well, and keeps things moving. It makes my job way easier.",
    img: "/todd.jpg",
    linkedIn: "https://www.linkedin.com/in/todd-gindlesperger-b38b1910/",
    linkImg: "/todd.png",
  },
  {
    name: "Gnanam Rajamanickam",
    username: "Tech Lead",
    body: "One thing that stands out about Jack is how well he collaborates and makes sure everyone’s on the same page. The communication greatly improved our teams success",
    img: "/gnanam.jpg",
    linkedIn: "https://www.linkedin.com/in/gnanam-rajamanickam-13794188/",
    linkImg: "/gnanam.png",
  },
  {
    name: "Michael Krasilinec",
    username: "Software Developer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/michael.jpg",
    linkedIn: "https://www.linkedin.com/in/michaelkrasilinec/",
    linkImg: "/michael.png",
  },
  {
    name: "Ankur Shahi",
    username: "Instructional Designer",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/ankur.jpg",
    linkedIn: "https://www.linkedin.com/in/ankur-shahi/",
    linkImg: "/ankur.png",
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
  linkImg,
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
      >
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full z-0"
            width="50"
            height="50"
            alt=""
            src={img}
          />
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
