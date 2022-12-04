import Image from "next/image";
import Link from "next/link";
import "./style.scss";
import hyperplanningIcon from "./icons/hyperplanning.ico";

const liensEcole = [
	{
		key: "Hyperplanning",
		name: "Hyperplanning",
		url: "https://planning.divtec.ch/hp",
		icon: hyperplanningIcon
	},
	{
		key: "ModulBaukasten",
		name: "Plan modulaire",
		url: "https://www.ict-berufsbildung.ch/services/modulbaukasten",
		icon: "https://www.ict-berufsbildung.ch/favicon.ico"
	},
	{
		key: "Divtec",
		name: "Divtec",
		url: "https://www.divtec.ch/",
		icon: "https://www.divtec.ch/favicon.ico"
	}
];

const liensExternes = [
	{
		key: "VSCode",
		name: "Installateur VSCode",
		url: "https://code.visualstudio.com/download",
		icon: "https://code.visualstudio.com/favicon.ico",
	},
	{
		key: "Infomaniak",
		name: "Manager infomaniak",
		url: "https://manager.infomaniak.com/",
		icon: "https://manager.infomaniak.com/v3/assets/favicon/favicon-16x16.png"
	},
];

const Liens = () => {
	return (
		<div>
			<h1>Liens utiles</h1>
			<div>
				<h2>Liens de l&apos;école</h2>
				<ul>
					{
						liensEcole.map((link) =>
							<li key={link.key}>
								<Link href={link.url} target="_blank">
									<Image height={13} width={13} src={link.icon} alt={'icône ' + link.key} />
									{link.name}
								</Link>
							</li>
						)
					}
				</ul>
				<h2>Liens externes</h2>
				<ul>
					{
						liensExternes.map((link) =>
							<li key={link.key}>
								<Link href={link.url} target="_blank">
									<Image height={13} width={13} src={link.icon} alt={'icône ' + link.key} />
									{link.name}
								</Link>
							</li >
						)
					}
				</ul >
			</div >
		</div >
	);
};

export default Liens;
