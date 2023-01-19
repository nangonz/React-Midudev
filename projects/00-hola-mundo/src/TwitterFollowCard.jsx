import { useState } from "react"


export default function TwitterFollowCard({initialIsFollowing, userName, name}){
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing? 'Siguiendo' : 'Seguir'
    const classNameFollowing = isFollowing? 'tw-follow-card-button is-following': 'tw-follow-card-button'
    
    const handleOnClick = (userName) =>{
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                className='tw-follow-card-avatar'
                src={`https://unavatar.io/${userName}`}
                alt="profile pic" />
                <div className='tw-follow-card-info'>
                    <strong>{name}</strong>
                    <span className='tw-follow-card-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button onClick={()=> handleOnClick(userName)} className={classNameFollowing}>
                    <span className="tw-follow-card-buttonText">{text}</span> 
                    <span className="tw-follow-card-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}