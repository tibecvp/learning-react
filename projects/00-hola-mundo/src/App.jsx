import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
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
    )
}