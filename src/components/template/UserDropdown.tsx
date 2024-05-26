import useStore from '@/data/hooks/useStore'
import Link from 'next/link'
import {
	ChevronDownIcon,
	CogIcon,
	ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/16/solid'
import nmmf from '@/assets/nmmf.png'

export default function UserDropdown() {
	const { user } = useStore()

	return (
		<div className={`group h-full hover:bg-black hover:bg-opacity-20`}>
			<div
				className={`flex h-full cursor-pointer items-center px-5 text-white`}
			>
				<span className="hidden sm:block">{user?.name}</span>
				<div className="mx-[10px] my-0">
					<img
						src={nmmf.src}
						alt="nmmf"
						className={`size-[37px] rounded-[5px]`}
					/>
				</div>
				<ChevronDownIcon className="h-6 w-6" />
			</div>
			<div
				className={`invisible absolute right-0 z-[1] flex min-w-[170px]  flex-col flex-wrap  bg-gray-100 p-[10px]  opacity-0 shadow-lg transition-[visibility,opacity] duration-100 ease-linear group-hover:visible group-hover:opacity-[1]`}
			>
				<Link
					href="/admin"
					className="flex flex-wrap place-content-start p-[10px] hover:bg-gray-200"
				>
					<CogIcon className="mr-2 h-6 w-6" />
					Administração
				</Link>
				<Link
					href="/dashboard"
					className="flex flex-wrap place-content-start  p-[10px] hover:bg-gray-200"
				>
					<ArrowRightStartOnRectangleIcon className="mr-2 h-6 w-6" />
					Sair
				</Link>
			</div>
		</div>
	)
}
