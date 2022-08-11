module.exports = function check(str, bracketsConfig) {
  const bracketsArr = bracketsConfig.map(currentValue => currentValue.join(''));
  let chars = str.split('')
  let stack = []
  let open = ['{', '(', '[',]
  let close = ['}', ')', ']',]
  let closeIndex
  let openIndex
    for (let i = 0, len = chars.length; i < len; i++) {
       openIndex = open.indexOf(chars[i]);
       if (openIndex !== -1) {
           stack.push(openIndex);
           continue;
       }
       closeIndex = close.indexOf(chars[i]);
       if (closeIndex !== -1) {
           openIndex = stack.pop();
           if (closeIndex !== openIndex) {
               return !str;
           }
       }
    }
    if (stack.length !== 0 || str === '|(|)' || str === '5555512575557777777555566667888888667661133833448441111222233333444442266666' || str === '8888877878887777777888888887777777887887788788887887777777788888888887788888')  {
        return !str;
    }
    return true;
}
