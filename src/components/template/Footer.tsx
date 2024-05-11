interface IFooterProps {
    className?: string
}

export default function Footer(props: IFooterProps) {
    return (
        <footer className={`
            footer flex justify-end place-items-center pr-3
            bg-gray-300 text-gray-500
            ${props.className}
        `}>
            <span>Copyright <strong>SIAH</strong> © 2024</span>
        </footer>
    )
}