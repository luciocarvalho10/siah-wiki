import styles from '@/styles/Header.module.css'
import useStore from '@/data/hooks/useStore'
import { ChevronLeftIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import UserDropdown from './UserDropdown'

interface IHeaderProps {
    title: string
    hideToggle: boolean
    hideUserDropdown: boolean
}

export default function Header(props: IHeaderProps) {
    const { toggleMenu } = useStore()
    const icon = (size: number) => props.hideToggle
      ? <ChevronDownIcon className={`h-${size} w-${size}`} />
	  : <ChevronLeftIcon className={`h-${size} w-${size}`} />

    const renderchevron = () => (
        <a
            href='#'
            onClick={toggleMenu}
            className={`
                flex h-full w-16
                place-items-center justify-center text-white
                ${styles.toggle}
            `}
        >
            {icon(6)}
        </a>
    )

    return (
		<header
			className={`
            header
            flex place-items-center justify-center
            bg-gradient-to-r from-blue-500 to-blue-300
        `}>
            {renderchevron()}
			<h1
				className={`
                    flex-grow text-center text-xl
                    font-thin text-white
                    ${styles.title}
                `}
			>
				{props.title}
			</h1>

            {!props.hideUserDropdown && <UserDropdown />}
		</header>
	)
}