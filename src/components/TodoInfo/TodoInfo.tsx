import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article
    className={classNames(
      'TodoInfo',
      { 'TodoInfo--completed': todo.completed === true },
    )}
  >
    <h2 className={classNames('TodoInfo__title')}>{todo.title}</h2>
    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </article>
);
