({
    showModal: function(component){
        component.set("v.isJoinClicked",true);
    },
    exitClub : function(component){
        var messageCmp = component.find('exit');
        $A.util.toggleClass(messageCmp, 'slds-hide');
        //addClass
        //removeClass
    },
    hidePrompt : function(component){
        component.set("v.isJoinClicked",false);
    },
    toggle : function(component){
        var spinnerCmp = component.find('spinner');
        $A.util.removeClass(spinnerCmp, 'slds-hide');
    }
})
