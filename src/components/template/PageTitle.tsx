interface IPageTitleProps {
	main: string
	sub: string
	icon: any
}

export default function PageTitle(props: IPageTitleProps) {
	return (
		<div>
			<h1 className="text-[1.5rem] m-0 flex items-center">
				{props.icon ? props.icon : false}
				{props.main}
			</h1>
			<h2 className="] mt-[5px] text-gray-400">{props.sub}</h2>
			<hr />
		</div>
	)
}
