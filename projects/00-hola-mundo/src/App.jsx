import TwitterFollowCard from "./TwitterFollowCard"
import './App.css'


export default function App(){

    const users = [
        {
            id:1,
            userName:'midudev',
            name:'Miguel Angel Duran',
            isFollowing: true
        },
        {
            id:2,
            userName:'pheralb',
            name:'Pablo Heraldo',
            isFollowing: false
        },
        {
            id:3,
            userName:'nangonz',
            name:'Damian Gonzalez',
            isFollowing: true
        },
        {
            id:4,
            userName:'TMChein',
            name:'Tomás',
            isFollowing: true
        },

    ]
    return(
        <section className="app">

            {
                users.map(user => {
                    const {id, userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard
                            key={id}
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