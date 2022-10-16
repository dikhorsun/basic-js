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
 const data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {
    constructor(value){
        this.value = value;
    }
    encrypt(message, key) {
        if (!message || ! key){
            throw new Error ('Incorrect arguments!')
        }

        const str = message.toUpperCase()
        let keyUpper = key.toUpperCase()

        if (str.length>keyUpper.length){
            const numberRepeat = Math.ceil(str.length/keyUpper.length)
            keyUpper = keyUpper.repeat(numberRepeat).slice(0, str.length)
        }

        let count = 0,
            res = '';

            for (let i=0; i<str.length; i++){
                if(data.includes(str[i])){
                    res = res + data[(data.indexOf(str[i])+data.indexOf(keyUpper[i-count]))%data.length]
                } else {
                    res = res + str[i]
                    count++
                }
            }
            if(this.value === false){
                res = res.split('').reverse().join('')
            }
            return res
    }

  

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || ! key){
            throw new Error ('Incorrect arguments!')
        }

        const str = encryptedMessage.toUpperCase()
        let keyUpper = key.toUpperCase()

        if (str.length>keyUpper.length){
            const numberRepeat = Math.ceil(str.length/keyUpper.length)
            keyUpper = keyUpper.repeat(numberRepeat).slice(0, str.length)
        }

        let count = 0,
            res = '';

            for (let i=0; i<str.length; i++){
                if(data.includes(str[i])){
                    res +=data[(data.indexOf(str[i]) - data.indexOf(keyUpper[i - count]) + data.length) % data.length];
                } else {
                    res = res + str[i]
                    count++
                }
            }
            if(this.value === false){
                res = res.split('').reverse().join('')
            }
            return res
    }
  }

module.exports = {
  VigenereCipheringMachine
};
