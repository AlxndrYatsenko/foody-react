import React from 'react';

import CommentsContainer from './Comments/CommentsContainer';

import s from './Comment.module.css';

const CommentView = ({
  comment,
  // comments,
  // onDeleteComment,
  onTextareaChange,
  onSelectChange,
  onSubmit,
  selected,
  stars,
  isOpenComments,
  onToggleComments,
}) => (
  // const isAvailableCommets = Array.isArray(comments) && comments.length > 0;

  <div>
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
    <button type="button" onClick={onToggleComments}>
      {isOpenComments ? 'Скрыть комментарии' : 'Показать комментарии'}
    </button>
    {isOpenComments && <CommentsContainer />}
  </div>
);
export default CommentView;
