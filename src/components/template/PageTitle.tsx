interface IPageTitleProps {
	main: string
	sub: string
	icon: any
}

export default function PageTitle(props: IPageTitleProps) {
	return (
		<div>
			<h1 className="m-0">
				{props.icon ? props.icon : false}
				{props.main}
			</h1>
			<h2 className="mt-[5px] text-[1.5rem] text-gray-400">
				{props.sub}
			</h2>
			<hr />
		</div>
	)
}
