export default {
  input: './src/index.js',
  output: [
		{
			format: 'umd',
			name: 'CVM',
			file: 'lib/cvmath.js',
      indent: '\t'
		},
		{
			format: 'es',
			file: 'lib/cvmath.module.js',
      indent: '\t'
		}
	]
}
