import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/Events.css'

const Events = () => {

    const navigate = useNavigate();

    return (
<div>
            <article class="profile">
	<div class="profile-image">
		<img src="https://assets.codepen.io/285131/neongirl.jpg" />
	</div>
	<h2 class="profile-username">Elena Zoldado</h2>
	<small class="profile-user-handle">@elena_zoldado</small>
	<div class="profile-actions">
		<button class="btn btn--primary">Follow</button>
		<button class="btn btn--icon">
			<i class="ph-export"></i>
		</button>
		<button class="btn btn--icon">
			<i class="ph-dots-three-outline-fill"></i>
		</button>
	</div>
	<div class="profile-links">
		<a href="#" class="link link--icon">
			<i class="ph-twitter-logo"></i>
		</a>
		<a href="#" class="link link--icon">
			<i class="ph-facebook-logo"></i>
		</a>
		<a href="#" class="link link--icon">
			<i class="ph-instagram-logo"></i>
		</a>
	</div>
  </article>
</div>
    )
}

export default Events