import Dispatcher from '../Dispatcher';

export function setActiveLang(lang){
  Dispatcher.dispatch({
    type: 'SET_ACTIVE_LANG',
    lang: lang
  });
}

export function setActiveItemNumber(itemNumber){
  Dispatcher.dispatch({
    type: 'SET_ACTIVE_ITEM_NUMBER',
    itemNumber: itemNumber
  })
}
