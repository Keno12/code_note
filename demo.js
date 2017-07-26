$.validator.addMethod("compareDate", function(value, element, param) {
  var date = new Date();
  var valueDate = new Date(value);
  var afterDate = date.setDate(date.getDate() + 30)
  if (valueDate - date <= afterDate - date) {
    return false;
  } else {
    return true;
  }
}, $.validator.format("开始还款日期必须大于开标日期30以上"));