import React, { lazy, Suspense } from 'react';

import s from './Comment.module.css';
import Spiner from '../../../../Spiner/Spiner';

const CommentsContainer = lazy(() =>
  import('./Comments/CommentsContainer' /* webpackChunkName: "comments" */),
);

const CommentView = ({
  comment,
  onTextareaChange,
  onSelectChange,
  onSubmit,
  rating,
  stars,
  isOpenComments,
  onToggleComments,
}) => (
  <div>
    <form onSubmit={onSubmit}>
      <p>Добавьте свой комментарий:</p>
      <textarea
        className={s.comment}
        onChange={onTextareaChange}
        value={comment}
        required
      />
      <br />
      <select className={s.rating} onChange={onSelectChange} value={rating}>
        <option key="выбрать">выбрать</option>
        {stars.map(o => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <button className={s.saveBtn} type="submit" onClick={e => onSubmit(e)}>
        Добавить комментарий
      </button>
    </form>
    <button type="button" onClick={onToggleComments}>
      {isOpenComments ? 'Скрыть комментарии' : 'Показать комментарии'}
    </button>
    {isOpenComments && (
      <Suspense fallback={<Spiner />}>
        <CommentsContainer />
      </Suspense>
    )}
  </div>
);
export default CommentView;
