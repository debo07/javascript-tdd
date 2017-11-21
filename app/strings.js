exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var outputStr = '', 
  		currentDuplicateChar = '',
  		counter;

    str.split('').forEach(function(i){
        if (i !== currentDuplicateChar) {
        	counter = 0;	
        }
        counter++;
        currentDuplicateChar = i;
        if (counter <= amount ) {
        	outputStr = outputStr + i;	
        }
    });

    return outputStr;
  },

  wordWrap: function(str, cols) {
  	var formatedString = '',
        wordsArray = [];


    wordsArray = str.split(' ');

    formatedString = wordsArray[0];

    for (var i = 1; i < wordsArray.length; i++) {
        if (wordsArray[i].length > cols) {
            formatedString += '\n' + wordsArray[i];
        } else {
            if (formatedString.length + wordsArray[i].length > cols) {
                formatedString += '\n' + wordsArray[i];
            } else {
                formatedString += ' ' + wordsArray[i];
            }
        }
    }

    return formatedString;
  },

  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
