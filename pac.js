/**
 * genpac 2.1.0 https://github.com/JinnLynn/genpac
 * Generated: Thu, 12 Mar 2020 21:16:28 +0000
 * GFWList Last-Modified: -
 * GFWList From: local[/home/runner/work/BackCN/BackCN/backcn.txt]
 */

var proxy = 'SOCKS5 127.0.0.1:1080;';
var rules = [
    [
        [],
        [],
        [],
        []
    ],
    [
        [],
        [],
        [
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?ip\\.cn",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?netease\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?music\\.126\\.net",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?music\\.163\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?ipservice\\.163\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?weibo\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?xiami\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?www\\.xiami\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?xiami\\.net",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?taobao\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?mmstat\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?alicdn\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?pingfore\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?h5cgi\\.video\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?tj\\.video\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?pingjs\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?cm\\.l\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?like\\.video\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?dp3\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?webrtcpunch\\.video\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?login\\.tv\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?btrace\\.video\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?y\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?ssl\\.captcha\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?vd\\.l\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?video\\.coral\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?v\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?c\\.v\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?video\\.qq\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?cmts\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?iface2\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?api\\.vip\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?control-i\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?subscription\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?qosp\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?www\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?cmonitor\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?static\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?cache\\.video\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?l-rcd\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?search\\.video\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?acc-v2\\.if\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?notice\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?userpref\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?passport\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?cook\\.iqiyi\\.com",
            "^[\\w\\-]+:\\/+(?!\\/)(?:[^\\/]+\\.)?t7z\\.cupid\\.iqiyi\\.com"
        ],
        []
    ]
];

var lastRule = '';

function FindProxyForURL(url, host) {
    for (var i = 0; i < rules.length; i++) {
        var ret = testURL(url, i);
        if (ret !== undefined)
            return ret;
    }
    return 'DIRECT';
}

function testURL(url, index) {
    for (var i = 0; i < rules[index].length; i++) {
        for (var j = 0; j < rules[index][i].length; j++) {
            lastRule = rules[index][i][j];
            if ( (i % 2 == 0 && regExpMatch(url, lastRule))
                || (i % 2 != 0 && shExpMatch(url, lastRule)))
                return (i <= 1) ? 'DIRECT' : proxy;
        }
    }
    lastRule = '';
};

function regExpMatch(url, pattern) {
    try {
        return new RegExp(pattern).test(url);
    } catch(ex) {
        return false;
    }
};
