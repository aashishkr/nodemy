function emmiter(){
    this.events = {};
};

emmiter.prototype.on = function(type, listner){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listner);
}

emmiter.prototype.emmit = function(type){
    this.events[type].forEach( function(listner) {
        listner();
    });
}

module.exports = emmiter;