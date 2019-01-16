import React, { lazy, Suspense } from 'react';

import s from './Comment.module.css';
import Spiner from '../../../Spiner/Spiner';

const CommentsContainer = lazy(() =>
  import('./Comments/CommentsContainer' /* webpackChunkName: "comments" */),
);

const CommentView = ({
  stars,
  comment,
  rating,
  isOpenComments,
  onTextareaChange,
  onSelectChange,
  onSubmit,
  onToggleShowComments,
  error,
}) => (
  <>
    {error && <p>{error.text}</p>}
    <div>
      <form className={s.form} onSubmit={onSubmit}>
        <p>Добавьте свой комментарий:</p>
        <textarea
          className={s.comment}
          onChange={onTextareaChange}
          value={comment}
          required
        />
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
      <button className={s.show} type="button" onClick={onToggleShowComments}>
        {isOpenComments ? 'Скрыть комментарии' : 'Показать комментарии'}
      </button>
      {isOpenComments && (
        <Suspense fallback={<Spiner />}>
          <CommentsContainer />
        </Suspense>
      )}
    </div>
  </>
);
export default CommentView;
