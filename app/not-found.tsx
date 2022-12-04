import Link from 'next/link';
const NotFound = () => {
	return (
		<div>
			<h1>(): undefined {'=>'} {'{ }'}</h1>
			<p>La page que vous recherchez n&apos;existe pas.</p>
			<p>Cliquez <Link href="/">ici</Link> pour retourner à la page d&apos;accueil.</p>
		</div>
	);
};

export default NotFound;
