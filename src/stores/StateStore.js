import { EventEmitter } from 'events';
import Dispatcher from '../Dispatcher';

class  StateStore extends EventEmitter{
  constructor(){
    super()
    this.langOptions = {
      activeLanguage: 'en',
      langList: [
        {
          name: 'Español',
          code: 'es'
        },
        {
          name: 'Inglés',
          code: 'en'
        }
      ]
    }

    this.activeItemNumber = '';
  }

// Item number options

  getActiveItemNumber(){
    return this.activeItemNumber;
  }

  setActiveItemNumber(itemNumber){
    this.activeItemNumber = itemNumber;
    this.emit('item-number-changed');
  }

// Language Options
  getLangOptions(){
    return this.langOptions;
  }

  getActiveLanguage(){
    return this.langOptions.activeLanguage;
  }

  setActiveLanguage(lang){
    this.langOptions.activeLanguage = lang;
    this.emit('change');
  }



  handleActions(action){
    switch(action.type){
      case 'SET_ACTIVE_LANG':{
        this.setActiveLanguage(action.lang);
        break;
      }
      case 'SET_ACTIVE_ITEM_NUMBER':{
        this.setActiveItemNumber(action.itemNumber);
        break;
      }
      default:{

      }
    }
  }
}

const stateStore = new StateStore();
Dispatcher.register(stateStore.handleActions.bind(stateStore));
export default stateStore;
