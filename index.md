---
layout: default
---

<div id="main" class="clearfix">
  <ul class="artical-list">
    {% for post in site.posts %}
      <li>
        <h1>
          <a href="{{ post.url}}">{{ post.title }}</a>
        </h1>
        <div class="post-meta">
          <span class="post-date">{{post.date | date_to_string}}</span>
          <span class="comment-link"><a href="#">Comment</a></span>
        </div>
        <div class="title-desc">{{ post.description }}</div>
      </li>
      {% endfor %}
  </ul>
</div>