var records = [
    { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] },
    { id: 2, username: 'jacks', password: 'd', displayName: 'Jill', emails: [ { value: 'jack1@example.com' } ] },
    { id: 3, username: 'audit', password: 'd', displayName: 'Audit', emails: [ { value: 'jill@example.com' } ] }
];

exports.findById = function(id, cb) {
    process.nextTick(function() {
        var idx = id - 1;
        records[idx] ? cb(null, records[idx]) : cb(new Error('User ' + id + ' does not exist'));
    });
};

exports.findByUsername = function(username, cb) {
    process.nextTick(function() {
        var i = 0, len = records.length, record;
          for (; i < len; i++) {
              record = records[i];
              if (record.username === username) {
                  return cb(null, record);
              }
          }
          return cb(null, null);
    });
};
