import { Link } from '../Link.jsx'

const il8n = {  // internationalization
    en: {
        title: 'About Us',
        description: 'This is an example page to create a react router from scratch.',
        goToHome: 'Go to Home',
    },
    es: {
        title: 'Sobre Nosotros',
        description: 'Esta es una página de ejemplo para crear un router en react desde cero.',
        goToHome: 'Ir a Inicio',
    }
}

const useIl8n = (lang) => {
    return il8n[lang] || il8n.en
}

export default function AboutPage({ routeParams }) {
    const il8n = useIl8n(routeParams.lang ?? 'en')
    return (
        <>
            <h1>{il8n.title}</h1>
            <div>
                <img width='240px' src="https://media.licdn.com/dms/image/v2/D5603AQHEORdTR4pcuw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724258334598?e=1747872000&v=beta&t=xqkZsLN5L7XV4w-zeyakXgXVVBvQakFJvfmwkPoGNyc" alt="Tibe´s picture" />
            </div>
            <p>{il8n.description}</p>
            <Link to='/'>{il8n.goToHome}</Link>
        </>
    )
}