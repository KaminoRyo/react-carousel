import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type SelectButtonProps = {
	className?: string,
	index: number,
	onClick: MouseEventHandler<HTMLButtonElement>
}
const SelectButtonElement = ({ className, index, onClick }: SelectButtonProps): JSX.Element => {
	return (
		<button
			id={`image${index}-button`}
			className={className}
			onClick={onClick}
		>
			●
		</button >
	)
}

export const SelectButton = styled(SelectButtonElement)`
	height:45px;
	width:45px;
	background-color:white;
`