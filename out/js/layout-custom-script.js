 $(document).ready(function () {
  var icon1 = "https://478h5m1yrfsa3bbe262u7muv-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/nav-icon-secure.svg";
  var icon2 = "https://478h5m1yrfsa3bbe262u7muv-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/nav-icon-monitor-2.svg";
  var icon3 = "https://478h5m1yrfsa3bbe262u7muv-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/nav-icon-platform.svg";
  var icon4 = "https://478h5m1yrfsa3bbe262u7muv-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/icon-opensource.svg";
  var icon5 = "https://478h5m1yrfsa3bbe262u7muv-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Group.png";
  var icon6 = "https://478h5m1yrfsa3bbe262u7muv-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Documentation.png";

  $(".cat-panel-1").closest("a").prepend("<img src='" + icon1 + "'></img>");
  $(".cat-panel-2").closest("a").prepend("<img src='" + icon2 + "'></img>");
  $(".cat-panel-3").closest("a").prepend("<img src='" + icon3 + "'></img>");
  $(".cat-panel-4").closest("a").prepend("<img src='" + icon4 + "'></img>");
  $(".cat-panel-5").closest("a").prepend("<img src='" + icon5 + "'></img>");
  $(".cat-panel-6").closest("a").prepend("<img src='" + icon6 + "'></img>");
  $(".publication-icon").remove();
  $('.portal-header h1').text('Welcome to the Sysdig Documentation Hub!');
  $( "<p class='intro-para'> This is our brand-new Doc site. You may encounter some broken links and missing images. We are actively working on it. <br />In the meantime, explore the site and let us know what you think. Send your feedback to <a>doc-feedback@sysdig.com</a>.</p>" ).insertAfter('.portal-search')
 });
