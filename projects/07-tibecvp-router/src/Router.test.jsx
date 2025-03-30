import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from './Router'
import { Route } from './Route'
import { Link } from './Link'
import { getCurrentPath } from './utils'

vi.mock('./utils', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render 404 page when no route matches', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/')
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            },
            {
                path: '/about/:lang',
                Component: () => <h1>About in another language</h1>
            }
        ]

        render(<Router routes={routes} />)
        expect(screen.getByText('Home')).toBeTruthy()
        expect(screen.queryByText('About')).toBeFalsy()
        expect(screen.queryByText('About in another language')).toBeFalsy()
        expect(screen.queryByText('404')).toBeFalsy()
    })

    it('should navigate using links', () => {
        getCurrentPath.mockReturnValue('/')

        render(
            <Router>
                <Route path='/' Component={() => {
                    return (
                        <div>
                            <h1>Home</h1>
                            <Link to='/about'>About</Link>
                        </div>
                    )
                }} />
            </Router>

        )

        screen.getByText('About').click()
        // Check the new route is rendered
        expect(screen.getByText('About')).toBeTruthy()
    })
})