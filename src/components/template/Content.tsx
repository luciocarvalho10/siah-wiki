interface IContentProps {
    className?: string
    children?: React.ReactNode
}

export default function Content(props: IContentProps) {
    return (
		<div className={`
            content bg-gray-200 p-5
            ${props.className}
        `}>
			{props.children}
		</div>
	)
}