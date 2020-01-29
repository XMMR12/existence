## Preview

![](screenshot.png)

## Background
This Jekyll theme was created to replace a theme I had previously created for Wordpress. Using the Bootstrap 4 framework, it is responsive and ready for mobile devices. It will work flawlessly on Google Chrome, Firefox, Opera, Safari, and Internet Explorer 11 (if you have to use that).

One of the goals I had in mind for this theme was to emulate a Wordpress blog. This theme uses the Jekyll Paginate plugin so you can choose how many blog posts to display on each page, and a simple next / previous button is displayed at the bottom of each page. The blog excerpt, seperated with a <!--more--> tag, will display the Read More button. Each post will contain the date, blog author, title, and tags. Both tags and categories can be used.

One of the challenges with static HTML websites is the lack of dynamic content, such as a comments form. However, static sites can work around this in many ways, giving the perception that the site is, indeed, dynamic such as Wordpress. While there are third-party commenting systems and add-ons available, many of them do not respect the privacy of website visitors as they gather, track, and profile user identities. One alternative is to use a serverless / functions infrastructure, however this would require additional setup and is not as simple to implement.

The solution this theme has adopted is the ability to embed a Twitter tweet for comments. Simply add the Tweet ID, which is part of the Twitter URL for a tweet, and it will display at the bottom of the blog post with a Reply on Twitter button. If not Tweet ID is added to a blog post, it simply states that comments are disabled.

The Existence theme also adopts an easily customizable navigation menu at the top of the page, with options for a dropdown menu. Social media icons can be added easily, for all popular social media platforms, displaying the icons in the sidebar.

There is also an RSS feed, another important feature for any blogger.

I hope you enjoy the Existence theme. It has been the result of many late nights and drinking way too much coffee.

### Privacy Engineering
For those that know me or follow me on [@rayheffer](https://twitter.com/rayheffer), you'll know that I am obsessed with privacy. I believe any application development should adopt a good privacy-minded framework, from from the start. Security is one aspect of that, it doesn't complete the puzzle. Applications, whether web-based, mobile, or otherwise, are often developed to gather telemetry, statistics, usage, and personally identifiable information such as names and email from sign-up forms, IP addresses, browser information, and tracking cookies. As for the latter, many websites use Google analytics which also adopts tracking cookies through embedded JavaScript and cookies.

As I write this, Wordpress has [294 known vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-2337/product_id-4096/Wordpress-Wordpress.html), and that doesn't include the myriad of vulnerable plugins often required to customize Wordpress. Vulnerabilities with Wordpress plugins are considered to be the most likely attack vector of Wordpress sites being compromised. In fact this seems to be constantly mentioned in the [news](https://thehackernews.com/search/label/Wordpress%20hacking), and I am sure this will continue.

Furthermore, when self-hosting a Wordpress blog on a virtual server, the administrative overhead of keeping it patched (OS, kernel, modules, etc.) and secure can be quite burdensome. In 2017 I [published](https://www.rayheffer.com/building-secure-wordpress-server-lamp-centos-7-selinux/) a lengthy blog post of building a secure server for Wordpress based on the LAMP stack. While that was great fun and still has it's place, especially for organizations that need to maintain Wordpress, I strongly believe static HTML sites are the best option for hobbyists, bloggers, and technical entheusiastcs.

In the end I decided to start over, and created this theme for Jekyll. 

## Features
* Privacy-first
* Top-menu, front page sidebar (default) layout, and full-page (minimal) layout.
* Blog post focused, with posted date, author name, front page excerpts with read more button
* Commenting: Twitter integration with toggle on/off by simply entering a Tweet ID for each post. If no Tweet ID is entered, it displays "Comments are closed for this post."
* Tags feature. Add one or more tags to blog posts, and easily add a page listing all posts for that tag.
* Build using Bootstrap 4: Built to support the latest, stable releases of all major browsers and platforms
* Responsive design, works on mobile devices, with collapsing navigation, including dropdown menus and active page highlighting
* Pages: Easily add pages (E.g. About Me) or pages containing blog posts.
* Footer - Copyright and Privacy Policy

## Usage

`_config.yml`
```
title: [The title of your site]
heading: [Main heading for site, displayed at the top]
subheading: [Italic sub-heading]
description: [Description of the site, for metatag]
```


`_data\default.yml'

```
brand:
  name: [Your Name, displayed on left of menu]

nav: [Menu Structure]
  - title: About
    url: '/about/'
    sublinks:
      - title: About Me
        url: '/about/'
      - title: Privacy Policy
        url: '/privacy/'   
  - title: Page 1
    url: '/page1/'
  - title: Page 2
    url: '/page2/'

menu-text: Menu [Displays text in collapsed form]

copyright: [Copyright text for footer]

social-buttons: [Used Font-Awesome to generate icons]
  - icon: fab fa-twitter
    url: 'https://<twitter-url>' 
  - icon: fab fa-github
    url: 'https://<github-url>'
  - icon: fab fa-linkedin
    url: 'https://<linkedin-url>'
  - icon: fas fa-rss
    url: '/feed.xml'
    
quicklinks: [Displayed in footer]
  - title: Privacy Policy
    url: '/privacy/'
```

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

