import Header from "./components/Header";
import Quests from "./components/QuestInfo";
import Skills from "./components/Skills";
import StatusPanel from "./components/StatusPanel";
import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 justify-center">
      <Header />
      <Quests />
      <StatusPanel />
      <Tasks />
    </main>
  );
}
