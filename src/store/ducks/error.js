export const Types = {
	SET: "SET",
	HIDE: "HIDE",
};

const INITAL_STATE = {
	visible: false,
	message: null,
};

export default function error(state = INITAL_STATE, action) {
	switch (action.type) {
		case Types.SET:
			return { ...state, visible: true, message: action.payload.message };

		case Types.HIDE:
			return { ...state, visible: false };

		default:
			return state;
	}
}

export const Creators = {
	setErro: (message) => ({ type: Types.SET, payload: { message } }),

	hideError: () => ({ type: Types.HIDE }),
};
