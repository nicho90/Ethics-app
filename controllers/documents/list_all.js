var async = require('async');
var colors = require('colors');
var pg = require('pg');
var types = require('pg').types;
types.setTypeParser(1700, 'text', parseFloat);
var _ = require('underscore');
var jwt = require('jsonwebtoken');
var pool = require('../../server.js').pool;
var server_url = require('../../server.js').server_url;
var jwtSecret = require('../../server.js').jwtSecret;

var fs = require("fs");
var dir_1 = "/../../sql/queries/members/";
var dir_2 = "/../../sql/queries/documents/";
var query_get_member = fs.readFileSync(__dirname + dir_1 + 'get.sql', 'utf8').toString();
var query_list_documents_with_user = fs.readFileSync(__dirname + dir_2 + 'list_with_user.sql', 'utf8').toString();
var query_list_documents_filter_by_status = fs.readFileSync(__dirname + dir_2 + 'list_filter_by_status.sql', 'utf8').toString();


// LIST ALL
exports.request = function(req, res) {

    async.waterfall([
        function(callback){
            // Connect to database
            pool.connect(function(err, client, done) {
                if(err) {
                    callback(err, 500);
                } else {
                    callback(null, client, done);
                }
            });
        },
        function(client, done, callback) {
            // Authorization
            if(req.headers.authorization) {
                var token = req.headers.authorization.substring(7);

                // Verify token
                jwt.verify(token, jwtSecret, function(err, decoded) {
                    if(err){
                        res.status(401).send("Authorization failed!");
                    } else {
                        if(decoded.member){
                            // Database query
                            client.query(query_get_member, [
                                decoded.member_id
                            ], function(err, result) {
                                done();
                                if (err) {
                                    callback(err, 500);
                                } else {
                                    // Check if Member exists
                                    if (result.rows.length === 0) {
                                        callback(new Error("Member not found"), 404);
                                    } else {
                                        callback(null, client, done, result.rows[0]);
                                    }
                                }
                            });
                        } else {
                            res.status(401).send("Authorization failed!");
                        }
                    }
                });
            } else {
                res.status(401).send("Authorization failed!");
            }
        },
        function(client, done, member, callback) {

            var query;
            var params = [];
            params.push(member.institute_id);

            // Check filters
            switch(req.query.status){
                case '0': {
                    query = query_list_documents_filter_by_status;
                    params.push(0);
                    break;
                }
                case '1': {
                    query = query_list_documents_filter_by_status;
                    params.push(1);
                    break;
                }
                case '2': {
                    query = query_list_documents_filter_by_status;
                    params.push(2);
                    break;
                }
                case '3': {
                    query = query_list_documents_filter_by_status;
                    params.push(3);
                    break;
                }
                case '4': {
                    query = query_list_documents_filter_by_status;
                    params.push(4);
                    break;
                }
                case '5': {
                    query = query_list_documents_filter_by_status;
                    params.push(5);
                    break;
                }
                case '6': {
                    query = query_list_documents_filter_by_status;
                    params.push(6);
                    break;
                }
                case '7': {
                    query = query_list_documents_filter_by_status;
                    params.push(7);
                    break;
                }
                default: {
                    query = query_list_documents_with_user;
                }
            }
            callback(null, client, done, query, params);
        },
        function(client, done, query, params, callback) {
            // Database query
            client.query(query, params, function(err, result) {
                done();
                if (err) {
                    callback(err, 500);
                } else {
                    callback(null, 200, result.rows);
                }
            });
        }
    ], function(err, code, result) {
        if(err){
            console.error(colors.red(err));
            res.status(code).send(err.message);
        } else {
            res.status(code).send(result);
        }
    });
};
