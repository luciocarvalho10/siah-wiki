import { createContext, ReactNode, useEffect, useState } from 'react'

interface IStoreContextProps {
	children: ReactNode
}
export interface IContextStoreProps {
	isMenuVisible: boolean
	toggleMenu?: () => void
}

const initialState: IContextStoreProps = {
	isMenuVisible: false,
	toggleMenu: () => {},
}
const ContextStore = createContext<IContextStoreProps>(initialState)

export const StoreContext = (props: IStoreContextProps) => {
	const [state, setState] = useState<IContextStoreProps>(initialState)

	function isVisible(state: IContextStoreProps) {
		setState({
			...state,
			isMenuVisible: !state.isMenuVisible,
		})
	}

	function toggleMenu() {
		state.isMenuVisible ? isVisible(state) : isVisible(state)
	}

	useEffect(
		() =>
			setState({
				...state,
				toggleMenu,
			}),
		[state.isMenuVisible],
	)

	return (
		<ContextStore.Provider value={state}>
			{props.children}
		</ContextStore.Provider>
	)
}

export default ContextStore
