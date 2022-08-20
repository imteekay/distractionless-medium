// Remove left and right content
const main = document.getElementsByTagName('main')[0];
const body = document.getElementsByTagName('body')[0];
const newBody = document.createElement('body');

newBody.appendChild(main);
body.replaceWith(newBody);

// Remove "More From Author" in the footer
function getAllTagsWithText(tag, text) {
  return [...document.querySelectorAll(tag)].filter((element) =>
    element.textContent.includes(text),
  );
}

function getMoreFromAuthorWrapper(tag) {
  return tag.parentElement.parentElement.parentElement.parentElement
    .parentElement.parentElement.parentElement.parentElement;
}

const anchors = getAllTagsWithText('a', 'More from');
const moreFromAnchor = anchors[0];
const moreFromAuthorWrapper = getMoreFromAuthorWrapper(moreFromAnchor);
moreFromAuthorWrapper.remove();

// Remove Footer and Header
function removeTag(tag) {
  document.getElementsByTagName(tag)[0].remove();
}

removeTag('footer');
removeTag('header');

// Remove actions: update, comment
const actions = document.getElementsByClassName('pw-multi-vote-icon')[0];
const actionsWrapper = actions.parentElement.parentElement.parentElement;
actionsWrapper.remove();
