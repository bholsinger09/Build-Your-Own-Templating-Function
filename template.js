





function template(string, options) {
  var delimiter = {
  	open: '<<! ',
  	close: '>>!'
  };
  var templateStr = [];
  var i = 1;
  var endDelimiter = 0;
  var argumentsFunct = [];
  var endVariable, remainingVar;

  var stringInQuotes = function (string) {
  	return "'" + string + "'";
  };
  for (var key in options) {
  	if (options.hasOwnProperty(key)){
  		if (options[key] !== undefined){
  			delimiter[key] = options[key];
  		}
  	}
  }
  
  var segments = string.split(delimiter.open);
  var numOfSegments = segments.length;

  templateStr.push(stringInQuotes(segments[0]));

  while (i < numOfSegments) {
  	endDelimiter = segments[i].indexOf(delimiter.close);
  	endVariable = segments[i].slice(0, endDelimiter);
  	argumentsFunct.push(endVariable);
  	templateStr.push(endVariable);

  	remainingVar = segments[i].slice( endDelimiter + 
  	delimiter.close.length);
  	templateStr.push(stringInQuotes(remainingVar));
  	i++;
  }
  //debugger;
  templateStr = 'while(times--) {console.log(' + templateStr.join('+') 
  + ')}';
  //debugger;
  console.log(argumentsFunct);
  return new Function ( argumentsFunct.join(',') ,
   'times', templateStr

  	);

  

};

var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
var logResult = template( string,2 );
logResult( 'love', 'ice cream', 2 );


