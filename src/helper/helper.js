import $ from 'jquery'
export function toggleSwitch(el) {
  const cb = $('#' + el).parent('.toggle-btn')
  if (
    $(cb)
      .find('input.cb-value')
      .is(':checked')
  ) {
    $(cb).addClass('active')
    $(cb)
      .find('input.cb-value')
      .attr('checked', 'checked')
  } else {
    $(cb).removeClass('active')
    $(cb)
      .find('input.cb-value')
      .removeAttr('checked')
  }
}

export function reduceData(source, type) {
  let val1 = 0
  let val2 = 0
  const data = []

  for (let i = 1; i < source.length; i++) {
    if (type == 'revenue') {
      val1 = source[i].y.includes('2020') ? source[i].net_sales : 0
      val2 = source[i].y.includes('2021') ? source[i].net_sales : 0
    }
    data.push({
      date: source[i].md,
      value1: val1,
      value2: val2,
    })
  }

  const result = []
  data.reduce(function(res, value) {
    if (!res[value.date]) {
      res[value.date] = { date: value.date, value1: 0, value2: 0 }
      result.push(res[value.date])
    }
    res[value.date].value1 += value.value1
    res[value.date].value2 += value.value2
    return res
  }, {})

  return result
}
