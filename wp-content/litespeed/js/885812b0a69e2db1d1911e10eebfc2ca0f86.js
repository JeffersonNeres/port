"use strict";function agrLoad(){var a=document.getElementsByClassName("agr-recaptcha-wrapper");for(let e=0;e<a.length;e++)grecaptcha.render(a.item(e),{sitekey:agrRecaptcha.site_key})}function agrV3(){grecaptcha.execute(agrRecaptcha.site_key,{action:"validate_recaptchav3"}).then(function(a){document.querySelectorAll(".g-recaptcha-response").forEach(function(e){e.value=a})})}
;