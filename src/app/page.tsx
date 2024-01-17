import AboutSection from "./section/home/about/AboutSection";
import HeroSection from "./section/home/hero/HeroSection";
import OpeningSection from "./section/home/opening/OpeningSection";
import PortfolioSection from "./section/home/portfolio/PortfolioSection";
import ToolsSection from "./section/home/tools/ToolsSection";

export default function Home() {
  return (
    <main className="container_home">
			<HeroSection/>
			<div className="hero_frame">
				<div className="top">
					<img src="/decor/side_l.webp" alt="" className="side l" />
					<img src="/decor/side_r.webp" alt="" className="side r" />
				</div>
				<div className="bottom">
					<img src="/decor/side_l.webp" alt="" className="side l" />
					<img src="/decor/side_r.webp" alt="" className="side r" />
				</div>
			</div>
			<AboutSection/>
			<PortfolioSection/>
			<ToolsSection/>
			<OpeningSection/>

			
    </main>
  )
}
