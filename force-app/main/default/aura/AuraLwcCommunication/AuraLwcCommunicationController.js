({
    handleMessage : function(component, event, helper) {
        var messageFromAura = event.getParam("messageFromLWC");
        component.set("v.messageFromAuraCmp", messageFromAura);
    }
})