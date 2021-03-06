import { IShortUser } from './IShortUser';

import { IRole } from '../role/IRole';
import { IArticle } from '../article';
import { INewspaper } from '../newspaper';
import { IArticleReaction } from '../article-reaction';

export interface IUser extends IShortUser {
  emailConfirmed: boolean;
  articles?: IArticle[];
  newspapers?: INewspaper[];
  articleReaction?: IArticleReaction[];
  roles: IRole[];
}
