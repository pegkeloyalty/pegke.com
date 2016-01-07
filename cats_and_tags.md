---
title: Categories and Tags
layout: page
permalink: /blog/categories
---

<div class="ui stackable two column grid">
	<div class="column">
		{% include blog-cats.html %}
	</div>
	<div class="column">
		<h3>Tags</h3>
		<div class="tagss">
			{% for tag in site.tags %}
			<a href="/tag/{{tag[0] | downcase | replace:' ', '-' }}/" class="ui label blue" title{{tag[0]}} >{{tag[0]}} <span class="detail">({{tag[1].size}})</span></a>
			{% endfor %}
		</div>
	</div>
</div>
