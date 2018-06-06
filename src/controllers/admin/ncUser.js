class ncUser extends notFramework.CRUDController {
	constructor(app, params) {
		notFramework.notCommon.log('running ncUser controller');
		super(app, params);
		this.setModuleName('user');
		this.setOptions('containerSelector', '#content');
		this.setOptions('params', params);
		this.setOptions('role', 'admin');
		this.setOptions('names', {
			plural: 'Пользователи',
			single: 'Пользователь',
		});

		let formHelpers = {};

		this.setOptions('views', {
			create: {
				preload: {},
				action: 'create',
				prefix: 'item_form_',
				targetQuery: '#formPlace',
				helpers: formHelpers
			},
			update: {
				preload: {},
				action: 'update',
				loadAction: 'get',
				prefix: 'item_form_',
				targetQuery: '#formPlace',
				helpers: formHelpers
			},
			details: {
				preload: {},
				name: 'view',
				prefix: 'item_details_',
				targetQuery: '#formPlace',
			},
			list: {
				targetQuery: '#tablePlace',
				endless: false,
				preload: {},
				fields: [{
					path: ':glassID',
					title: 'ID',
					sortable: true
				}, {
					path: ':title',
					title: 'Название',
					sortable: true,
					searchable: true
				}, {
					path: ':codeName',
					title: 'Кодовое название',
					sortable: true,
					searchable: true
				}, {
					path: ':default',
					title: 'По умолчанию',
					sortable: true,
					searchable: true
				}, {
					path: ':products',
					title: 'Продукты',
					preprocessor: (value, item) => {
						return this.app.getOptions().getNamesByIds(this.getOptions('libs.products'), item.products).join(', ');
					}
				}, {
					path: ':_id',
					title: 'Действия',
					preprocessor: (value) => {
						return {
							url: [this.getModuleName(), value].join('/'),
							title: 'Смотреть'
						};
					},
					component: {
						template: {
							name: 'link'
						}
					}
				}],
			}
		});
		let lib = {};
		this.preloadLib(lib)
			.then(this.route.bind(this, params))
			.catch(notFramework.notCommon.report);
	}

	initItem() {
		let newRecord = this.make[this.getModuleName()]({
			'_id': null,
			title: this.getOptions('names.single'),
			description: '',
			properties: [],
			codeName: '',
			value: {
				title: ''
			}
		});
		return newRecord;
	}

}
export default ncUser;
