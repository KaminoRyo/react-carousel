import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type AdjacentButtonProps = {
	className?: string,
	isPrevious: boolean,
	onClick: MouseEventHandler<HTMLButtonElement>
}
const AdjacentButtonElement = ({ className, isPrevious, onClick }: AdjacentButtonProps): JSX.Element => {
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

export const AdjacentButton = styled(AdjacentButtonElement)`
	position:abusolute;
`