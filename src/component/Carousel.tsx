import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import { ImageAndLinkUrl } from "../model/UrlList";
import { SelectButton, SelectButtonProps } from "./SelectButton";

export type CarouselProps = {
	className?: string
	imageAndLinkUrls: ReadonlyArray<ImageAndLinkUrl>,
}

const CarouselElement = ({ className, imageAndLinkUrls }: CarouselProps): JSX.Element => {
	const [showingImageNumber, setShowingImageNumber] = useState(0);

	const linkedImageTags = imageAndLinkUrls.map((imageAndLinkUrl, index) => {
		return (
			<a href={imageAndLinkUrl.linkUrl.href} key={index}>
				<img src={imageAndLinkUrl.imageUrl.href} />
			</a>
		)
	})

	const selectButtons = imageAndLinkUrls.map((imageAndLinkUrl, index) => {
		const props: SelectButtonProps = {
			index: index,
			onClick: (event) => setShowingImageNumber(index)
		}
		return <SelectButton {...props} key={index} />
	})

	return (
		<React.StrictMode>
			<div className={className}>
				{linkedImageTags}
			</div>
			{selectButtons}
		</React.StrictMode>
	)
};

export const Carousel = styled(CarouselElement)`
    white-space: nowrap;
		/* transform: translate3d(0%,0,0); */
  `;