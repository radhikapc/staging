 $(document).ready(function () {
  var icon1 = "https://478h5m1yrfsa3bbe262u7muv-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/nav-icon-secure.svg";
  var icon2 = "https://478h5m1yrfsa3bbe262u7muv-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/nav-icon-monitor-2.svg";
  var icon3 = "https://478h5m1yrfsa3bbe262u7muv-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/nav-icon-platform.svg";

  $(".cat-panel-1").closest("a").prepend("<img src='" + icon1 + "'></img>");
  $(".cat-panel-2").closest("a").prepend("<img src='" + icon2 + "'></img>");
  $(".cat-panel-3").closest("a").prepend("<img src='" + icon3 + "'></img>");
  $(".publication-icon").remove();
  $('.portal-header h1').text('Welcome to the Sysdig Documentation Hub!');
  $( "<p class='intro-para'> Continue your Sysdig journey with Sysdig Documentation. </p>" ).insertAfter('.portal-search');
 });
