var fs = require('fs');
var array = [];

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, list){
        if(err){
            return callback(err);
        }
        
        for(var i = 0; i < list.length; i++){
            if(list[i].toLowerCase().includes('.' + ext)){
                array.push(list[i]);
            }
        }
        
        return callback(null, array);
    })
}