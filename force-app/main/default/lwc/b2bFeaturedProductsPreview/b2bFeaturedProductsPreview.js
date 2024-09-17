const getPreviewProducts = (pathPrefix, staticResourcePath) => {
	return [
		{
			sequence: 0,
			primaryProductCategoryPath: null,
			prices: {
				unitPrice: "9.95",
				pricebookEntryId: "01ual000000TfEbIAA",
				listPrice: null
			},
			name: "Dark Roast Whole Bean Coffee",
			mediaGroups: [
				{
					developerName: "productListImage",
					id: "2mgal000000SeaUIAG",
					mediaItems: [
						{
							alternateText: null,
							contentVersionId: "5OUal000002EoDDOA0",
							id: "2pmal000000AX8qIAC",
							mediaType: "Image",
							sortOrder: 0,
							thumbnailUrl: null,
							title: "Dark Roast Coffee",
							url: "/resource/B2B_LE_Pictures/DRW-1.jpg"
						}
					],
					name: "Product List Image",
					usageType: "Listing"
				},
				{
					developerName: "productDetailImage",
					id: "2mgal000000SeaVIAG",
					mediaItems: [
						{
							alternateText: null,
							contentVersionId: "5OUal000002EoDDOA0",
							id: "2pmal000000AX8rIAC",
							mediaType: "Image",
							sortOrder: 0,
							thumbnailUrl: null,
							title: "Dark Roast Coffee",
							url: "/resource/B2B_LE_Pictures/DRW-1.jpg"
						}
					],
					name: "Product Detail Images",
					usageType: "Standard"
				}
			],
			id: "01tal000000z84GIAE",
			fields: {
				StockKeepingUnit: {
					value: "DRW-1"
				},
				Name: {
					value: "Dark Roast Whole Bean Coffee"
				},
				Description: {
					value:
						'2.5 lbs of dark roasted, single-origin, fair trade and Organic Arabica bean from the Chiapas region of Mexico. It is nutty with notes of caramel and slight baker\'s chocolate. It is fresh roasted and rated Premium Grade "1," the highest rating available for coffee.'
				}
			},
			entitlement: {
				canViewPrice: null
			},
			defaultImage: {
				alternateText: null,
				contentVersionId: "5OUal000002EoDDOA0",
				id: "2pmal000000AX8rIAC",
				mediaType: "Image",
				sortOrder: 0,
				thumbnailUrl: null,
				title: "Dark Roast Coffee",
				//"url": pathPrefix + "/resource/B2B_LE_Pictures/DRW-1.jpg"
				url: staticResourcePath + "/DRW-1.jpg"
			},
			panel: "board"
		},
		{
			sequence: 1,
			primaryProductCategoryPath: null,
			prices: {
				unitPrice: "12",
				pricebookEntryId: "01ual000000TgANIAA",
				listPrice: null
			},
			name: "Medium Roast Ethiopian Coffee Bean",
			mediaGroups: [
				{
					developerName: "productListImage",
					id: "2mgal000000SeaUIAG",
					mediaItems: [
						{
							alternateText: null,
							contentVersionId: "5OUal000002EoDEOA0",
							id: "2pmal000000AX8sIAS",
							mediaType: "Image",
							sortOrder: 0,
							thumbnailUrl: null,
							title: "Medium Roast Ethiopian",
							url: "/resource/B2B_LE_PicturesE-MR-B.png"
						}
					],
					name: "Product List Image",
					usageType: "Listing"
				},
				{
					developerName: "productDetailImage",
					id: "2mgal000000SeaVIAG",
					mediaItems: [
						{
							alternateText: null,
							contentVersionId: "5OUal000002EoDEOA0",
							id: "2pmal000000AX8tIAS",
							mediaType: "Image",
							sortOrder: 0,
							thumbnailUrl: null,
							title: "Medium Roast Ethiopian",
							url: "/resource/B2B_LE_Pictures/E-MR-B.png"
						}
					],
					name: "Product Detail Images",
					usageType: "Standard"
				}
			],
			id: "01tal000000z84HIAU",
			fields: {
				StockKeepingUnit: {
					value: "E-MR-B"
				},
				Name: {
					value: "Medium Roast Ethiopian Coffee Bean"
				},
				Description: {
					value: "This medium roast Ethiopian coffee has graceful notes of chocolate, paired with flavors of molasses and nuts."
				}
			},
			entitlement: {
				canViewPrice: null
			},
			defaultImage: {
				alternateText: null,
				contentVersionId: "5OUal000002EoDEOA0",
				id: "2pmal000000AX8tIAS",
				mediaType: "Image",
				sortOrder: 0,
				thumbnailUrl: null,
				title: "Medium Roast Ethiopian",
				url: staticResourcePath + "/E-MR-B.png"
			},
			panel: "board"
		},
		{
			sequence: 2,
			primaryProductCategoryPath: null,
			prices: {
				unitPrice: "9.95",
				pricebookEntryId: "01ual000000TgAOIAA",
				listPrice: null
			},
			name: "Light Roast Whole Bean Coffee",
			mediaGroups: [
				{
					developerName: "productListImage",
					id: "2mgal000000SeaUIAG",
					mediaItems: [
						{
							alternateText: "Light Roast Coffee",
							contentVersionId: "5OUal000002EoDFOA0",
							id: "2pmal000000AX8uIAC",
							mediaType: "Image",
							sortOrder: 0,
							thumbnailUrl: null,
							title: "Light Roast Coffee",
							url: "/resource/B2B_LE_Pictures/LRW-1.jpg"
						}
					],
					name: "Product List Image",
					usageType: "Listing"
				},
				{
					developerName: "productDetailImage",
					id: "2mgal000000SeaVIAG",
					mediaItems: [
						{
							alternateText: "Light Roast Coffee",
							contentVersionId: "5OUal000002EoDFOA0",
							id: "2pmal000000AX8vIAC",
							mediaType: "Image",
							sortOrder: 0,
							thumbnailUrl: null,
							title: "Light Roast Coffee",
							url: "/resource/B2B_LE_Pictures/LRW-1.jpg"
						}
					],
					name: "Product Detail Images",
					usageType: "Standard"
				}
			],
			id: "01tal000000z84IIAU",
			fields: {
				StockKeepingUnit: {
					value: "LRW-1"
				},
				Name: {
					value: "Light Roast Whole Bean Coffee"
				},
				Description: {
					value:
						"A blend of 100 percent premium Arabica beans from Central America, Kenya and Tanzania that results in a superb, rich aroma and well-balanced taste. Coffee is light, sweet and balanced coffee. Whole beans are perfect for drip or filter method. Comes in 2.5 lb bag."
				}
			},
			entitlement: {
				canViewPrice: null
			},
			defaultImage: {
				alternateText: "Light Roast Coffee",
				contentVersionId: "5OUal000002EoDFOA0",
				id: "2pmal000000AX8vIAC",
				mediaType: "Image",
				sortOrder: 0,
				thumbnailUrl: null,
				title: "Light Roast Coffee",
				url: staticResourcePath + "/LRW-1.jpg"
			},
			panel: "board"
		},
		{
			sequence: 3,
			primaryProductCategoryPath: null,
			prices: {
				unitPrice: "9.95",
				pricebookEntryId: "01ual000000TgAPIAA",
				listPrice: null
			},
			name: "Medium Roast Coffee",
			mediaGroups: [
				{
					developerName: "productListImage",
					id: "2mgal000000SeaUIAG",
					mediaItems: [
						{
							alternateText: null,
							contentVersionId: "5OUal000002EoDGOA0",
							id: "2pmal000000AX8wIAC",
							mediaType: "Image",
							sortOrder: 0,
							thumbnailUrl: null,
							title: "Medium Roast Coffee",
							url: "/resource/B2B_LE_Pictures/mrc-1.jpg"
						}
					],
					name: "Product List Image",
					usageType: "Listing"
				},
				{
					developerName: "productDetailImage",
					id: "2mgal000000SeaVIAG",
					mediaItems: [
						{
							alternateText: null,
							contentVersionId: "5OUal000002EoDGOA0",
							id: "2pmal000000AX8xIAS",
							mediaType: "Image",
							sortOrder: 0,
							thumbnailUrl: null,
							title: "Medium Roast Coffee",
							url: "/resource/B2B_LE_Pictures/mrc-1.jpg"
						}
					],
					name: "Product Detail Images",
					usageType: "Standard"
				}
			],
			id: "01tal000000z84JIAU",
			fields: {
				StockKeepingUnit: {
					value: "MRC-1"
				},
				Name: {
					value: "Medium Roast Coffee"
				},
				Description: {
					value:
						"Grown in Colombia's rich volcanic soil, this coffee is as distinctive as the countryside. Our medium roast coffee delivers a signature nutty flavor. We use 100% natural roasted arabica beans to create a smooth and balanced, yet crisp, cup of coffee."
				}
			},
			entitlement: {
				canViewPrice: null
			},
			defaultImage: {
				alternateText: null,
				contentVersionId: "5OUal000002EoDGOA0",
				id: "2pmal000000AX8xIAS",
				mediaType: "Image",
				sortOrder: 0,
				thumbnailUrl: null,
				title: "Medium Roast Coffee",
				url: staticResourcePath + "/mrc-1.jpg"
			},
			panel: "board"
		},
		{
			sequence: 4,
			primaryProductCategoryPath: null,
			prices: {
				unitPrice: "12",
				pricebookEntryId: "01ual000000TgAQIAA",
				listPrice: null
			},
			name: "Splendid Sumatran Dark Roast Bean Bag",
			mediaGroups: [
				{
					developerName: "productListImage",
					id: "2mgal000000SeaUIAG",
					mediaItems: [
						{
							alternateText: null,
							contentVersionId: "5OUal000002EoDHOA0",
							id: "2pmal000000AX8yIAS",
							mediaType: "Image",
							sortOrder: 0,
							thumbnailUrl: null,
							title: "Splendid Sumatran",
							url: "/resource/B2B_LE_Pictures/SS-DR-BB.png"
						}
					],
					name: "Product List Image",
					usageType: "Listing"
				},
				{
					developerName: "productDetailImage",
					id: "2mgal000000SeaVIAG",
					mediaItems: [
						{
							alternateText: null,
							contentVersionId: "5OUal000002EoDHOA0",
							id: "2pmal000000AX8zIAC",
							mediaType: "Image",
							sortOrder: 0,
							thumbnailUrl: null,
							title: "Splendid Sumatran",
							url: "/resource/B2B_LE_Pictures/SS-DR-BB.png"
						}
					],
					name: "Product Detail Images",
					usageType: "Standard"
				}
			],
			id: "01tal000000z84KIAU",
			fields: {
				StockKeepingUnit: {
					value: "SS-DR-BB"
				},
				Name: {
					value: "Splendid Sumatran Dark Roast Bean Bag"
				},
				Description: {
					value: "This popular blend captures the essence of Sumatra, a coffee farmers paradise. This is slowly roasted to retain the majority of the tropical flavors."
				}
			},
			entitlement: {
				canViewPrice: null
			},
			defaultImage: {
				alternateText: null,
				contentVersionId: "5OUal000002EoDHOA0",
				id: "2pmal000000AX8zIAC",
				mediaType: "Image",
				sortOrder: 0,
				thumbnailUrl: null,
				title: "Splendid Sumatran",
				url: staticResourcePath + "/SS-DR-BB.png"
			},
			panel: "board"
		}
	];
};

export { getPreviewProducts };