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
