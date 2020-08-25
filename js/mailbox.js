var INBOX = "1";
var SENT = "2";
var DRAFT = "3";
var TRASH = "4";
var messageCount = 0;

function onClickNavMenu(thisEle){ 
    addMessagesInInbox();
}

function addMessagesInInbox(){

    var messageItemContainer = document.getElementsByClassName('message-item-container');
    var noMessageEle = document.getElementsByClassName('no-message');
    var navId = navId;
    var inboxEle = document.getElementById("1");
    var messageCountDiv = inboxEle.getElementsByClassName("message-count");

    noMessageEle[0].className += ' display-none';

    var messageItemEle = document.createElement('div');
    var messageItemTitle = document.createElement('h6');
    var messageItemNewTag = document.createElement('div');
    var messageItemDetails = document.createElement('div');
   
    messageItemEle.className = 'message-item';
    messageItemEle.setAttribute("id", Date.now()); //unique Id
    messageItemEle.setAttribute("tab-id", "1");
    messageItemEle.setAttribute("onclick", "showDetailedMessages(this)"); //unique Id

    messageItemTitle.className = 'message-title';
    messageItemTitle.innerText = 'Mail : Important update' + Date.now();

    messageItemNewTag.className = 'blue-dot new-tag';

    messageItemDetails. className = 'message-detail-text';
    messageItemDetails.innerText = 'Hi all, Please look into it ASAP.';

    messageItemEle.appendChild(messageItemTitle);
    messageItemEle.appendChild(messageItemNewTag);
    messageItemEle.appendChild(messageItemDetails);

    messageItemContainer[0].insertBefore(messageItemEle, messageItemContainer[0].childNodes[0]);
    messageItemContainer[0].classList.remove("display-none");
   
    messageCount++;
    messageCountDiv[0].innerText = messageCount;
}

/**
 * This function will show preview of new message and hide blue dot
 * @param {*} thisEle 
 */
function showDetailedMessages(thisEle){
    var messageId = thisEle.getAttribute('id');
    var previewContainer = document.getElementsByClassName('preview-message');
    let messageItemNewTag = thisEle.getElementsByClassName('blue-dot');   
    let messageItemTitleEle = thisEle.getElementsByClassName('message-title');
    var inboxEle = document.getElementById("1");
    var messageCountDiv = inboxEle.getElementsByClassName("message-count");

    if(!messageItemNewTag[0].classList.contains("display-none"))
    {
        messageItemNewTag[0].className += ' display-none';
    }

    var messageItemTitle = document.createElement('h3');
    var messageItemDetailText = document.createElement('div');

    messageItemTitle.innerText = messageItemTitleEle[0].innerHTML;
    messageItemDetailText.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

    previewContainer[0].innerHTML = "";
    previewContainer[0].appendChild(messageItemTitle);
    previewContainer[0].appendChild(messageItemDetailText);

    if(messageCount > 0)
    {
        messageCount--;
        if(messageCount > 0)
            messageCountDiv[0].innerText = messageCount;
        else
            messageCountDiv[0].innerHTML = "";    
    }
}

/**
 * 
 * @param {*} this 
 */
function showMessages(thisEle){
    var navId = thisEle.getAttribute('id');

    switch (navId) {
        case INBOX:
          showMessagesItemsInbox();
          break;
        case SENT:
            showMessagesItemsSent();
          break;
        case DRAFT:
            showMessagesItemsDraft();
          break;
        case TRASH:
            showMessagesItemsTrash();
          break;
      }
}

function showMessagesItemsInbox(){
    let messageItemContainer = document.getElementsByClassName('message-item-container');
    let messageItemsList = messageItemContainer[0].getElementsByClassName('message-item');
    let noMessageEle = document.getElementsByClassName('no-message');

    if(messageItemsList.length != 0)
    {
        messageItemContainer[0].classList.remove('display-none');
        noMessageEle[0].className += ' display-none';
    }
    else
    {
        messageItemContainer[0].className += ' display-none';
        noMessageEle[0].classList.remove('display-none');
    }

}

function showMessagesItemsSent(){
    let messageItemContainer = document.getElementsByClassName('message-item-container');
    let messageItemsList = messageItemContainer[0].getElementsByClassName('message-item');
    let noMessageEle = document.getElementsByClassName('no-message');

    messageItemContainer[0].className += ' display-none';
    noMessageEle[0].classList.remove('display-none');
}

function showMessagesItemsDraft(){
    let messageItemContainer = document.getElementsByClassName('message-item-container');
    let messageItemsList = messageItemContainer[0].getElementsByClassName('message-item');
    let noMessageEle = document.getElementsByClassName('no-message');

    messageItemContainer[0].className += ' display-none';
    noMessageEle[0].classList.remove('display-none');
}

function showMessagesItemsTrash(){
    let messageItemContainer = document.getElementsByClassName('message-item-container');
    let messageItemsList = messageItemContainer[0].getElementsByClassName('message-item');
    let noMessageEle = document.getElementsByClassName('no-message');

    messageItemContainer[0].className += ' display-none';
    noMessageEle[0].classList.remove('display-none');
}