/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/

define(['block/block/abstractblock'],
function(AbstractBlock) {
	"use strict";

	var DefaultBlock = AbstractBlock.extend({
		render: function(attributes) {
			return "Hallo default";
		}
	});

	return DefaultBlock;
});