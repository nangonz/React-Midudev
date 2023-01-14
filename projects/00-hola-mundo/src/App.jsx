import TwitterFollowCard from "./TwitterFollowCard"
import './App.css'


export default function App(){
    return(
        <section className="app">
            <TwitterFollowCard userName='midudev' name='Miguel Angel Duran'/>
            <TwitterFollowCard userName='pheralb' name='Pablo Hernandez'/>
            <TwitterFollowCard userName='nangonz' name='Damian Gonzalez'/>
        </section>
    )
}