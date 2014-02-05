SocialShare
===========
jQuery plugin


SocialShare is ideal choice for start to create custom social share buttons and share counters.

### Simple example for generate share links:


```javascript
$('.share').ShareLink({
    title: 'My great post', // title for share message
    text: 'text of my great post', // text for share message
    image: 'http://my-site-url.com/images/funny-cats.png', // optional image for share message (not for all networks)
    url: 'http://my-site-url.com/my-article.html', // link on shared page
    class_prefix: 's_' // optional class prefix for share elements (buttons or links or everything), default: 's_'
})
```

### Simple example for create share counters:


```javascript
$('.counter').ShareCounter({
    url: 'http://my-site-url.com/my-article.html', // url for which you want show like counter
    class_prefix: 'c_' // optional class prefix for counter elements, default: 'c_'
})
```

#### [Example in action](http://htmlpreview.github.io/?https://raw.github.com/AyumuKasuga/SocialShare/master/example.html)


### Supported social networks


#### for now supported networks for like counters:

<table>
    <tr>
        <th>network</th>
        <th>link</th>
        <th>class with default prefix (c_)</th>
    </tr>
    <tr>
        <td>Twitter</td>
        <td>https://twitter.com/</td>
        <td>c_twitter</td>
    </tr>
    <tr>
        <td>Facebook</td>
        <td>https://www.facebook.com/</td>
        <td>c_facebook</td>
    </tr>
    <tr>
        <td>Vkontakte</td>
        <td>https://vk.com/</td>
        <td>c_vk</td>
    </tr>
    <tr>
        <td>Мой Мир</td>
        <td>http://my.mail.ru/</td>
        <td>c_myworld</td>
    </tr>
    <tr>
        <td>Linkedin</td>
        <td>http://www.linkedin.com/</td>
        <td>c_linkedin</td>
    </tr>
    <tr>
        <td>Одноклассники</td>
        <td>http://odnoklassniki.ru/</td>
        <td>c_odnoklassniki</td>
    </tr>
    <tr>
        <td>Pinterest</td>
        <td>http://www.pinterest.com/</td>
        <td>c_pinterest</td>
    </tr>
</table>

#### for generate share link address:

<table>
    <tr>
        <th>network</th>
        <th>link</th>
        <th>class with default prefix (s_)</th>
    </tr>
    <tr>
        <td>Twitter</td>
        <td>https://twitter.com/</td>
        <td>s_twitter</td>
    </tr>
    <tr>
        <td>Facebook</td>
        <td>https://www.facebook.com/</td>
        <td>s_facebook</td>
    </tr>
    <tr>
        <td>Vkontakte</td>
        <td>https://vk.com/</td>
        <td>s_vk</td>
    </tr>
    <tr>
        <td>Мой Мир</td>
        <td>http://my.mail.ru/</td>
        <td>s_myworld</td>
    </tr>
    <tr>
        <td>Linkedin</td>
        <td>http://www.linkedin.com/</td>
        <td>s_linkedin</td>
    </tr>
    <tr>
        <td>Одноклассники</td>
        <td>http://odnoklassniki.ru/</td>
        <td>s_odnoklassniki</td>
    </tr>
    <tr>
        <td>Pinterest</td>
        <td>http://www.pinterest.com/</td>
        <td>s_pinterest</td>
    </tr>
    <tr>
        <td>Tumblr</td>
        <td>https://www.tumblr.com/</td>
        <td>s_tumblr</td>
    </tr>
    <tr>
        <td>Blogger</td>
        <td>https://www.blogger.com</td>
        <td>s_blogger</td>
    </tr>
    <tr>
        <td>Delicious</td>
        <td>https://delicious.com/</td>
        <td>s_delicious</td>
    </tr>
    <tr>
        <td>Google +</td>
        <td>https://plus.google.com/</td>
        <td>s_plus</td>
    </tr>
    <tr>
        <td>Digg</td>
        <td>http://digg.com/</td>
        <td>s_digg</td>
    </tr>
    <tr>
        <td>Reddit</td>
        <td>http://www.reddit.com/</td>
        <td>s_reddit</td>
    </tr>
    <tr>
        <td>Stumbleupon</td>
        <td>http://www.stumbleupon.com/</td>
        <td>s_stumbleupon</td>
    </tr>
    <tr>
        <td>Pocket</td>
        <td>http://getpocket.com/</td>
        <td>s_pocket</td>
    </tr>
    <tr>
        <td>Chiq</td>
        <td>http://www.chiq.com/</td>
        <td>s_chiq</td>
    </tr>
    <tr>
        <td>Qrifier</td>
        <td>http://www.qrifier.com/</td>
        <td>s_qrifier</td>
    </tr>
    <tr>
        <td>Qrsrc</td>
        <td>http://www.qrsrc.com/</td>
        <td>s_qrsrc</td>
    </tr>
    <tr>
        <td>Qzone</td>
        <td>http://qzone.qq.com/</td>
        <td>s_s_qzone</td>
    </tr>
    <tr>
        <td>Tulinq</td>
        <td>http://www.tulinq.com/</td>
        <td>s_tulinq</td>
    </tr>
    <tr>
        <td>Mister Wong</td>
        <td>http://www.mister-wong.com/</td>
        <td>s_misterwong</td>
    </tr>
</table>


### Roadmap
* More social services
* Individual parameters popup window on each service
* Custom parameters for popup window
