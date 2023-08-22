import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TeaInfo = () => {
	const [tea, setTea] = React.useState();
	const { id } = useParams();
	const navigate = useNavigate();

	React.useEffect(() => {
		async function fetchTea() {
			try {
				const { data } = await axios.get(`https://64a683a4096b3f0fcc7feffa.mockapi.io/items/${id}`);
				setTea(data);
			} catch (error) {
				console.err(error);
				alert('Ошибка при получении информации о чае!');
				navigate('/');
			}
		}

		fetchTea();
	}, []);

	if (!tea) {
		return <p>Загрузка</p>;
	}

	return (
		<div className="container">
			<div className="info-box">
				<img src={tea.imageUrl} alt="Tea" />
				<div className="info-box__text">
					<h3 className="info-box__title">{tea.title}</h3>
					<p className="info-box__description">{tea.describe}</p>
				</div>
			</div>
		</div>
	);
};

export default TeaInfo;
