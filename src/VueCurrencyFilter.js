import accounting from './accounting' 
import utils from './utils'

const VueCurrencyFilter = {
  install(Vue, options) {

    const defaultConfig = {
      symbol: '',
      thousandsSeparator: '.',
      fractionCount: 0,
      fractionSeparator: ',',
      symbolPosition: 'front',
      symbolSpacing: true,
      precision: 0,               // Support fixed-point currency: 0 for float, 2 for 1000¢ -> $10.00
    }

    if (utils.__isNull(options)) options = {}
    let configs = utils.__defaults(options, defaultConfig)

    const filterCurrency = function (value,
      _symbol,
      _thousandsSeparator,
      _fractionCount,
      _fractionSeparator,
      _symbolPosition,
      _symbolSpacing,
      _precision) {

      let runtimeConfig = utils.__defaults({
        symbol: _symbol,
        thousandsSeparator: _thousandsSeparator,
        fractionCount: _fractionCount,
        fractionSeparator: _fractionSeparator,
        symbolPosition: _symbolPosition,
        symbolSpacing: _symbolSpacing,
        precision: _precision
      }, configs)

      if (typeof _symbol === 'object') {
        runtimeConfig = utils.__defaults(_symbol, configs)
      }

      let result = 0.0
      const isNegative = String(value).charAt(0) === '-'

      if (isNegative) {
        value = String(value).slice(1)
      }

      const amount = parseFloat(value)
      if (!isNaN(amount)) {
        result = amount
      }

      let formatConfig = '%s%v'
      if (runtimeConfig.symbolPosition === 'front') {
        formatConfig = runtimeConfig.symbolSpacing ? '%s %v' : '%s%v'
      } else {
        formatConfig = runtimeConfig.symbolSpacing ? '%v %s' : '%v%s'
      }

      if (runtimeConfig.precision > 0) {
        value = accounting.unformat(value) / Math.pow(10, runtimeConfig.precision) // 1095 -> 10.95
      }

      if (runtimeConfig.fractionCount > 0) {
        value = accounting.toFixed(value, runtimeConfig.fractionCount)
      }

      result = accounting.formatMoney(value, {
        format: formatConfig,
        symbol: runtimeConfig.symbol,
        precision: runtimeConfig.fractionCount,
        thousand: runtimeConfig.thousandsSeparator,
        decimal: runtimeConfig.fractionSeparator,
      })

      if (isNegative) {
        result = '-' + result
      }

      return result
    }

    Vue.filter('currency', filterCurrency)
    Vue.prototype.$CurrencyFilter = {
      setConfig: (options) => {
        configs = utils.__defaults(options, defaultConfig)
      },
      getConfig: () => {
        return configs
      }
    }
  }
}

export default VueCurrencyFilter