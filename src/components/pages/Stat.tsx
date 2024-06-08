interface IStatProps {
    title: string
    value: number
    icon: any
    color: string
}

export default function Stat(props: IStatProps) {
    return (
		<div className="stat">
			<div
				className="stat-icon"
				style={{ color: props.color || '#000' }}
			>
				{props.icon}
			</div>
			<div className="stat-info">
				<span className="stat-title">{props.title}</span>
				<span className="stat-value">{props.value}</span>
			</div>
		</div>
	)
}