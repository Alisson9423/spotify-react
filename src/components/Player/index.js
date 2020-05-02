import React from "react";
import Slider from "rc-slider";

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
	return (
		<Container>
			<Current>
				<img
					src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
					alt="Cover"
				/>
				<div>
					<span>Times like these</span>
					<small>Foo Fighters</small>
				</div>
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
