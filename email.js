let appData = {
    name: 'Email',
    mailboxes: {
        inbox: {email1: 'hello', email2: 'goodbye'},
        starred: {email3: 'inside', email4: 'outside'},
        sent: {email5: 'up', email6: 'down'},
        drafts: {email7: 'sideways'},
        trash: {email8: 'left', email9: 'right'},
    },        
    contacts: [
        {name: 'Chloe', lastMessage: "I am good at this."},
        {name: 'Fisher', lastMessage: "I am great at this."},
        {name: 'Brittany', lastMessage: "I am even better at this."},
        {name: 'Austin', lastMessage: "I am the best at this."}
    ]
}

console.log(Object.keys(appData.mailboxes));

console.log(Object.values(appData.mailboxes));

console.log(appData.mailboxes.inbox.email2);

appData.mailboxes.sent.email7 = appData.mailboxes.drafts.email7;
delete appData.mailboxes.drafts.email7;
console.log(Object.values(appData.mailboxes));

let email10 = "backwards";
appData.mailboxes.drafts.email10 = email10;
console.log(Object.values(appData.mailboxes));