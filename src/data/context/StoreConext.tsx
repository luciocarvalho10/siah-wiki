import { createContext, ReactNode, useEffect, useState } from 'react'

export interface IContextStoreProps {
	isMenuVisible: boolean
    user?: {
        name: string
        email: string
    }
	toggleMenu?: () => void
}

const initialState: IContextStoreProps = {
	isMenuVisible: true,
    user: {
        name: 'LPC',
        email: 'lpc@lpc.com.br',
    },
	toggleMenu: () => {},
}
const ContextStore = createContext<IContextStoreProps>(initialState)

export const StoreContext = (props: { children: ReactNode }) => {
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
