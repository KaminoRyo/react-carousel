import React from "react"
import styled from "styled-components"
import { ImageAndLinkUrl } from "../model/UrlList"
import { StyledComponent } from "../model/Type";

type ImageBoxProps = StyledComponent & ImageAndLinkUrl
const ImageBoxElement = ({ className, linkUrl, imageUrl }: ImageBoxProps): JSX.Element => {
	return (
		<div className={className}>
			<div className="item">
				<a href={linkUrl.href}>
					<img src={imageUrl.href} />
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