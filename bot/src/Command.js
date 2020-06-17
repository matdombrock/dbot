class Command{
  constructor(data){
    this.info = data.info || {};
    this.fn = data.fn || this.missingFunction;
  }
  missingFunction(){
    // fills in the command function when it is not provided
    // avoids errors
    console.log('Missing function...');
  }
}
module.exports = Command;