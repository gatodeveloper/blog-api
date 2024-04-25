import { Schema, Document, model } from 'mongoose';
import slugify from 'slugify';


export interface IArticle extends Document{
  title: string;
  slug: string;
  description: string;  
  content?: string
  image?: string;
}

const articleSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String },
  description: { type: String },
  content: { type: String },
  image: { type: String }
})
articleSchema.set('timestamps', true)

articleSchema.pre('save', async function(this: IArticle, next){
  if (!this.isModified('title')) {
    return next();
  }
  this.slug = slugify(this.title, { lower: true });
  next()
})


export default model<IArticle>('Articles', articleSchema);