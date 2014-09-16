---
layout: default
---

<div id="main" class="clearfix">
  <ul class="artical-list">
    {% for post in site.posts %}
      <li>
        <h1 class="entry-title">
          <a href="{{ post.url}}">{{ post.title }}</a>
        </h1>
        <div class="post-meta">
          <span class="post-date">{{post.date | date:"%Y-%m-%d"}}</span>
          <span class="comment-link"><a href="#">丨Comment</a></span>
        </div>
        <div class="title-desc">{{ post.description }}</div>
      </li>
      {% endfor %}
  </ul>
</div>