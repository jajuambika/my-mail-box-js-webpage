var INBOX = "1";
var SENT = "2";
var DRAFT = "3";
var TRASH = "4";
var messageCount = 0;

/**
 * This function will add new email on clicking of compose button
 * @param {*} thisEle 
 */
function onClickNavMenu(thisEle){ 
    addMessagesInInbox();
}

/**
 * Inner function used by compose button
 */
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
    var isNewMail = !messageItemNewTag[0].classList.contains("display-none");

    if(isNewMail)
    {
        messageItemNewTag[0].className += ' display-none';
    }

    var previewInnerContainer = document.createElement('div');
    var messageItemTitle = document.createElement('h3');
    var messageItemDetailText = document.createElement('div');
    var deleteLink = document.createElement('a');

    messageItemTitle.innerText = messageItemTitleEle[0].innerHTML;
    messageItemDetailText.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    deleteLink.className = 'delete-mail';
    deleteLink.innerHTML = "Trash mail";
    deleteLink.setAttribute("onclick", "deleteMail(this)");
    deleteLink.setAttribute("mail-item-id", messageId);

    previewInnerContainer.className = "preview-inner-container";
    previewInnerContainer.setAttribute('mail-id', messageId);
    previewInnerContainer.appendChild(messageItemTitle);
    previewInnerContainer.appendChild(messageItemDetailText);
    previewInnerContainer.appendChild(deleteLink);

    previewContainer[0].innerHTML = "";
    previewContainer[0].appendChild(previewInnerContainer);

    if(isNewMail && messageCount > 0)
    {
        messageCount--;
        if(messageCount > 0)
            messageCountDiv[0].innerText = messageCount;
        else
            messageCountDiv[0].innerHTML = "";    
    }
}

/**
 * This function will call function related to nav
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

/**
 * Function will show mail messages list related to inbox nav
 */
function showMessagesItemsInbox(){
    let messageItemContainer = document.getElementsByClassName('message-item-container');
    let messageItemsList = document.querySelectorAll('.message-item:not(.display-none)');
    let noMessageEle = document.getElementsByClassName('no-message');
    let previewInnerContainer = document.getElementsByClassName('preview-inner-container');

    if(messageItemsList.length != 0)
    {
        messageItemContainer[0].classList.remove('display-none');
        noMessageEle[0].className += ' display-none';

        if(previewInnerContainer.length > 0)
            previewInnerContainer[0].classList.remove('display-none');
    }
    else
    {
        messageItemContainer[0].className += ' display-none';
        noMessageEle[0].classList.remove('display-none');

        if(previewInnerContainer.length > 0)
            previewInnerContainer[0].className += ' display-none';
    }

}

/**
 * Function will show messages item in SENT nav
 */
function showMessagesItemsSent(){
    let messageItemContainer = document.getElementsByClassName('message-item-container');
    let noMessageEle = document.getElementsByClassName('no-message');
    let previewInnerContainer = document.getElementsByClassName('preview-inner-container');

    messageItemContainer[0].className += ' display-none';
    noMessageEle[0].classList.remove('display-none');

    if(previewInnerContainer.length > 0)
        previewInnerContainer[0].className += ' display-none';
}

/**
 * Function will show messages item in DRAFT nav
 */
function showMessagesItemsDraft(){
    let messageItemContainer = document.getElementsByClassName('message-item-container');
    let noMessageEle = document.getElementsByClassName('no-message');
    let previewInnerContainer = document.getElementsByClassName('preview-inner-container');

    messageItemContainer[0].className += ' display-none';
    noMessageEle[0].classList.remove('display-none');

    if(previewInnerContainer.length > 0)
        previewInnerContainer[0].className += ' display-none';
}

/**
 * Function will show messages item in TRASH nav
 */
function showMessagesItemsTrash(){
    let messageItemContainer = document.getElementsByClassName('message-item-container');
    let noMessageEle = document.getElementsByClassName('no-message');
    let previewInnerContainer = document.getElementsByClassName('preview-inner-container');

    messageItemContainer[0].className += ' display-none';
    noMessageEle[0].classList.remove('display-none');

    if(previewInnerContainer.length > 0)
        previewInnerContainer[0].className += ' display-none';
}

/**
 * Function will hide mail item in list and delete preview
 * @param {*} thisEle 
 */
function deleteMail(thisEle){
    var mailId = thisEle.getAttribute('mail-item-id');
    var previewContainer = document.getElementsByClassName('preview-message');
    var messageId = document.getElementById(mailId);

    let messageItemContainer = document.getElementsByClassName('message-item-container');
    let noMessageEle = document.getElementsByClassName('no-message');

    previewContainer[0].innerHTML = "";
    messageId.setAttribute("tab-id", "4");
    messageId.className += " display-none";

    let messageItemsList = document.querySelectorAll('.message-item:not(.display-none)');
    
    if(messageItemsList.length == 0)
    {
        messageItemContainer[0].className += " display-none";
        noMessageEle[0].classList.remove('display-none');
    }  
}