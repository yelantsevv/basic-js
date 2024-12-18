const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  string;
  keyCopy;

  constructor(type = true) {
    this.type = type;
  }

  encrypt(str, key) {
    return this.#process(str, key, true);
  }

  decrypt(str, key) {
    return this.#process(str, key, false);
  }
  #check(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
  }
  #process(str, key, isEncrypt) {
    this.#check(str, key);

    this.string = str.toUpperCase();
    this.keyCopy = key.toUpperCase();

    let result = '';
    let counter = 0;

    for (let i = 0; i < this.string.length; i++) {
      if (counter >= this.keyCopy.length) {
        counter = 0;
      }

      if (this.letters.includes(this.string[i])) {
        const charIndex = this.letters.indexOf(this.string[i]);
        const letterIndex = this.letters.indexOf(this.keyCopy[counter]);
        const offset = charIndex + (isEncrypt ? letterIndex : - letterIndex);

        // Нормализуем индекс и добавляем символ в результат
        result += this.letters[(offset + this.letters.length) % this.letters.length];
        counter++;
      } else {
        result += this.string[i];
      }
    }

    // Возвращаем результат с учетом типа машины (обычная или реверсивная)
    return this.type ? result : [...result].reverse().join('');
  }
}



module.exports = {
  VigenereCipheringMachine
};
