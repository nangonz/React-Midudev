import TwitterFollowCard from "./TwitterFollowCard"
import UseMemoExample from "./UseMemoExample"
import './App.css'


export default function App(){

    const users = [
        {
            id:1,
            userName:'midudev',
            name:'Miguel Angel Duran',
            isFollowing: false
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
            isFollowing: false
        },
        {
            id:4,
            userName:'TMChein',
            name:'Tomás',
            isFollowing: false
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
            <div>
                <UseMemoExample/>
            </div>
            
            
        </section>
    )
}