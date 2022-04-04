import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type SelectButtonProps = {
	className?: string,
	isPrevious: boolean,
	onClick: MouseEventHandler<HTMLButtonElement>
}
const SelectButtonElement = ({ className, isPrevious, onClick }: SelectButtonProps): JSX.Element => {
	const isWord = isPrevious ? `<` : `>`
	return (
		<button
			id={`${isWord}-button`}
			className={className}
			onClick={onClick}
		>
			{isWord}
		</button >
	)
}

export const SelectButton = styled(SelectButtonElement)`
	height:100px;
	width:100px;
	background-color:white;
`