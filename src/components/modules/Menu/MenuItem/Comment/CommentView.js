import React from 'react';

import s from './Comment.module.css';

const CommentView = ({
  comment,
  comments,
  onDeleteComment,
  onTextareaChange,
  onSelectChange,
  onSubmit,
  selected,
  stars,
}) => {
  const isAvailableCommets = Array.isArray(comments) && comments.length > 0;

  return (
    <div>
      {isAvailableCommets && (
        <div>
          <p>Комментарии:</p>
          <ul className={s.comment}>
            {comments.map(c => (
              <li key={c.date}>
                <p>{c.comment}</p>
                <p>Оценка:{c.rating}</p>
                <button
                  type="button"
                  value={c.date}
                  onClick={({ target }) => onDeleteComment(target.value)}
                >
                  Удалить комментарий
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <form>
        <p>Добавьте свой комментарий:</p>
        <textarea
          className={s.comment}
          onChange={onTextareaChange}
          value={comment}
          required
        />
        <br />
        <select className={s.rating} onChange={onSelectChange} value={selected}>
          <option key="выбрать">выбрать</option>
          {stars.map(o => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <button className={s.saveBtn} type="submit" onClick={onSubmit}>
          Добавить комментарий
        </button>
      </form>
    </div>
  );
};

export default CommentView;
