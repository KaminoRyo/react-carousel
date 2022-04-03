import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import { AdjacentButton, AdjacentButtonProps } from "./AdjacentButton";

export type CarouselProps = {
	className?: string
	urlList: Array<URL>,
}

const CarouselElement = ({ className, urlList }: CarouselProps): JSX.Element => {
	const [showingImageNumber, setShowingImageNumber] = useState(0);

	const imageTags = urlList.map((url, index) => {
		return <img src={url.href} key={index} />
	})

	const changeShowingImageNumber = (isPrevious: boolean) => {
		const number = isPrevious ? -1 : 1
		const target = showingImageNumber + number
		// 最小1～画像数まで
		const isInRange = (target >= 1) && (target <= (urlList.length))
		if (isInRange) { setShowingImageNumber(target) }
	}

	const previousButtonProps: AdjacentButtonProps = {
		isPrevious: true,
		onClick: (event) => { changeShowingImageNumber(true) }
	}
	const nextButtonProps: AdjacentButtonProps = {
		isPrevious: false,
		onClick: (event) => { changeShowingImageNumber(false) }
	}


	return (
		<React.StrictMode>
			<div>
				<AdjacentButton {...previousButtonProps} />
				<div className={className}>
					{imageTags}
				</div>
				<AdjacentButton {...nextButtonProps} />
			</div>
		</React.StrictMode>
	)
};

export const Carousel = styled(CarouselElement)`
    white-space: nowrap;
		transform: translate3d(0%,0,0);
  `;