interface IContentProps {
    className?: string
}

export default function Content(props: IContentProps) {
    return (
		<div className={`
            content bg-gray-200 p-5
            ${props.className}
        `}>
			<h1>Content</h1>
		</div>
	)
}