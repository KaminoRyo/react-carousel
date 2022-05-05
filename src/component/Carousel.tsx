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

	const StyledCarousel = styled.div`
		border: solid 1px #00ffea;
		width:1280px;
		overflow: hidden;

		.list {
			width: 1280px;
			white-space: nowrap;
			font-size: 0;
			transition: transform 0.5s;
			transform: translate3d(${-100 * showingImageNumber}%, 0, 0);

			.list_item {
				display: inline-block;
				width: 100%;
				height: 512px;
				font-size: 16px;
			}
		}

		.item {
			width: 100%;
			height: 100%;
			border: solid 1px #ff00dd;
			user-select: none;
		}
	`

	return (
		<React.StrictMode>
			<StyledCarousel>
				<div className="list">
					{imageBoxes}
				</div>
			</StyledCarousel>
			{selectButtons}
		</React.StrictMode>
	)
}