import React, { useState } from "react";
import styled from "styled-components";
import { StyledComponent } from "../model/Type";
import { ImageAndLinkUrl } from "../model/UrlList";
import { ImageBox } from "./ImageBox";
import { SelectButton, SelectButtonProps } from "./SelectButton";


export type CarouselProps = StyledComponent & {
	imageAndLinkUrls: ReadonlyArray<ImageAndLinkUrl>,
}

export const Carousel = ({ className, imageAndLinkUrls }: CarouselProps): JSX.Element => {
	const [startX, setStartX] = useState(null)
	const [diffX, setDiffX] = useState(0)
	const [showingImageNumber, setShowingImageIndex] = useState(0)

	const imageBoxes = imageAndLinkUrls.map((imageAndLinkUrl, index) => {
		return (
			<ImageBox {...imageAndLinkUrl} key={index}></ImageBox>
		)
	})

	const selectButtons = imageAndLinkUrls.map((imageAndLinkUrl, index) => {
		const props: SelectButtonProps = {
			index: index,
			onClick: (event) => setShowingImageIndex(index)
		}
		return <SelectButton {...props} key={index} />
	})

	return (
		<React.StrictMode>
			<CarouselStyle showingImageNumber={showingImageNumber}>
				<div className="list">
					{imageBoxes}
				</div>
			</CarouselStyle>
			{selectButtons}
		</React.StrictMode>
	)
}


const CarouselStyle = styled.div<{ showingImageNumber: number }>`
	border: solid 1px #00ffea;
	width:1280px;
	overflow: hidden;

	.list {
		width: 1280px;
		white-space: nowrap;
		font-size: 0;
		transition: transform 0.5s;
		transform: translate3d(${props => -100 * props.showingImageNumber}%, 0, 0);
	}
`