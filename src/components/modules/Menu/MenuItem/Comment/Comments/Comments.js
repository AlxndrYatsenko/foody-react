import React from 'react';

import s from '../Comment.module.css';

const Comments = ({ onDeleteComment, comments }) => (
  <div>
    {comments.length > 0 ? (
      <>
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
      </>
    ) : (
      'Ваш комментарий будет первым'
    )}
  </div>
);

export default Comments;
