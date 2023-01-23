module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
	"transform-inline-environment-variables",
	[
		'module-resolver',
		{
		  root: ['.'],
		  alias: {
			/**
			 * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
			 */
			'@base': './src/base',
			'@actions': './src/actions',
			'@utils': './src/utils',
			"@config": './src/config',
			"@configurations": './src/configurations'
		  },
		  extensions: [
			'.ios.js',
			'.android.js',
			'.js',
			'.jsx',
			'.json',
			'.tsx',
			'.ts',
			'.native.js',
		  ],
		},
	  ],
  ]
};
