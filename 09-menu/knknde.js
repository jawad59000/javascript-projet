const a = "uhuhuuhuhuuunzapkapapsonzucbei";
const b = "uhuhuuhuhuuunzapkapapsonzucbei";
menu = a + b;

const categories = menu.reduce(function (values, value) {
  if (!values.includes(value)) {
    values.push(value);
  }
  return values;
});
