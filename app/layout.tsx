import Link from "next/link";
import nextIcon from "/assets/icons/NEXTJS/logotype/light-background/nextjs-logotype-light-background.svg";
import Image from "next/image";
import reactIcon from "/assets/icons/react.svg";
import heart from "/assets/icons/heart.png";
import darkVercelIcon from "/assets/icons/Vercel/logotype/dark/vercel-logotype-dark.svg";
import infAIcon from "/assets/icons/infa.svg";
import "./style.scss";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<header>
					<nav>
						<Link href="/"><Image src={infAIcon} alt="Logo de la classe" /></Link>
						<ul>
							<li>
								<Link href="/">Accueil</Link>
							</li>
							<li>
								<Link href="/calculateurs">Calculateurs</Link>
							</li>
							<li>
								<Link href="/balai">Balai</Link>
							</li>
							<li>
								<Link href="/liens">Liens utiles</Link>
							</li>
							<li>
								<Link href="https://menus.emt-infa.ch/">Menus de la cantine</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					{children}
				</main>
				<footer>
					<div className="root">
						<p>
							&copy; 2022 Chloé Renaud et Odin Beuchat - Tous droits réservés
						</p>
						<div className="resources">
							<div>
								<span>
									Made with </span>
								<Link href="https://reactjs.com/">
									<Image src={reactIcon} alt={"react.js"} />
								</Link>
								<span>, </span>
								<Link href="https://nextjs.org/">
									<Image src={nextIcon} alt={"next.js"} />
								</Link>
								<span> and </span>
								<Link href="https://www.bag.admin.ch/bag/fr/home.html">
									<Image src={heart} alt={"love"} />
								</Link>
								<span>.</span>
							</div>
							<div>
								<span>Powered by </span>
								<Link href="https://vercel.com/">
									<Image src={darkVercelIcon} alt={"vercel"} />
								</Link>
							</div>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
