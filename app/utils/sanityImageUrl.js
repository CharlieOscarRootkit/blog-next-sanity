import ImagUrlBuilder from "@sanity/image-url"
import {client} from "./sanity.js"

const builder = ImagUrlBuilder(client);

export function urlFor(source){
	return builder.image(source)
}
