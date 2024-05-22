interface IMenuProps {
    className?: string
}

export default function Menu(props: IMenuProps) {
    return (
        <aside className={`
            menu flex flex-col flex-wrap
            bg-gradient-to-r from-gray-900 to-gray-700
            ${props.className}
        `}>
            <h1>Menu</h1>
        </aside>
    )
}