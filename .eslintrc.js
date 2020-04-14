module.exports = {
	root: true,

	env: {
		node: true
	},

	extends: ['plugin:vue/essential'],

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prefer-arrow-callback': 'off',
		'func-names': 'off',
		'no-param-reassign': 'off',
		'import/prefer-default-export': 'off',
		'arrow-body-style': 'off',
		'max-len': [2, 155, 4],
		'no-alert': 'off',
		'consistent-return': 'off',
		'linebreak-style': 'off'
	},

	parserOptions: {
		parser: 'babel-eslint'
	},
};
