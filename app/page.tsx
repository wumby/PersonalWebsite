import { HomeScreen } from "@/components/HomeScreen";
import { projects } from "@/lib/projects";

export default function Home() {
  return <HomeScreen projects={projects} />;
}
