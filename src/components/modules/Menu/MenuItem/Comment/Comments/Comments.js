import React from 'react';

import s from '../Comment.module.css';

const Comments = ({ onDeleteComment, comments }) => (
  <div>
    <p>Комментарии:</p>
    <ul className={s.comment}>
      {comments.map(c => (
        <li key={c.id}>
          <p>{c.text}</p>
          <p>Оценка:{c.rating}</p>
          <button
            type="button"
            value={c.id}
            onClick={({ target }) => onDeleteComment(target.value)}
          >
            Удалить комментарий
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Comments;
