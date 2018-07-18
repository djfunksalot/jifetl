#!/usr/bin/env node
'use strict'
var awcm = require('awcm');
var argv = require('minimist')(process.argv.slice(2));
var action = 'info';
var shared = true;
var verbose = false;
if (argv['_'].length > 0) {
    action = argv['_'][0];
}

var ip = '127.0.0.1';
if (argv['i']) {
    ip = argv['i'];
}

var verbose = 'false';
if (argv['v']) {
    verbose = true;
}

var jif = awcm.syncFile('jifetl.json');
jif.then(function(jump) {
    var forum = {}
    if (jump.global.IP !== undefined) {
        ip = jump.global.IP;
    }
    forum['ip'] = ip;
    forum['action'] = action;
    forum['verbose'] = verbose;
    forum['doShared'] = true;
    var fire = awcm.build(forum, jump);
    fire.then(function(finfo) {
        if(finfo) {
        }
    }).catch(function(err) {
        console.log('error',err);
    })
    
}).catch(function(err) {
    console.log('something went wrong');
   console.log(err);
deferred.reject(new Error(err));
})
