/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Pokemon = require('./pokemon.model');

exports.register = function(socket) {
  Pokemon.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Pokemon.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('pokemon:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('pokemon:remove', doc);
}