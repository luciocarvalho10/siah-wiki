import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import Menu from "@/components/template/Menu";

export default function SiahWiki() {
  return (
    <div className={`
        app
        h-screen w-full
        antialiased
    `}>
      <Header title="SiahWiki" hideToggle={false}/>
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}
