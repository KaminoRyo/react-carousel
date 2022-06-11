import React, { MouseEvent, MouseEventHandler, useState } from "react";
import styled from "styled-components";
import { StyledComponent } from "../model/Type";
import { ImageAndLinkUrl } from "../model/UrlList";
import { ImageBox, ImageBoxProps } from "./ImageBox";
import { SelectButton, SelectButtonProps } from "./SelectButton";

export type CarouselProps = StyledComponent & {
	imageAndLinkUrls: ReadonlyArray<ImageAndLinkUrl>,
}

export const Carousel = ({ className, imageAndLinkUrls }: CarouselProps): JSX.Element => {
	const [startX, setStartX] = useState(0)
	const [diffX, setDiffX] = useState(0)
	const [showingImageIndex, setShowingImageIndex] = useState(0)

	const imageBoxes = imageAndLinkUrls.map((imageAndLinkUrl, index) => {
		const cacheClientX = (event): void => {
			
			setStartX(2)
		}

		const props: ImageBoxProps = {
			imageAndLinkUrl: imageAndLinkUrl
		}

		return (
			<ImageBox {...props}></ImageBox>
		)
	})

	const selectButtons = imageAndLinkUrls.map((imageAndLinkUrl, index) => {
		const props: SelectButtonProps = {
			index: index,
			onClick: (event) => setShowingImageIndex(index)
		}
		return <SelectButton {...props} />
	})

	return (
		<React.StrictMode>
			<CarouselStyle showingImageIndex={showingImageIndex}>
				<div className="list">
					{imageBoxes}
				</div>
			</CarouselStyle>
			{selectButtons}
		</React.StrictMode>
	)
}


const CarouselStyle = styled.div<{ showingImageIndex: number }>`
	border: solid 1px #00ffea;
	width:1280px;
	overflow: hidden;

	.list {
		width: 1280px;
		white-space: nowrap;
		font-size: 0;
		transition: transform 0.5s;
		transform: translate3d(${props => -100 * props.showingImageIndex}%, 0, 0);
	}
`