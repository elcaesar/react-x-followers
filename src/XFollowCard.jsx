import { useState } from 'react'

export function XFollowCard ({userName, name}) { 
  
  const [isFollowing, setIsFollowing] = useState(false); 
  
  const imageSrc = `https://unavatar.io/${userName}`;
  const textButtonFollow = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'x-followCard-button is-following' : 'x-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className='x-followCard'> 
      <header className='x-followCard-header'>
        <img className= 'x-followCard-avatar' src={imageSrc} alt="profile picture" />
        <div className='x-followCard-info'>
          <strong>{name}</strong>
          <span className='x-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick= {handleClick}>
          <span className='x-followCard-textButton'>{textButtonFollow}</span>
          <span className='x-followCard-leaveFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}