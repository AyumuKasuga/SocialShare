/*
    SocialShare - jQuery plugin
*/
(function ($) {
    $.fn.ShareLink = function(options){
        var defaults = {
            title: '',
            text: '',
            image: '',
            url: window.location.href,
            class_prefix: 's_'
        };

        var options = $.extend({}, defaults, options);

        var class_prefix_length = options.class_prefix.length;

        var templates = {
            twitter: 'https://twitter.com/intent/tweet?url={url}&text={text}',
            pinterest: 'https://www.pinterest.com/pin/create/button/?media={image}&url={url}&description={text}',
            facebook: 'https://www.facebook.com/sharer.php?s=100&p[title]={title}&p[summary]={text}&p[url]={url}&p[images][0]={image}',
            vk: 'https://vkontakte.ru/share.php?url={url}&title={title}&description={text}&image={image}&noparse=true',
            linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={text}&source={url}',
            myworld: 'https://connect.mail.ru/share?url={url}&title={title}&description={text}&imageurl={image}',
            odnoklassniki: 'http://odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl={url}&st.comments={text}',
            tumblr: 'https://tumblr.com/share?s=&v=3&t={title}&u={url}',
            blogger: 'https://blogger.com/blog-this.g?t={text}&n={title}&u={url}',
            delicious: 'https://delicious.com/save?url={url}&title={title}',
            plus: 'https://plus.google.com/share?url={url}',
            digg: 'https://digg.com/submit?url={url}&title={title}',
            reddit: 'http://reddit.com/submit?url={url}&title={title}',
            stumbleupon: 'https://www.stumbleupon.com/submit?url={url}&title={title}',
            pocket: 'https://getpocket.com/edit?url={url}&title={title}',
            chiq: 'http://www.chiq.com/create/bookmarklet?u={url}&i={image}&d={title}&c={url}',
            qrifier: 'http://qrifier.com/q?inc=qr&type=url&size=350&string={url}',
            qrsrc: 'http://www.qrsrc.com/default.aspx?shareurl={url}',
            qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}',
            tulinq: 'http://www.tulinq.com/enviar?url={url}&title={title}',
            misterwong: 'http://www.mister-wong.com/index.php?action=addurl&bm_url={url}&bm_description={title}&bm_notice='
        }

        function link(network){
            var url = templates[network];
            url = url.replace('{url}', encodeURIComponent(options.url));
            url = url.replace('{title}', encodeURIComponent(options.title));
            url = url.replace('{text}', encodeURIComponent(options.text));
            url = url.replace('{image}', encodeURIComponent(options.image));
            return url;
        }

        this.each(function(i, elem){
            var classlist = elem.classList;
            for(var i = 0; i < classlist.length; i++){
                var cls = classlist[i];
                if(cls.substr(0, class_prefix_length) == options.class_prefix && templates[cls.substr(class_prefix_length)]){
                    var final_link = link(cls.substr(class_prefix_length));
                    $(elem).attr('href', final_link).click(function(){
                        var screen_width = screen.width;
                        var screen_height = screen.height;
                        var popup_width = screen_width - (screen_width*0.2);
                        var popup_height = screen_height - (screen_height*0.2);
                        var left = (screen_width/2)-(popup_width/2);
                        var top = (screen_height/2)-(popup_height/2);
                        var parameters = 'toolbar=0,status=0,width=' + popup_width + ',height=' + popup_height + ',top=' + top + ',left=' + left;
                        return window.open($(this).attr('href'), '', parameters) && false;
                    });
                }
            }
        });
    }

    $.fn.ShareCounter = function(options){
        var defaults = {
            url: window.location.href,
            class_prefix: 'c_'
        };

        var options = $.extend({}, defaults, options);

        var class_prefix_length = options.class_prefix.length

        var social = {
            'twitter': twitter,
            'facebook': facebook,
            'vk': vk,
            'myworld': myworld,
            'linkedin': linkedin,
            'odnoklassniki': odnoklassniki,
            'pinterest': pinterest
        }

        this.each(function(i, elem){
            var classlist = elem.classList;
            for(var i = 0; i < classlist.length; i++){
                var cls = classlist[i];
                if(cls.substr(0, class_prefix_length) == options.class_prefix && social[cls.substr(class_prefix_length)]){
                    social[cls.substr(class_prefix_length)](options.url, function(count){
                        $(elem).text(count)
                    })
                }
            }
        });

        function twitter(url, callback){
            $.ajax({
                type : 'GET',
                dataType : 'jsonp',
                url : 'https://cdn.api.twitter.com/1/urls/count.json',
                data : {'url': url}
            })
            .done(function(data){callback(data.count);})
            .fail(function(data){callback(0);})
        }

        function facebook(url, callback){
            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                url: 'https://api.facebook.com/restserver.php',
                data: {'method': 'links.getStats', 'urls': [url], 'format': 'json'}
            })
            .done(function (data){callback(data[0].share_count)})
            .fail(function(){callback(0);})
        }

        function vk(url, callback){
            VK = {
                Share: {
                    count: function(idx, value){
                        callback(value);
                    }
                }
            }

            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                url: 'https://vk.com/share.php',
                data: {'act': 'count', 'index': 0, 'url': url}
            })
            .fail(function(data, status){
                if(status != 'parsererror'){
                    callback(0);
                }
            })
        }

        function myworld(url, callback){
            var results = [];
            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                url: 'https://connect.mail.ru/share_count',
                jsonp: 'func',
                data: {'url_list': url, 'callback': '1'}
            })
            .done(function(data){callback(data[url].shares)})
            .fail(function(data){callback(0)})
        }

        function linkedin(url, callback){
            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                url: 'https://www.linkedin.com/countserv/count/share',
                data: {'url': url, 'format': 'jsonp'}
            })
            .done(function(data){callback(data.count)})
            .fail(function(){callback(0)})
        }

        function odnoklassniki(url, callback){
            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                url: 'http://odnoklassniki.ru/dk',
                jsonp: 'cb',
                data: {'st.cmd': 'shareData', 'ref': url}
            })
            .done(function(data){callback(parseInt(data.count))})
            .fail(function(){callback(0)})
        }

        function pinterest(url, callback){
            $.ajax({
                type: 'GET',
                dataType: 'jsonp',
                url: 'https://api.pinterest.com/v1/urls/count.json',
                data: {'url': url}
            })
            .done(function(data){callback(data.count)})
            .fail(function(){callback(0)})
        }

    }

})(jQuery);
