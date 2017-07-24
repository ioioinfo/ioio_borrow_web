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

var moduel_prefix = 'ioio_borrow_main';

exports.register = function(server, options, next) {
    var wx_api = server.plugins.services.wx_api;
    var person = server.plugins.services.person;

    var cookie_options = {ttl:10*365*24*60*60*1000};
    var cookie_key = "ioio_borrow_cookie";

    server.route([
        //首页
        {
            method: 'GET',
            path: '/index',
            handler: function(request, reply) {
                return reply.view("index");
            },
        },

        //借阅记录
        {
            method: 'GET',
            path: '/borrow_books',
            handler: function(request, reply) {
                return reply.view("borrow_books");
            },
        },

        //借阅记录详情
        {
            method: 'GET',
            path: '/borrow_books_view',
            handler: function(request, reply) {
                return reply.view("borrow_books_view");
            },
        },

        //还书记录
        {
            method: 'GET',
            path: '/return_list',
            handler: function(request, reply) {
                return reply.view("return_list");
            },
        },

        //借书详情
        {
            method: 'GET',
            path: '/borrow_view',
            handler: function(request, reply) {
                return reply.view("borrow_view");
            },
        },

        //web首页
        {
            method: 'GET',
            path: '/mobile_index',
            handler: function(request, reply) {
                return reply.view("mobile_index");
            },
        },


        //web我的借阅
        {
            method: 'GET',
            path: '/my_borrow',
            handler: function(request, reply) {
                return reply.view("my_borrow");
            },
        },


        //web个人中心
        {
            method: 'GET',
            path: '/person',
            handler: function(request, reply) {
                return reply.view("person");
            },
        },


        //后台借书卡管理
        {
            method: 'GET',
            path: '/borrow_card',
            handler: function(request, reply) {
                return reply.view("borrow_card");
            },
        },

        //学员列表
        {
            method: 'GET',
            path: '/students_list',
            handler: function(request, reply) {
                return reply.view("students_list");
            },
        },


        //押金列表
        {
            method: 'GET',
            path: '/card_deposit',
            handler: function(request, reply) {
                return reply.view("card_deposit");
            },
        },

        //图书库存
        {
            method: 'GET',
            path: '/book_inventory',
            handler: function(request, reply) {
                return reply.view("book_inventory");
            },
        },

        //借还操作
        {
            method: 'GET',
            path: '/borrow_return',
            handler: function(request, reply) {
                return reply.view("borrow_return");
            },
        },


    ]);

    next();
}

exports.register.attributes = {
    name: moduel_prefix
};
