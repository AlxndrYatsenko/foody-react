import React, { lazy, Suspense } from 'react';

import s from './Comment.module.css';
import Spiner from '../../../../Spiner/Spiner';

const CommentsContainer = lazy(() =>
  import('./Comments/CommentsContainer' /* webpackChunkName: "delivery-page" */),
);

const CommentView = ({
  comment,
  onTextareaChange,
  onSelectChange,
  onSubmit,
  selected,
  stars,
  isOpenComments,
  onToggleComments,
}) => (
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
    {isOpenComments && (
      <Suspense fallback={<Spiner />}>
        <CommentsContainer />
      </Suspense>
    )}
  </div>
);
export default CommentView;
