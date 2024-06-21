import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { Model } from 'mongoose';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {

  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async create(createArticleDto:CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel({
      ...createArticleDto
    });
    return createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    const article = await this.articleModel.findById(id).exec();
    if(!article) {
      throw new NotFoundException('Article not found');
    }
    return article;
  }

  async update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article> {
    const updatedArticle = await this.articleModel.findByIdAndUpdate(id, updateArticleDto, { new: true }).exec();

    if(!updatedArticle) {
      throw new NotFoundException('Article not found');
    } 
    return updatedArticle;
  }

  async remove(id: string): Promise<void> {
    const deletedArticle = await this.articleModel.findByIdAndDelete(id).exec();
    if(!deletedArticle) {
      throw new NotFoundException('Article not found');
    }
  }
}
