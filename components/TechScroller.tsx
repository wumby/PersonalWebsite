import Image from "next/image";


interface TechScrollerProps {
    fast?: boolean;
    techStack: {src: string[], name: string}[];
}

export default function TechScroller(props: TechScrollerProps) {
    const speed = props.fast ? 'animate-scroll' : 'animate-scroll-slow';
  return (
    <div className="w-full overflow-hidden my-[5vh]">
      <div className={`flex w-max ${speed}`}>
      {[...props.techStack, ...props.techStack].map((tech, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="flex justify-center items-center mx-[10vh]">
            <Image src={tech.src[0]} alt={tech.name} width={50} height={50} className="dark:block hidden"/> 
            <Image src={tech.src[1]} alt={tech.name} width={50} height={50} className="dark:hidden block"/>
            <span className="text-2xl text-black dark:text-white ml-2 ">{tech.name}</span>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
