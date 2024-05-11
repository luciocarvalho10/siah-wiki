interface IHeaderProps {
    className?: string
}

export default function Header(props: IHeaderProps) {
    return (
        <header className={`
            header flex justify-center place-items-center
            bg-gradient-to-r from-blue-500 to-blue-300
            ${props.className}
        `}>
            <h1>Header</h1>
        </header>
    )
}