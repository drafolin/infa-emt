import imgFacadeSud from "/assets/01_CEJEF-DIVTEC_Porrentruy_Burri-P_facade_sud_M.jpg";
import Image from "next/image";
import imgVueOiseauPorren from "/assets/porrentruy.jpg";
import juraPaysage from "/assets/juraPaysage.jpg";
import TypingText from "./typingText";

const Root = () => {
	return (
		<>
			<div>
				<div className="section hero-fullscreen">
					<div className="row row-1">
						<div className="column">
							<h1>
								<TypingText speed={50} reverseSpeed={10} pause={50} cursor
									texts={['Bienvenue chez les INF2a !', 'Nous sommes ravis de vous revoir...', 'Bienvenue !']} />
							</h1>
							<p>EMT – Informatique – 2900 Porrentruy</p>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="row row-1">
						<div className="column">
							<h2>Présentation</h2>
						</div>
					</div>
					<div className="row row-3_5">
						<div className="column">
							<p>L’Ecole des Métiers Techniques offre des places d’apprentissage à plein temps.
								Elle dispense la formation pratique professionnelle en atelier et les cours théoriques
								liés à la formation spécifique sont dispensés à l’Ecole Professionnelle Technique.
								Les futurs apprentis signeront un contrat d’apprentissage avec l’Ecole des Métiers Techniques
								qui joue donc un rôle d’employeur.</p>
							<p>L’Ecole des Métiers Techniques prépare les apprentis à l’obtention d’une attestation fédérale de
								formation professionnelle (AFP) de 2 ans ou d’un certificat fédéral de capacité (CFC) de 3 ou 4 ans.</p>
						</div>
						<div className="column">
							<Image src={imgFacadeSud} alt={"Facade sud du bâtiment D"} />
						</div>
					</div>
				</div>
				<div className="section">
					<div className="row row-1">
						<div className="column">
							<h2>Situation</h2>
						</div>
					</div>
					<div className="row row-1_2">
						<div className="column">
							<div className="blurb">
								<Image src={imgVueOiseauPorren} alt={"La ville de Porrentruy"} />
								<h4>PORRENTRUY</h4>
								<p>
									<strong>Porrentruy</strong> est une commune suisse située dans le canton du Jura dans la région de
									l’Ajoie. Elle est le chef-lieu du district de Porrentruy. Elle est la troisième commune du canton du Jura
									par sa population.
								</p>
							</div>
						</div>
						<div className="column">
							<div className="blurb">
								<Image src={juraPaysage} alt="Le canton du Jura" />
								<h4>JURA</h4>
								<p>
									<strong>Le canton du Jura</strong> (JU), officiellement la <strong>république et canton du Jura</strong>,
									est l’un des 26 cantons de la Suisse.
									Il est composé de trois districts et son chef-lieu est Delémont. Il est le plus jeune canton de suisse.
								</p>
							</div>
						</div>
					</div>
					<div className="row row-1">
						<div className="column">

						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Root;
