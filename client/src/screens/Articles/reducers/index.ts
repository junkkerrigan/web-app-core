import { combineReducers } from 'redux';

import { reducerCreator } from 'helpers/reducer.helper';

import articles from '../containers/ArticlesGridView/reducer';
import { fetchArticles } from '../routines';

const requests = combineReducers({
  articles: reducerCreator([fetchArticles.TRIGGER])
});

export default combineReducers({ articles, requests });
