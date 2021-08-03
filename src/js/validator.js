export default class Validator {
    validateUsername(name) {
      const patternOne = /[a-z]/i.test(name);
      const patternTwo = /^[^\d_-\W]+[\w-]*[^\d_-\W]$/.test(name);
      const patternTree = /[\d]{3,}/.test(name);
      if ((name.length === 1 && patternOne) || (patternTwo && !patternTree)) {
        this.name = name;
        return true;
      }
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9). Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.');
    }
}