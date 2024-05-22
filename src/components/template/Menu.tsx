import useStore from "@/data/hooks/useStore"

interface IMenuProps {
    className?: string
}

export default function Menu(props: IMenuProps) {
    const { isMenuVisible } = useStore()

    const renderMenu = () => (
        <aside className={`
            menu flex flex-col flex-wrap
            bg-gradient-to-r from-gray-900 to-gray-700
            ${props.className}
        `}>
            <h1>Menu</h1>
        </aside>
    )

    return !isMenuVisible ? renderMenu() : false
}