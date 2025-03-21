import { BUTTONS, EVENTS } from "./consts"

function navigate(href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
    const handleClick = (event) => {
        event.preventDefault()

        const isMainEvent = event.button === BUTTONS.PRIMARY // Left click
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === null || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            navigate(to)
        }

    }

    return <a onClick={handleClick} href="to" target={target} {...props}></a>
}