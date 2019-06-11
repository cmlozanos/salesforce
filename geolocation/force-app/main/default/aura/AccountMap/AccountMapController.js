({
    onAccountsLoaded : function(component, event, helper) {
        var mapMarkers = [];
        var accounts = events.getParam('accounts');
        for (let index = 0; index < accounts.length; index++) {
            const account = accounts[index];
            var marker = {
                'location' : {
                    'Street': account.BillingStreet,
                    'City': account.BillingCity,
                    'PostalCode': account.BillingPostalCode
                },
                'title': account.Name,
                'description': (
                    'Phone: ' + account.Phone +
                    '</br>' + 
                    'Website: ' + account.Website
                ),
                'icon' : 'standard:location'
            }
            mapMarkers.push(marker);
        }
        component.set('v.mapMarkers', mapMarkers);
    }
})
