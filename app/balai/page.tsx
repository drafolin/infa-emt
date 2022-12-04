"use client";

import "./style.scss";
import { useState, useEffect } from 'react';

const Balai = () => {
	const [done, setDone] = useState(new Map<string, boolean[]>());
	const [names, setNames] = useState<string[]>([]);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		(async () => {
			try {
				let dbDone = (await (await fetch("/api/balai")).json() as {
					fait: {
						[k: string]: boolean[];
					};
					noms: string[];
				}).fait;
				for (let [key, value] of Object.entries(dbDone)) {
					setDone(d => d.set(key, value));
				}
				setNames((await (await fetch("/api/balai")).json() as {
					fait: {
						[k: string]: boolean[];
					};
					noms: string[];
				}).noms);
			} catch (e) {
				setError(true);
				console.error(e);
			}
			setLoaded(true);
		})();
	}, []);

	return (
		<div className="page">
			<div className="section">
				<div className="row row-1">
					<div className="column">
						<h1>Planning du balai</h1>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="row row-1">
					<div className="column">
						{
							(() => {
								if (error) {
									return (
										<div>
											<p>Une erreur est survenue lors du chargement des données.</p>
											<p>Veuillez contacter dindin|nibnib, en fournissant les logs de la console.</p>
										</div>
									);
								} else if (loaded) {
									return (
										<div className="table" >
											<>
												<div>Personne</div>
												{
													(() => {
														let returnValue = [];
														for (let week = 1; week <= 39; week++) {
															returnValue.push(
																<div>{week}</div>
															);
														}
														return returnValue;
													})()
												}
												{
													names.map((v) => (
														<>
															<div>{v} - {done.get(v)?.filter((v: boolean) => v).length}</div>
															{
																done.get(v)?.map((checked, k) =>
																	<input
																		title={`${v} - ${k}`}
																		type="checkbox"
																		key={k}
																		checked={checked}
																	/>
																)
															}
														</>
													))
												}
											</>
										</div>
									);
								} else {
									return (
										<div v-else>
											Chargement...
										</div>
									);
								}
							})()
						}
					</div>
				</div>
			</div>
		</div >
	);
};

export default Balai;
