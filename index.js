var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
    id: "skygo_link",
    label: "Öffne SkyGo",
    icon: {
        "16": "./sg2f_16.png",
        "32": "./sg2f_32.png",
        "64": "./sg2f_64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    var currentDomain = extractDomain(tabs.activeTab.url),
        targetDomain = 'www.skygo.sky.de';
    if(currentDomain == targetDomain){
        injectScripts();
    }else{
        tabs.open({
            url: "https://" + targetDomain,
            onReady: function onReady(tab) {
                injectScripts();
                console.log(tab.title);
            }
        });
    }
}

function injectScripts(){
    tabs.activeTab.attach({
        contentScriptFile: [self.data.url('jquery.min.js'), self.data.url('sg2f.js')]
    });
}

function extractDomain(url) {
    var domain;
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }
    domain = domain.split(':')[0];

    return domain;
}