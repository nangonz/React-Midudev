
export default function TwitterFollowCard({userName, name, isFollowing}){
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                className='tw-follow-card-avatar'
                src={`https://unavatar.io/${userName} `}
                alt="profile pic" />
                <div className='tw-follow-card-info'>
                    <strong>{name}</strong>
                    <span className='tw-follow-card-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-follow-card-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}