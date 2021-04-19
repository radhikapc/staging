 $(document).ready(function () {
   // Install
   var icon1 = "https://sysdig.com/wp-content/uploads/icon-Integration.svg";
   // Administration
   var icon2 = "https://sysdig.com/wp-content/uploads/icon-secure-devops.svg";
   // monitor
   var icon3 = "https://sysdig.com/wp-content/uploads/icon-maximize-availability.svg";
   // secure
   var icon4 = "https://sysdig.com/wp-content/uploads/icon-security.svg";
   // developer tools
   var icon5 = "https://sysdig.com/wp-content/uploads/icon-contribute.svg";
   // release notes
   var icon6 = "https://sysdig.com/wp-content/uploads/icon-posts.svg";
   // Administration -onprem
   var icon7 = "https://sysdig.com/wp-content/uploads/icon-secure-devops.svg";

  $(".cat-panel-1").closest("a").prepend("<img src='" + icon1 + "'></img>");
  $(".cat-panel-2").closest("a").prepend("<img src='" + icon2 + "'></img>");
  $(".cat-panel-3").closest("a").prepend("<img src='" + icon3 + "'></img>");
  $(".cat-panel-4").closest("a").prepend("<img src='" + icon4 + "'></img>");
  $(".cat-panel-5").closest("a").prepend("<img src='" + icon5 + "'></img>");
  $(".cat-panel-6").closest("a").prepend("<img src='" + icon6 + "'></img>");
  $(".cat-panel-7").closest("a").prepend("<img src='" + icon7 + "'></img>");
  $(".publication-icon").remove();
  $('.portal-header h1').text('Welcome to the Sysdig Staging Documentation Site!');
  $( "<p class='intro-para'>Explore the new sections we have added recently. We encourage you to report issues by filing JIRA Tickets.</p>" ).insertAfter('.portal-search')
  //$( "<p class='intro-para'> This is our brand-new Doc site. You may encounter some broken links and missing images. We are actively working on it. <br />In the meantime, explore the site and let us know what you think. Send your feedback to <a>doc-feedback@sysdig.com</a>.</p>" ).insertAfter('.portal-search')
 });
