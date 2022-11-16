import { baconCode } from './code.js'
import { swap } from '../../swap.js'

function baconDecode(string, alphs = ['A', 'B']) {
	const baconSwapped = swap(baconCode)
	return string
		.split(' ')
		.map(
			v =>
				baconSwapped[
					v
						.replace(new RegExp(alphs[0], 'g'), 'A')
						.replace(new RegExp(alphs[1], 'g'), 'B')
				],
		)
		.join('')
}

export { baconDecode }