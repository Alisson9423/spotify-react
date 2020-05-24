import React from "react";
import Slider from "rc-slider";
import Sound from 'react-sound'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';

import {
	Container,
	Current,
	Volume,
	Progress,
	Controls,
	Time,
	ProgressSlider
} from "./styles";
import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

export default function Player() {
	const { currentSong, status } = useSelector(state => state.Player)

	return (
		<Container>
			{ !!currentSong &&  <Sound url={currentSong.file} playStatus={status}/>}
			<Current>

				{!!currentSong && (
					<>
						<img
							src={currentSong.thumbnail}
							alt={currentSong.title}
						/>
						<div>
							<span>{currentSong.title}</span>
							<small>{currentSong.author}</small>
						</div>
					</>
				)}
				
			</Current>

			<Progress>
				<Controls>
					<button>
						<img src={ShuffleIcon} alt="shuffle" />
					</button>

					<button>
						<img src={BackwardIcon} alt="backward" />
					</button>

					<button>
						<img src={PlayIcon} alt="play" />
					</button>

					<button>
						<img src={ForwardIcon} alt="forward" />
					</button>

					<button>
						<img src={RepeatIcon} alt="repeat" />
					</button>
				</Controls>

				<Time>
					<span>1:39</span>
					<ProgressSlider>
						<Slider
							railStyle={{
								background: "#404040",
								borderRadius: 10
							}}
							trackStyle={{ background: "#1ed760" }}
							handleStyle={{ border: 0 }}
							// value={100}
						/>
					</ProgressSlider>
					<span>4:24</span>
				</Time>
			</Progress>

			<Volume>
				<img src={VolumeIcon} alt="Volume" />
				<Slider
					railStyle={{ background: "#404040", borderRadius: 10 }}
					trackStyle={{ background: "#fff" }}
					handleStyle={{ display: "none" }}
					// value={100}
				/>
			</Volume>
		</Container>
	);
}

Player.propTypes = {
	currentSong: PropTypes.shape({
		file: PropTypes.string,
		thumbnail: PropTypes.string,
		author: PropTypes.string
	}),

	status: PropTypes.string
}