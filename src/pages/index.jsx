import Header from "../components/Header.jsx";
import Sidebar from '../components/Sidebar.jsx';
export default function Home() {
 return(

    <div className="flex">
        <Sidebar/>
        <div className="flex-1">
        <Header/>
        </div>
     
     <main className="p-4">
        <h2 className="text-center mt-10 text-lg">Welcome to this website</h2>
     </main>
    </div>
 );
}

