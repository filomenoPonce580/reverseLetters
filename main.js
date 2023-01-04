function reverseLetter(str) {
  //create new empty array
  let newArr = []
    
  //filter out non alphabet
  return str.replace(/[^a-z]/gi,'')
              
  //split into array   
            .split('')
    
  //reverse array
            .reverse()
    
  //join back into string
            .join('')
    
}
