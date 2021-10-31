import $ from 'jquery'
export function toggleSwitch(el) {
  const cb = $('#' + el).parent('.toggle-btn')
  let result = null;
  if (
    $(cb)
      .find('input.cb-value')
      .is(':checked')
  ) {
    result = true;
    $(cb).addClass('active')
    $(cb)
      .find('input.cb-value')
      .attr('checked', 'checked')
  } else {
    result = false;
    $(cb).removeClass('active')
    $(cb)
      .find('input.cb-value')
      .removeAttr('checked')
  }
  return result;
}

export function reduceData(sourceData, type) {
  const source = sourceData.sales;
  const criteria = sourceData.criteria;
  let grossSales1 = 0
  let grossSales2 = 0

  let sales1 = 0
  let sales2 = 0
  let orders1 = 0
  let orders2 = 0
  let itemsSold1 = 0
  let itemsSold2 = 0

  const data = []
  const result = []

  for (let i = 1; i < source.length; i++) {
    if (type == 'revenue') {
      grossSales1 = source[i].y.includes(criteria.g1) ? source[i].gross_sales : 0
      grossSales2 = source[i].y.includes(criteria.g2) ? source[i].gross_sales : 0
      data.push({
        date: source[i].md,
        grossSales1: grossSales1,
        grossSales2: grossSales2,
      })
    } else if (type == 'overview') {
      sales1 = source[i].y.includes(criteria.g1) ? source[i].net_sales : 0
      sales2 = source[i].y.includes(criteria.g2) ? source[i].net_sales : 0
      orders1 = source[i].y.includes(criteria.g1) ? source[i].orders : 0
      orders2 = source[i].y.includes(criteria.g2) ? source[i].orders : 0
      data.push({
        date: source[i].md,
        sales1: sales1,
        sales2: sales2,
        orders1: orders1,
        orders2: orders2,
      })
    } else if (type == 'orders') {
      orders1 = source[i].y.includes(criteria.g1) ? source[i].orders : 0
      orders2 = source[i].y.includes(criteria.g2) ? source[i].orders : 0
      data.push({
        date: source[i].md,
        orders1: orders1,
        orders2: orders2,
      })
    } else if (type == 'products') {
      itemsSold1 = source[i].y.includes(criteria.g1) ? source[i].items_sold : 0
      itemsSold2 = source[i].y.includes(criteria.g2) ? source[i].items_sold : 0
      data.push({
        date: source[i].md,
        itemsSold1: itemsSold1,
        itemsSold2: itemsSold2,
      })
    } else if (type == 'categories') {
      itemsSold1 = source[i].y.includes(criteria.g1) ? source[i].items_sold : 0
      itemsSold2 = source[i].y.includes(criteria.g2) ? source[i].items_sold : 0
      data.push({
        date: source[i].md,
        itemsSold1: itemsSold1,
        itemsSold2: itemsSold2,
      })
    }
  }

  if (type == 'revenue') {
    data.reduce(function(res, value) {
      if (!res[value.date]) {
        res[value.date] = {
          date: value.date,
          mdy1: '',
          mdy2: '',
          grossSales1: 0,
          grossSales2: 0,
        }
        result.push(res[value.date])
      }
      res[value.date].mdy1 = criteria.g1 + '-' + value.date
      res[value.date].mdy2 = criteria.g2 + '-' + value.date
      res[value.date].grossSales1 += value.grossSales1
      res[value.date].grossSales2 += value.grossSales2
      return res
      /*      
      if (!res[value.date]) {
        res[value.date] = {
          date: value.date,
          mdy1: '',
          mdy2: '',
          grossSales1: 0,
          grossSales2: 0,
        }
        result.push(res[value.date])
      }
      res[value.date].grossSales1 += value.grossSales1
      res[value.date].grossSales2 += value.grossSales2
      res[value.date].mdy1 = criteria.g1 + '-' + value.date
      res[value.date].mdy2 = criteria.g2 + '-' + value.date
      return res
      */

    }, {})
  } else if (type == 'overview') {
    data.reduce(function(res, value) {
      if (!res[value.date]) {
        res[value.date] = {
          date: value.date,
          mdy1: '',
          mdy2: '',
          sales1: 0,
          sales2: 0,
          orders1: 0,
          orders2: 0,
        }
        result.push(res[value.date])
      }
      res[value.date].mdy1 = criteria.g1 + '-' + value.date
      res[value.date].mdy2 = criteria.g2 + '-' + value.date
      res[value.date].sales1 += value.sales1
      res[value.date].sales2 += value.sales2
      res[value.date].orders1 += value.orders1
      res[value.date].orders2 += value.orders2
      return res
    }, {})
  } else if (type == 'orders') {
    data.reduce(function(res, value) {
      if (!res[value.date]) {
        res[value.date] = {
          date: value.date,
          mdy1: '',
          mdy2: '',
          orders1: 0,
          orders2: 0,
        }
        result.push(res[value.date])
      }
      res[value.date].mdy1 = criteria.g1 + '-' + value.date
      res[value.date].mdy2 = criteria.g2 + '-' + value.date
      res[value.date].orders1 += value.orders1
      res[value.date].orders2 += value.orders2
      return res
    }, {})
  } else if (type == 'products') {
    data.reduce(function(res, value) {
      if (!res[value.date]) {
        res[value.date] = {
          date: value.date,
          mdy1: '',
          mdy2: '',
          itemsSold1: 0,
          itemsSold2: 0,
        }
        result.push(res[value.date])
      }
      res[value.date].mdy1 = criteria.g1 + '-' + value.date
      res[value.date].mdy2 = criteria.g2 + '-' + value.date
      res[value.date].itemsSold1 += value.itemsSold1
      res[value.date].itemsSold2 += value.itemsSold2
      return res
    }, {})
  } else if (type == 'categories') {
    data.reduce(function(res, value) {
      if (!res[value.date]) {
        res[value.date] = {
          date: value.date,
          mdy1: '',
          mdy2: '',
          itemsSold1: 0,
          itemsSold2: 0,
        }
        result.push(res[value.date])
      }
      res[value.date].mdy1 = criteria.g1 + '-' + value.date
      res[value.date].mdy2 = criteria.g2 + '-' + value.date
      res[value.date].itemsSold1 += value.itemsSold1
      res[value.date].itemsSold2 += value.itemsSold2
      return res
    }, {})
  }
  console.log(result)
  return result
}
