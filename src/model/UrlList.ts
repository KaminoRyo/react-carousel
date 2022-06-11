export type ImageAndLinkUrl = {
	"imageUrl": URL,
	"linkUrl": URL
}
export const imageAndLinkUrls: ReadonlyArray<ImageAndLinkUrl> = [
	{
		"imageUrl": new URL("https://placehold.jp/3d4070/ffffff/1280x512.png"),
		"linkUrl": new URL("https://yahoo.co.jp")
	},
	{
		"imageUrl": new URL("https://placehold.jp/703e40/ffffff/1280x512.png"),
		"linkUrl": new URL("https://www.google.co.jp/")
	},
	{
		"imageUrl": new URL("https://placehold.jp/6f3e70/ffffff/1280x512.png"),
		"linkUrl": new URL("https://www.microsoft.com/ja-jp")
	},
	{
		"imageUrl": new URL("https://placehold.jp/3e7048/ffffff/1280x512.png"),
		"linkUrl": new URL("https://www.apple.com/jp/")
	},
	{
		"imageUrl": new URL("https://placehold.jp/6c703e/ffffff/1280x512.png"),
		"linkUrl": new URL("https://github.com/")
	}
] as const
