import TwitterFollowCard from "./TwitterFollowCard"
import './App.css'


export default function App(){

    const users = [
        {
            userName:'midudev',
            name:'Miguel Angel Duran',
            isFollowing: true
        },
        {
            userName:'pherald',
            name:'Pablo Heraldo',
            isFollowing: false
        },
        {
            userName:'nangonz',
            name:'Damian Gonzalez',
            isFollowing: true
        },
        {
            userName:'TMChein',
            name:'Tomás',
            isFollowing: true
        },

    ]
    return(
        <section className="app">

            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}
                        />
                    )
                })
            }
            
            
        </section>
    )
}