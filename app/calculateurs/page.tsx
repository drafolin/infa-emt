"use client";
import { useState } from "react";
import TimePicker from 'react-time-picker';
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "./style.scss";
import React from "react";
React.useLayoutEffect = React.useEffect;

const TEMPS_TRAVAIL_MINIMUM = { hours: 7, minutes: 25 };
const MINUTES_TRAVAIL_MINIMUM = TEMPS_TRAVAIL_MINIMUM.hours * 60 + TEMPS_TRAVAIL_MINIMUM.minutes;

const Travail = () => {
	const [heureArrivee, setHeureArrivee] = useState({ hours: 0, minutes: 0 });
	const [heureDebutPause, setHeureDebutPause] = useState({ hours: 0, minutes: 0 });
	const [heureFinPause, setHeureFinPause] = useState({ hours: 0, minutes: 0 });
	const [heureDepart, setHeureDepart] = useState({ hours: 0, minutes: 0 });
	const [pauseApresMidi, setPauseApresMidi] = useState(false);

	const totalMatin = heureDebutPause.hours * 60 + heureDebutPause.minutes - heureArrivee.hours * 60 - heureArrivee.minutes;
	const totalApresMidi = (heureDepart.hours * 60 + heureDepart.minutes - heureFinPause.hours * 60 - heureFinPause.minutes) - (pauseApresMidi ? 10 : 0);
	const total = totalMatin + totalApresMidi;
	const texteTempsRelatif = total - MINUTES_TRAVAIL_MINIMUM < 0 ? "Perdu" : "Gagné";

	return (
		<div className="section">
			<div className="row row-1">
				<div className="column">
					<h2>Heures</h2>
				</div>
			</div>
			<div className="row row-1_2">
				<div className="column">
					<div>
						<div className="align-bottom">
							<div>
								<h3>Arivée</h3>
								<TimePicker
									disableClock
									value={`${heureArrivee.hours}:${(`${heureArrivee.minutes}`).padStart(2, "0")}`}
									format={"HH:mm"}
									onChange={
										(v: string) => {
											if (!v) {
												v = "00:00";
											}
											setHeureArrivee({
												hours: parseInt(v.split(":")[0]),
												minutes: parseInt(v.split(":")[1])
											});
										}
									}
								/>
							</div>
							<div className="horizontal full-width">
								<h3>Pause</h3>
								<div>
									<div>
										<h4>Début</h4>
										<TimePicker
											disableClock
											value={`${heureDebutPause.hours}:${`${heureDebutPause.minutes}`.padStart(2, "0")}`}
											format={"HH:mm"}
											onChange={
												(v: string) => {
													if (!v) {
														v = "00:00";
													}
													setHeureDebutPause({
														hours: parseInt(v.split(":")[0]),
														minutes: parseInt(v.split(":")[1])
													});
												}
											}
										/>
									</div>
									<div>
										<h4>Fin</h4>
										<TimePicker
											disableClock
											value={`${heureFinPause.hours}:${`${heureFinPause.minutes}`.padStart(2, "0")}`}
											format={"HH:mm"}
											onChange={
												(v: string) => {
													if (!v) {
														v = "00:00";
													}
													setHeureFinPause({
														hours: parseInt(v.split(":")[0]),
														minutes: parseInt(v.split(":")[1])
													});
												}
											}
										/>
									</div>
								</div>
							</div>
							<div>
								<h3>Départ</h3>
								<TimePicker
									name="time24"
									disableClock
									value={`${heureDepart.hours}:${`${heureDepart.minutes}`.padStart(2, "0")}`}
									format={"HH:mm"}
									onChange={
										(v: string) => {
											if (!v) {
												v = "00:00";
											}
											setHeureDepart({
												hours: parseInt(v.split(":")[0]),
												minutes: parseInt(v.split(":")[1])
											});
										}
									}
								/>
							</div>
						</div>
						<div>
							<label>
								<input type="checkbox" value={`${pauseApresMidi}`} onChange={() => { setPauseApresMidi(!pauseApresMidi); }} />
								Pause de l&apos;après-midi
							</label>
						</div>
					</div>
				</div>
				<div className="column resultat">
					<h3>Resultat</h3>
					<h4>Travail aujourd&apos;hui</h4>
					<p>{total / 60 >= 0 ? Math.floor(total / 60) : Math.ceil(total / 60)}h {total % 60}min</p>
					<div className="center">
						<h5>Matin</h5>
						<p>
							{
								totalMatin / 60 >= 0 ? Math.floor(totalMatin / 60) : Math.ceil(totalMatin / 60)
							}h {
								totalMatin
								% 60
							}min
						</p>
					</div>
					<div>
						<h5>Après-midi</h5>
						<p>
							{
								totalApresMidi / 60 >= 0 ? Math.floor(totalApresMidi / 60) : Math.ceil(totalApresMidi / 60)
							}h {
								totalApresMidi % 60
							}min
						</p>
					</div>
					<h4>{texteTempsRelatif}</h4>
					<p>
						{
							Math.abs((total - MINUTES_TRAVAIL_MINIMUM) / 60 >= 0
								? Math.floor((total - MINUTES_TRAVAIL_MINIMUM) / 60)
								: Math.ceil((total - MINUTES_TRAVAIL_MINIMUM) / 60))
						}
						h {
							Math.abs((total - MINUTES_TRAVAIL_MINIMUM) % 60)
						}min
					</p>
				</div>
			</div>
		</div>
	);
};

const Moyennes = () => {
	const [notes, setNotes] = useState<{ note: number, coefficient: number; }[]>([]);

	const addNote = (v: any) => {
		console.log(v);
	};
	const removeNote = (index: number) => {
		setNotes(notes.filter((_v, k) => (
			k !== index
		)));
	};

	let moyenne = 0;

	let sommeNotes = 0, sommeCoeff = 0;
	for (let i = 0; i < notes.length; i++) {
		sommeNotes += notes[i].note * notes[i].coefficient;
		sommeCoeff += notes[i].coefficient;
	}
	if (sommeCoeff !== 0) {
		moyenne = sommeNotes / sommeCoeff;
	}

	return (
		<div className="section">
			<div className="row row-1">
				<div className="column">
					<h2>Moyenne</h2>
				</div>
			</div>
			<div className="row row-1_2 align-top">
				<div className="column">
					<div>
						<form onSubmit={addNote}>
							<input type="text" placeholder="Note" v-model="noteText" /> -
							<input type="text" placeholder="Coefficient" v-model="coeffText" />%
							<button>Ajouter</button>
						</form>
						<ul>
							{
								notes.map((note, index) => (
									<li key={index}>
										<button type="button" className="delete" onClick={() => { removeNote(index); }}>X</button>
										<span>{note.note} - {note.coefficient}%</span>
									</li>
								))
							}
						</ul>
					</div>
				</div>
				<div className="column">
					<h3>Resultat</h3>
					<p>{moyenne}</p>
				</div>
			</div>
		</div>
	);
};

const Calculateurs = () => {
	return (
		<>
			<div className="section">
				<div className="row row-1">
					<div className="column">
						<h1>Calculateurs</h1>
					</div>
				</div>
			</div>
			<Travail />
			<hr />
			<Moyennes />
		</>
	);
};

export default Calculateurs;
