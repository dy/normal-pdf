/** @module  normal-pdf */

const τ = Math.PI * 2;

module.exports = function pdf ( x, μ = 0, υ = 1 ) {
	if ( υ === 0 ) {
		return x === μ ? 1 : 0;
	}

	return Math.exp(-.5 * Math.pow(x - μ, 2) / υ) / Math.sqrt(τ * υ);
}
