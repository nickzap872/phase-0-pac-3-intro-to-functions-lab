// Function to shout the provided string in all caps
function shout(string) {
    return string.toUpperCase();
  }
  
  // Function to whisper the provided string in all lowercase
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // Function to log the provided string in all caps using console.log()
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Function to log the provided string in all lowercase using console.log()
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Function to respond based on the content of the string
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  // Exporting functions to be used in test files if needed (CommonJS style)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { shout, whisper, logShout, logWhisper, sayHiToHeadphonedRoommate };
  }
  