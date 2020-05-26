import React from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
	Container,
	Current,
	Volume,
	Progress,
	Controls,
	Time,
	ProgressSlider,
} from "./styles";
import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";
import { Creators } from "../../store/ducks/player";

export default function Player() {
	const { currentSong, status, position, duration } = useSelector(
		(state) => state.Player
	);

	const dispatch = useDispatch();

	function msTotime(duration) {
		let seconds = parseInt((duration / 1000) % 60, 10);
		const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

		seconds = seconds < 10 ? `0${seconds}` : seconds;

		return `${minutes}:${seconds}`;
	}

	return (
		<Container>
			{!!currentSong && (
				<Sound
					url={currentSong.file}
					playStatus={status}
					onFinishedPlaying={() => dispatch(Creators.next())}
					onPlaying={({ position, duration }) =>
						dispatch(Creators.playing(position, duration))
					}
				/>
			)}
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

					<button onClick={() => dispatch(Creators.prev())}>
						<img src={BackwardIcon} alt="backward" />
					</button>

					{!!currentSong && status === Sound.status.PLAYING ? (
						<button onClick={() => dispatch(Creators.pause())}>
							<img src={PauseIcon} alt="play" />
						</button>
					) : (
						<button onClick={() => dispatch(Creators.play())}>
							<img src={PlayIcon} alt="play" />
						</button>
					)}

					<button onClick={() => dispatch(Creators.next())}>
						<img src={ForwardIcon} alt="forward" />
					</button>

					<button>
						<img src={RepeatIcon} alt="repeat" />
					</button>
				</Controls>

				<Time>
					<span>{msTotime(position)}</span>
					<ProgressSlider>
						<Slider
							railStyle={{
								background: "#404040",
								borderRadius: 10,
							}}
							trackStyle={{ background: "#1ed760" }}
							handleStyle={{ border: 0 }}
							// value={100}
						/>
					</ProgressSlider>
					<span>{msTotime(duration)}</span>
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
		author: PropTypes.string,
	}),

	status: PropTypes.string,
};
