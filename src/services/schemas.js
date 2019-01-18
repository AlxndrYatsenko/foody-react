import { schema } from 'normalizr'; // const denormalized = xxx.json;

// const commentsSchema = new schema.Entity('comments');
const itemsSchema = new schema.Entity('items', {
  // comments: [commentsSchema],
});

export default itemsSchema;
// const normalazedItems = denormalized => normalize(denormalized, [itemsSchema]);

// export default normalazedItems;
