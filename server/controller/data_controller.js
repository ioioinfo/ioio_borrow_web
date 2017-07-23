/**
 ┌──────────────────────────────────────────────────────────────┐
 │               ___ ___ ___ ___ ___ _  _ ___ ___               │
 │              |_ _/ _ \_ _/ _ \_ _| \| | __/ _ \              │
 │               | | (_) | | (_) | || .` | _| (_) |             │
 │              |___\___/___\___/___|_|\_|_| \___/              │
 │                                                              │
 │                                                              │
 │                       set up in 2015.2                       │
 │                                                              │
 │   committed to the intelligent transformation of the world   │
 │                                                              │
 └──────────────────────────────────────────────────────────────┘
*/

var _ = require('lodash');
var r = require('request');
var moment = require('moment');
var eventproxy = require('eventproxy');

var moduel_prefix = 'ioio_borrow_data';

exports.register = function(server, options, next) {
    var service_info = "ioio borrow";
    
    var person = server.plugins.services.person;
    var task = server.plugins.services.task;
    var hr = server.plugins.services.hr;
    var notify = server.plugins.services.notify;
    var things = server.plugins.services.things;

    var cookie_options = {ttl:10*365*24*60*60*1000};
    var cookie_key = "ioio_borrow_cookie";
    
    server.route([
        //查询数据测试
        {
            method: "GET",
            path: '/list_data',
            handler: function(request, reply) {
                return reply({"success":true,"rows":[],"num":0});
            }
        },
        
        //图书列表数据
        {
            method: "GET",
            path: '/list_books',
            handler: function(request, reply) {
                var org_code = "ioio";
                var params = request.query.params;
                
                things.list_books(org_code,params,function(err,rows) {
                    if (err) {
                        return reply({"success":false,"message":rows.message});
                    }
                    
                    if (rows.length == 0) {
                        return reply({"success":true,"message":"ok","rows":[],"num":0});
                    }
                    
                    var isbns = [];
                    _.each(rows,function(row) {
                        isbns.push(row.isbn);
                    });
                    
                    things.list_main_images_by_books(JSON.stringify(isbns),function(err,images) {
                        if (err) {
                            return reply({"success":false,"message":images.message});
                        }
                        
                        var m_images = {};
                        _.each(images,function(image) {
                            m_images[image.isbn] = image.location;
                        });
                        
                        _.each(rows,function(row) {
                            row.book_img = m_images[row.isbn];
                        });
                        
                        return reply({"success":true,"message":"ok","rows":rows,"num":rows.length});
                    })
                });
            }
        },
        
    ]);

    next();
}

exports.register.attributes = {
    name: moduel_prefix
};
