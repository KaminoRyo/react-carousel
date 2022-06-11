import React, { MouseEventHandler } from "react"
import styled from "styled-components"
import { ImageAndLinkUrl } from "../model/UrlList"
import { StyledComponent } from "../model/Type";

export type ImageBoxProps = StyledComponent & {
	imageAndLinkUrl: ImageAndLinkUrl,
}


const a = () => {
	console.log("mouseDown")
}

const ImageBoxElement = ({ className, imageAndLinkUrl }: ImageBoxProps): JSX.Element => {
	return (
		<div className={className} onMouseDown={a}>
			<div className="item">
				<a href={imageAndLinkUrl.linkUrl.href}>
					<img src={imageAndLinkUrl.imageUrl.href} />
				</a>
			</div>
		</div>
	)
}

export const ImageBox = styled(ImageBoxElement)`	
	display: inline-block;
	width: 100%;
	height: 512px;
	font-size: 16px;
	
	.item {
		width: 100%;
		height: 100%;
		border: solid 1px #ff00dd;
		user-select: none;
	}
`