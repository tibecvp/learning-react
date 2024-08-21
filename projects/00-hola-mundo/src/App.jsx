import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName : 'tibecvp',
        name : 'Tiberio Calderon',
        isFollowing: true
    },
    {
        userName : 'camigomezdev',
        name : 'Cami Gomez',
        isFollowing: false
    },
    {
        userName : 'midudev',
        name : 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName : 'denniscava',
        name : 'Dennis Calderon',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='cardsContainer'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
/*
        <section className='cardsContainer'>
            <TwitterFollowCard userName="tibecvp" initialIsFollowing>
                Tibe Calderon
            </TwitterFollowCard>
            <TwitterFollowCard userName="camigomezdev" initialIsFollowing={false}>
                Cami Gomez
            </TwitterFollowCard>
            <TwitterFollowCard userName="midudev" initialIsFollowing>
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard userName="denniscava" initialIsFollowing={false}>
                Dennis Calderon
            </TwitterFollowCard>
        </section>
*/
    )
}