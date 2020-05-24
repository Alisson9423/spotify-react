import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { Container } from './styles';
import CloseIcon from '../../assets/images/close.svg'
import { Creators as ErrorActions } from '../../store/ducks/error'

export default function ErroBox() {
	const dispatch = useDispatch()
	const { message, visible } = useSelector(state => state.Error)

	return (
		visible && (
			<Container>
				<p>{message}</p>

				<button onClick={() => dispatch(ErrorActions.hideError())}>
					<img src={CloseIcon} alt=""/>
				</button>
			</Container>
		)
	);
}
