interface IStatProps {
    title: string
    value: number
    icon: any
    color: string
}

export default function Stat(props: IStatProps) {
    return (
		<div className="stat mb-5 mr-5 flex flex-[1] rounded-[8px] bg-[#fff] p-5
        border border-solid border-black border-opacity-20 shadow">
			<div
				className="stat-icon flex items-center"
				style={{ color: props.color || '#000' }}
			>
				{props.icon}
			</div>
			<div className="stat-info flex-[1] flex flex-col items-end">
				<span className="stat-title text-[1.2rem]">{props.title}</span>
				<span className="stat-value text-[3rem]">{props.value}</span>
			</div>
		</div>
	)
}