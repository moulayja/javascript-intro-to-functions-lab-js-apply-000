
//To Upper Case Function

function shout(string){
  return string.toUpperCase();
  
}

shout('hello');

// to Lower Case Function
function whisper(string){
    return string.toLowerCase();
}
whisper('HELLO');

// Third function

function logShout(string){
  const spy = string.toUpperCase();
  console.log(spy);
}

logShout('hello');

