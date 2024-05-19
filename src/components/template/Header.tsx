import styles from '@/styles/Header.module.css'
import { IconeAnguloBaixo, IconeAnguloEsquerdo } from '@/components/icons'
import useStore from '@/data/hooks/useStore'

interface IHeaderProps {
    className?: string
    title: string
    hideToggle: boolean
}

export default function Header(props: IHeaderProps) {
    const { toggleMenu } = useStore()
    const icon = () => props.hideToggle ? IconeAnguloBaixo: IconeAnguloEsquerdo

    return (
		<header
			className={`
            header
            flex place-items-center justify-center
            bg-gradient-to-r from-blue-500 to-blue-300
            ${props.className}
        `}
		>
			{!props.hideToggle ? (
				<a
					href="#"
					onClick={toggleMenu}
					className={`
                        flex h-full w-16
                        place-items-center justify-center text-white
                        ${styles.toggle}
                    `}
				>
					<i>{icon()}</i>
				</a>
			) : (
				<a
					href="#"
					onClick={toggleMenu}
					className={`
                        flex h-full w-16
                        place-items-center justify-center text-white
                        ${styles.toggle}
                    `}
				>
					<i>{icon()}</i>
				</a>
			)}
			<h1
				className={`
                flex-grow text-center text-xl
                font-thin text-white
                ${styles.title}
            `}
			>
				{props.title}
			</h1>
		</header>
	)
}