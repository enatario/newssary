# Globe graphic app

To be used as an extension to [globe graphic template](https://github.com/russellgoldenberg/globe-graphic-template).

## Setup
The app uses handlebars to precompile to HTML. All HTML should be be placed in **src/html/partials/partial-graphic.hbs**.

#### Copy
Using a shared google doc for all copy is recommended. The app uses [ArchieML](http://archieml.org) as a micro CMS.

*Setup google doc*
- Create a google doc (outside of Globe domain)
- Publish to web: file -> publish to web
- Make public: share button -> advanced -> change "private only you can access" to "public on the web"
- In the address bar, grab the ID
	- ...com/document/d/ **1IiA5a5iCjbjOYvZVgPcjGzMy5PyfCzpPF-LnQdCdFI0** /edit
- In **copy.js** paste in the ID

*Run archie*
- To get the latest copy, run `node copy.js` in root
- This will update **src/data/copy.json** which is handlebars pulls from

If the data is too sensitive or a google doc is overkill, you can update **src/data/copy.json** directly. The following snippet is a bare minimum needed to fill out the basic information for seo and analytics:

```
{
	"title": "Graphic title",
	"description": "Description of graphic",
	"keywords": "Comma, delimited, for, seo",
	"url": "http://apps.bostonglobe.com/graphics/path/to/graphic",
	"image_url": "http://apps.bostonglobe.com/graphics/path/to/image",
	"page_id": "apps.mmddyy.title-no-spaces",
	"section_cap": "Metro",
	"section_lower": "metro",
	"header_color": "",
	"credits": [{
		"role": "Development",
		"name": "Russell Goldenberg"
	}, {
		"role": "Design",
		"name": "Elaina Natario"
	}]
}
```

## Deploy
- Run `gulp prod` to deploy
