interface IPageTitleProps {
	main: string
	sub: string
	icon: any
}

export default function PageTitle(props: IPageTitleProps) {
	return (
		<div>
			<h1 className="m-0 flex items-center text-4xl">
				{props.icon ? props.icon : false}
				{props.main}
			</h1>
			<h2 className="] text-[1.3rem] mt-[5px] text-gray-500">
				{props.sub}
			</h2>
			<hr className="bg-gray-300 h-1 mt-2 mb-[15px]" />
		</div>
	)
}
