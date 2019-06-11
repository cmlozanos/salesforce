public with sharing class AccountSearchController {
    public AccountSearchController() {

    }

    @AuraEnabled
    public static List<Account> searchAccounts( String searchTerm){

        List<Account> accounts = new List<Account>();
        if (String.isNotBlank(searchTerm)){
            accounts = listAccountsBySearchTerm(searchTerm);
        }
        return accounts;
    }

    private static List<Account> listAccountsBySearchTerm (String searchTerm) {
        return [
            FIND :searchTerm
            RETURNING Account(
                Id, Name, Phone, 
                BillingStreet, BillingCity, 
                BillingState, BillingPostalCode
                ORDER BY Name
                LIMIT 10
            )
         ][0];

    }
}
