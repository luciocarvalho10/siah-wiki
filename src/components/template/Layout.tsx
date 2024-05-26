import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import Menu from "@/components/template/Menu";
import useStore from "@/data/hooks/useStore";

export default function Layout(props: { children: React.ReactNode }) {
    const { isMenuVisible } = useStore()

	return (
		<div className={`
            app ${isMenuVisible ? 'hide-menu' : ''}
            h-dvh w-full antialiased
        `}>
			<Header
				title="SiahWiki"
				hideToggle={isMenuVisible}
                hideUserDropdown={false}
			/>
			<Menu />
			<Content>{props.children}</Content>
			<Footer />
		</div>
	)
}
