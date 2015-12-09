---
layout: page
title:  "faq"
date:   2015-11-01 09:23:04 +0530
type: page
permalink: /faq/
---

<div class="ui two column padded grid">
  <div class="column">
    <div class="ui styled fluid accordion">
      {% for post in site.posts limit:8 %}
        {% if post.type == 'faq' %}
          <div class="active title">
            <i class="dropdown icon"></i>
            {{ post.title }}
          </div>
          <div class="active content">
            <p>{{ post.content }}</p>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <div class="column">
    <p></p>
  </div>
</div>
