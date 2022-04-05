import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import { StyledComponent } from "../model/Type";
import { ImageAndLinkUrl } from "../model/UrlList";
import { SelectButton, SelectButtonProps } from "./SelectButton";


export type CarouselProps = StyledComponent & {
	imageAndLinkUrls: ReadonlyArray<ImageAndLinkUrl>,
}

export const Carousel = ({ className, imageAndLinkUrls }: CarouselProps): JSX.Element => {
	const [showingImageNumber, setShowingImageIndex] = useState(0);

	const imageBoxes = imageAndLinkUrls.map((imageAndLinkUrl, index) => {
		return (
			<div className="list_item">
				<div className="item">
					<a href={imageAndLinkUrl.linkUrl.href} key={index}>
						<img src={imageAndLinkUrl.imageUrl.href} />
					</a>
				</div>
			</div>
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
				<div>
					<div className="list">
						{imageBoxes}
					</div>
				</div>
			</StyledCarousel>
			{selectButtons}
		</React.StrictMode>
	)
}