import React, { Fragment } from 'react';
import ajt from './images/ajt.jpg';
import amk from './images/amk.jpg';
import ar from './images/ar.jpg';
import zh from './images/zh.jpg';
import ys from './images/ys.jpg';
import './tabla.css';
export default props =>
	<div className= "TablaPlayers">
		
		<h3>Ustad Ahmad Jan Thirakwa </h3>
		<div className= "TablaPlayers"><img src = {`${ajt}`} alt= "Image of Tabla Drum" width='300' />
		</div>
		<p>
		Ahmed Jan Thirakwa Khan was an Indian tabla player, commonly considered the preeminent soloist among tabla players of the 20th century, and among the most influential percussionists in the history of Indian classical music.</p>

		<h3>Ustad Amir Hussain Khan </h3>
		<div className= "TablaPlayers"><img src = {`${amk}`} alt= "Image of Tabla Drum" width='300' />
		</div>
		<p>
		Born Oct 1899 in a village called Bankhanda in Meerut District of Uttar Pradesh, died Jan 5, 1969. Legendary tabla payer, the doyen of the Farrukhabad gharana.</p>
		
		<h3>Ustad Alla Rakha </h3>
		<div className= "TablaPlayers"><img src = {`${ar}`} alt= "Image of Tabla Drum" width='300' />
		</div>
		<p>
		Rakha popularised the art of tabla, playing across the globe, elevating the status and respect of his instrument. "Abbaji" (as he was affectionately known by his disciples) also bridged the gap between Carnatic music and Hindustani music by playing with both renowned Carnatic musicians and other Hindustani stalwarts.
		</p>

		<h3>Ustad Zakir Hussain </h3>
		<div className= "TablaPlayers"><img src = {`${zh}`} alt= "Image of Tabla Drum" width='300' />
		</div>
		<p>
		Zakir brought great attention to and raised the profile of tabla players, both through his solo excursions as an accompanist and through his solo tabla performances. His on-stage charm and virtuosity single-handedly raised the visibility of tabla players, who in times past were not considered very important to the performance.
		</p>
		
		<h3>Pandit Yogesh Samsi </h3>
		<div className= "TablaPlayers"><img src = {`${ys}`} alt= "Image of Tabla Drum" width='300' />
		</div>
		<p>
		Pandit Yogesh Samsi was born in Delhi to renowned vocalist Pandit Dinkar Kaikini. Yogesh's father introduced him to music at the age of four.At the age of four he started learning the tabla from Pandit H. Taranath Rao. Later, he sought the guidance of Ustad Allarakha Khan, one of the greatest percussionists. He spent 23 years under the tutelage of Allarakha.
		</p>


	</div>
