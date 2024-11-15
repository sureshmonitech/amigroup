import {newmaskedphoneno} from './maskedphone'
export const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{1,3}|)?(\d{6})(\d{4})$/);
     if (match) {
      var intlCode = (match[1] ? `+${match[1]} ` : '');
      
           
        const matchedformat=newmaskedphoneno(match[2])
    
      return ['(',intlCode,')', matchedformat, '-', match[3]].join('');
    }
    return null;
  }



