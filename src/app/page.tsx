import Header from "./components/Header";
import Latest from "./components/Latestblogs";

export default async function Home() {
  
  return (
    <div className="h-full bg-myblack">
     <Header />
     <Latest />
      
    </div>
  );
}
