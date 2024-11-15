export const newmaskedphoneno = (accountId) => {
    if (accountId) { /** Condition will only executes if accountId is *not* undefined, null, empty, false or 0*/
        const accountIdlength = accountId.length;
        const maskedLength = accountIdlength - 0; 
     /** Modify the length as per your wish */
        let newString = accountId;
        for (let i = 0; i < accountIdlength; i++) {
            if (i < maskedLength) {
                newString = newString.replace(accountId[i], 'X');
            }
        }
        return newString;
    } 
    else return /**Will handle if no string is passed */
}
