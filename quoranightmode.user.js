// ==UserScript==
// @name         Quora Night Mode
// @namespace    http://rutteric.com
// @version      0.1
// @description  change quora colors at night
// @author       David Rutter
// @match        https://*.quora.com/*
// @grant        GM_addStyle
// ==/UserScript==
/*jshint multistr: true */
(function() {
    'use strict';
    var hr = (new Date()).getHours();
    if (hr<6||hr>=21) {
        GM_addStyle('\
                    body {\
                    color:#ffffff !important;\
                    background-color:#111111 !important;\
                    }\
                    a:not(.selected) {\
                    color:#ffffff !important;\
                    }\
                    p {\
                    color:#ffffff !important;\
                    }\
                    h3 {\
                    color:#ffffff !important;\
                    }\
                    .SiteHeader {\
                    background-color:#111111 !important;\
                    }\
                    div:not(.doc.empty) {\
                    color: #ffffff !important;\
                    background-color:#111111 !important;\
                    background:#111111 !important;\
                    }\
                    .editor_toolbar {\
                    background-color:#111111 !important;\
                    }\
                    *:not(.selected) > span {\
                    color: #ffffff !important;\
                    }\
                    li {\
                    color: #ffffff !important;\
                    }\
                    .AddQuestionLookupBarButton {\
                    background-color:#111111 !important;\
                    }\
                    .save_draft {\
                    background:#111111 !important;\
                    }\
                    .ContentPageFeedStoryItem:hover {\
                    box-shadow: 0 0 5px 0 rgba(10,10,10,0.5) !important;\
                    }\
                    .ContentPageFeedStoryItem:hover .feed_item_overlay{\
                    background:rgba(50,50,50,0.5) !important;\
                    }\
                    .list_contents a.link:hover{\
                    background-color:#333333 !important;\
                    }\
                    .ViewMoreLink a {\
                    background-color:#333333 !important;\
                    }\
                    .AnswerPageViewMoreLink, .multifeed_header .modal_related_answers .view_more {\
                    background-color:#333333 !important;\
                    }\
                    .StoryItemToggleModal.read_item {\
                    background-color:#122334;\
                    }\
                    .answer_editor.on_draft_page .AnswerEditorHeader, .answer_editor.on_draft_page .form_buttons {\
                    background:#111111;\
                    }\
                    .Carousel {\
                    background-color: #111111 !important;
                    }\
                    .ActionBar .secondary_action {\
                    background:transparent !important;\
                    }\
                    .hover_menu .ObjectCard, .hover_menu .ObjectCard .ObjectCard-footer, .ObjectCard .ObjectCard-header .topic_name {\
                    background:#111111 !important;\
                    }\
                    .topic_pill .TopicName {\
                    background-color:#333333 !important;\
                    }\
                    .HoverMenu.TopicNameLink.topic_name {\
                    background-color:transparent !important;\
                    }\
                    .hover_menu .hover_menu_contents {\
                    background: #111111 !important;\
                    }\
                    .container {\
                    background-color: #111111 !important;\
                    }\
                    .Notif {\
                    color: #ffffff !important;\
                    background: #111111 !important;\
                    }\
                    .Notif:hover {\
                    background-color: #333333 !important;\
                    }\
                    .SiteHeader .NotifsHoverMenuContents .notif_dropdown_empty_state {\
                    background-color: #111111 !important;\
                    }\
                    .SiteHeader .NotifsHoverMenuContents .NotificationsClearButton {\
                    background: #111111 !important;\
                    }\
                    .edit_multifeed_link_wrapper {\
                    background: #111111 !important;\
                    }\
                    .AboveFoldAd .content_white_button, .AdPreview .content_white_button, .upper_content .content_white_button {\
                    background: #111111;\
                    }\
                    .threaded_comments {\
                    background: #111111 !important;\
                    }\
                    .more_button:hover {\
                    background: #222222 !important;\
                    }\
                    .web_page .Editor.Comment {\
                    background-color: #111111 !important;\
                    }\
                    .EditableList .nav_item_selected a, .EditableList .StaticListItem>.selected {\
                    background: #333333;\
                    }\
                    .topic_pill {\
                    background-color:#333333 !important;\
                    }\
                    .nav_item_selected a.topic_name {\
                    background-color:#333333 !important;\
                    }\
                    .nav_item_link.hover {\
                    background-color:#333333 !important;\
                    }\
                    .selected:not(.nav_item_link) {\
                    background-color:#333333 !important;\
                    }\
                    .selected div {\
                    background-color:#333333 !important;\
                    }\
                    .hover_menu_item:hover{\
                    background-color:#333333 !important;\
                    }\
                    .nav_item_selected:not(.nav_item_link.selected){\
                    background-color:#333333 !important;\
                    }\
                    .nav_item_link:not(.selected):hover{\
                    background-color:#333333 !important;\
                    }\
                    .view_more_link:hover {\
                    background-color:#333333 !important;\
                    }\
                    .diffdelete {\
                    background-color:#331111 !important;\
                    }\
                    .diffinsert {\
                    background-color:#113311 !important;\
                    }\
                    textarea {\
                    background-color:#111111 !important;\
                    }\
                    .show_child_link {\
                    background-color:#111111 !important;\
                    }\
                    .prompt_button {\
                    background-color:#111111 !important;\
                    }\
                    .Button {\
                    background-color:#111111 !important;\
                    }\
                    .AskQuestionButton {\
                    background-color:#111111 !important;\
                    }\
                    .container:hover {\
                    background:#333333 !important;\
                    }\
                    .hover_highlight:hover {\
                    background-color:#333333 !important;\
                    }\
                    .modal_body {\
                    background-color:#111111 !important;\
                    }\
                    .ActionBar.sticky {\
                    background:#111111 !important;\
                    }\
                    .action_button {\
                    background-color:#111111 !important;\
                    }\
                    .count {\
                    background-color:#111111 !important;\
                    }\
                    .RADToggle {\
                    background-color:#111111 !important;\
                    }\
                    .follow_button {\
                    background-color:#111111 !important;\
                    }\
                    .doc {\
                    background-color:#111111 !important;\
                    color: #ffffff !important;\
                    }\
                    .doc.empty:before {\
                    color: #555555 !important;\
                    }\
                    .section[data-type="code"] {\
                    background-color:#222222 !important;\
                    color: #ffffff !important;\
                    }\
                    .section[data-type="code"]:before {\
                    background-color:#333333 !important;\
                    color: #555555 !important;\
                    }\
                    .section:not([data-type="code"])+[data-type="code"]:after {\
                    background-color:#222222 !important;\
                    color: #ffffff !important;\
                    }\
                    .LegalNavLinks {\
                    background-color:#222222 !important;\
                    color: #ffffff !important;\
                    }\
                    ' );
    }
})();