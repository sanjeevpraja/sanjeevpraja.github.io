#GulpInit
> Copyright: Sanjeev  
> Author: Sanjeev  
> Vesrion: 1.0  



## Dependency:  ##

*	Twitter Bootstrap: 3.3.4
*	jquery:  1.9
*	lesshat:  3.0.2 - collection of less mixins
*	animate-css
*	waypoints
*	stellar



--------------------------

## Theme-setup process: ##

1.	Git pull
2.	Install prepros [https://prepros.io/](https://prepros.io/)
3.	Open file prepros.cfg change "name": "TO_PROKJECTNAME"
3.	Add project to prepose rename project if needed
4.	Finish
 

--------------------------
--------------------------


**Folder structure**

	Themefolder{  
		/app  
			-/assets
				-/css 	/*All Complied css from build/less*/  
					bootstrap.css
					theme.css
				-/font (font that is doenloaded from https://icomoon.io)  
					-/bootrap
						-/font
					-/wk-icon
				-/img 
				-/js
			-/vendor  
				-/animate-css
				-/boostrap  
				-/jquery    
				-/jquery-ui
				-/stellar
				-/typed.js
				-/waypoints
			index.html 	/*compiled from /build/kit/index.kit*/
		/build  
			-/font /*contain icon.ai to make wk-icon font*/  
			-/js  
				home.js
				theme.js
				typed.js
			-/kit  
				-/partial *(contains partial kit files that are to be importedt) * 
					_footer.kit
					_header.kit  
					_nav.kit
					_navmenu.kit
					_rate.kit
				index.kit
			-/less  
				-/base  
					_base.less
					_header.less  
					_footer.less  
				-/globals    
				-/layouts  
					-dark.less  
					-light.less  
				-/modules  
					_button.less  
					_client.less
					_feature-pro.less
					_home-search.less
					_mid-feature.less
					_section.less
					_social.less
					_typo.less  
					_waypoint.less
				-/partials   
					_home.less
				-/skins  
					_default.less 
				-/states  
					_responsive-md.less 
					_responsive-sm.less   
				-/vendors  
					_jquery-ui-custom.less
					_variables.less
				bootstrap.less  
				theme.less  
			-/lib /*contains depended less lib to generate theme.less*/
				-/bootstrap
				-/lesshat
		/.bowerrc  
		/.bower.json  
		/.prepros.cfg  
		/Readme.md  
	}  



***How different layout is imported on theme.less***  
This will create two version one under .wk-light and other under .wk-dark class. Whichever layout is desired the body is giver the particular layout class.

	@import "../lib/lesshat/build/lesshat.less";
	@import "vendors/_variables.less";
	@import "modules/_typo.less";
	
	
	
	.wk-light{
	@import "layouts/_light.less";
	@import "skins/_default.less";
	@import "base/_base.less";
	
	@import "base/_header.less";
	@import "base/_footer.less";
	
	@import "modules/_button.less";
	@import "modules/_section.less";
	@import "modules/_social.less";
	@import "modules/_client.less";
	@import "modules/_waypoint.less";
	
	@import "partials/_home.less";
	@import "modules/_home-search.less";
	@import "modules/_mid-feature.less";
	@import "modules/_feature-pro.less";
	
	@import "states/_responsive-md.less";
	@import "states/_responsive-sm.less";
	}
	
	
	// .wk-dark{
	// @import "layouts/_light.less";
	// @import (multiple) "base/_component.less";
	// @import (multiple) "states/_responsive.less";
	// }


(multiple) enables to import multiple times  

---------------------

##Typography
Main setting for typography located at /build/less/modules/_typo.less

	/*****************Typography********************/
	@import url(http://fonts.googleapis.com/css?family=Montserrat:400,700);
	@import url(http://fonts.googleapis.com/css?family=Raleway:400,600,700,900,800,300,200,500);
	
	
	@head-font: 'Montserrat', sans-serif;
	@body-font: 'Raleway', sans-serif;	
	//@style-font: 'Pacifico', cursive;
	
	@nav-font: @head-font;	
	
	@font-size-base: 16px;
	
	@font-size-h1:            floor((@font-size-base * 2.6)); // ~36px
	@font-size-h2:            floor((@font-size-base * 2.15)); // ~30px
	@font-size-h3:            ceil((@font-size-base * 1.7)); // ~24px
	@font-size-h4:            ceil((@font-size-base * 1.25)); // ~18px
	@font-size-h5:            @font-size-base;
	@font-size-h6:            ceil((@font-size-base * 0.85)); // ~12px
	
	body{
		font-family: @body-font;
		font-size: @font-size-base;
	}



Two typeface are used
h1-h6, nav : @head-font
body: @body-font  
*16px is base font size and throughout the site em is used respective to this base font-size;*

##Layout
Folder location /build/less/layouts/
Default layout: _light.less
Other Option: _dark.less
	
	/*light*/
	@body-bg: #f8f8f8;
	@body-contrast: contrast(@body-bg);
	
	//@font-color: @body-contrast;
	@font-color: #444;
	
	
	@green: #2ECB71;
	@blue: #3498db;
	@red: #e74c3c;
	@yellow: #f0ad4e;


##Skins
Folder location /base/less/skins/

Only _default.less is imported on theme.less.  
Other than default for eg. green.less is not partial less file, so compiled version green.css must be included on html to override the default skin.

	@base-color: #3a3b3c; //black
	@base-contrast: contrast(@base-color);
	
	//@brand-color: @base-contrast;
	@brand-color: #ffffff;
	@brand-contrast: contrast(@brand-color);
	
	@brand-hover: saturate(@brand-color, 50%);


	
The skin consist of two basic color scheme.  
1. base-color  
2. brand-color
	
-	if brand color is not defined then it is assume it will take the @base contrast color


##Responsive

##For screen smaller than 768px(small)
Find less file _responsive-sm.less

	@width-sm: @grid-float-breakpoint;
Above varibale defined on _base.less

Class .wk-hide-sm is set to hide block in small screen. 
 
	.wk-hide-sm{
		display: none;
	}

##For screen smaller than 992px(medium)
Find less file _responsive-md.less

	@width-md: @screen-md;  



--------------------------------


##Javascript

The location for .js files is /build/js/ eg.

	home.js
	theme.js
	typed.js

theme.js contain all the theme related javascript initialization  and other js file should be included as per need at the end of html files, eg from index.kit



	<!-- Current Page js -->
	<!-- stellar - parallax -->
	<script type="text/javascript" src="vendor/stellar/jquery.stellar.min.js"></script>
	<!-- waypoint -->
	<script type="text/javascript" src="vendor/waypoints/lib/jquery.waypoints.min.js"></script>
	<script type="text/javascript" src="assets/js/home.min.js"></script>
	
	<!-- typejs -->
	<script type="text/javascript" src="vendor/typed.js/dist/typed.min.js"></script>
	<script type="text/javascript" src="assets/js/typed.min.js"></script>



Below <!-- Current Page js -->
Contains only page specific scripts.

The theme js in included in all pages and could be found at bottom of footer.js

-------------------------------

##Images
The location for the image asset is /app/assets/img/  
.png and .jpg format are used for the image as per need.

non optimized image are at location build/img/

--------------------------------

## Use of font-icon: ##

Downloaded custom font in added to folder /app/assets/font/

1.	Find the icon.ai on folder /build/font, open the file in illustrator
2. 	You will find 64X64 px artboard that are arranged to 6 artboard per row   
	- From main menu of illustrator click view/show grid or use shortcut ctrl+'
	- Make sure your rule is on and the grid is on every 8 pixel and there is 2 cell gap ie (16 pixel) between any two artboard
3. Add any icon custom designed or download(only vector icon single color-black) at the end.
4. Export it to individual svg by "save as" menu from illustrator and see use artboard option.
5. On https://icomoon.io create new project or open existing one.
6. Import entire set or selected svg icons from the illustrator on iconmoon project.
7. Download the fonticon
	- Remember to check the preferences before doenloading for proper name of font and class that will be used
8. Extact downloaded font icon and save it to /app/font/ folder 
	- Include the style.css from the /app/assets/font/ on html before you use it. 

@font-face is defined on _base.less, so it could be used from anywhere.

	/*icon font wkfonts*/
	@font-face{
	  font-family: 'wkfont';
	  src:url('../fonts/wkfont.eot?ncg89');
	  src:url('../fonts/wkfont.eot?#iefixncg89') format('embedded-opentype'),
	  url('../fonts/wkfont.woff?ncg89') format('woff'),
	  url('../fonts/wkfont.ttf?ncg89') format('truetype'),
	  url('../fonts/wkfont.svg?ncg89#wkfont') format('svg');
	  font-weight: normal;
	  font-style: normal;
	}


Or app/font/wkfont/style.css is included on all pages so icon can be simply used as

	<span class="wk-icon wk-icon_sign"></span>

**Available icons**

	icon_bungee
	icon_cycle
	icon_hunt
	icon_mount2
	icon_scooba
	icon_surf
	icon_trek2
	icon_dropdown
	icon_compare
	icon_heart
	icon_eye
	icon_faq
	icon_note
	icon_setting
	icon_fax
	icon_mail
	icon_skype
	icon_add
	icon_delete
	icon_minus
	icon_plus
	icon_climb
	icon_downhill
	icon_parasuit
	icon_raft2
	icon_swissknife
	icon_tent
	icon_all
	icon_arrleft
	icon_arrright
	icon_bino
	icon_boot
	icon_facebook
	icon_google
	icon_grid
	icon_list
	icon_mark
	icon_mount
	icon_phone
	icon_raft
	icon_rss
	icon_search
	icon_sign
	icon_star
	icon_trek
	icon_twitter

-------------------------------  


##Use of .kit extention for html generation.

**Folder location /base/kit/**

All .kit files is placed in kit folder in root folder. ie /kit  
/kit folder consist of kit files and partial folder. Partial folder consist of .kit files with portion of html code that could be reused in different pages via import and are not mean to generate html independently.

The folder for html to be generated is at root.  
eg. for importing partial .kit files

	<!-- @import "partial/_header.kit" -->

this code at very top of page import the html content of _header.kit

*Note: Check the generated .html code as frequently as possible to maintain code standard*


##Parallax Effect

**Used stellar.js for parallax effect**

For parallax effect stellar.js is used, Refer to http://markdalgleish.com/projects/stellar.js/ for use.