import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="sbc__blog section__padding" id="blog">
    <div className="sbc__blog-heading">
      <h1 className="gradient__text">Meet our Dedicated Team</h1>
    </div>
    <div className="sbc__blog-container">
      <div className="sbc__blog-container_groupA">
        <Article imgUrl={blog01} position="Founder" name="Robyn Wilson" text=""/>
      </div>
      <div className="sbc__blog-container_groupB">
        <Article imgUrl={blog01} position="Director" name="Melanie Ackerman" />
        <Article imgUrl={blog01} position="Lead BCBA" name="Becky Gillies" />
        <Article imgUrl={blog01} position="BCBA" name="Kelley Cohron" />
        <Article imgUrl={blog01} position="BCBA" name="Kylie Wallingford" />
      </div>
    </div>
  </div>
);

export default Blog;
