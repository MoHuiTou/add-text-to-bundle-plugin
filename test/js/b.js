module.exports = {
    mutli: function(...values){
        let result = 1;
        for(var val in values){
            result = result * val;
        }
        return result;
    }
}