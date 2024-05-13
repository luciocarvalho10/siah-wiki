import styles from '@/styles/Header.module.css'
import { IconeAnguloBaixo, IconeAnguloEsquerdo } from '@/components/icons'

interface IHeaderProps {
    className?: string
    title: string
    hideToggle: boolean
}

export default function Header(props: IHeaderProps) {
    const icon = () => IconeAnguloEsquerdo
    const toggleMenu = () => {}

    return (
		<header
			className={`
            header
            flex justify-center place-items-center
            bg-gradient-to-r from-blue-500 to-blue-300
            ${props.className}
        `}>
			{!props.hideToggle ? (
                <a
                    href='#'
                    onClick={toggleMenu}
                    className={`
                        h-full w-16 text-white
                        flex justify-center place-items-center
                        ${styles.toggle}
                    `}>
                    <i>{icon()}</i>
                </a>
            ): false}

			<h1 className={`
                text-white font-thin text-xl
                text-center flex-grow
                ${styles.title}
            `}>
                {props.title}
            </h1>
		</header>
	)
}