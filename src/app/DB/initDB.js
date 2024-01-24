import DB from './dbClass'
import questions from './source.json'
export const data = (new DB(questions)).getAll()