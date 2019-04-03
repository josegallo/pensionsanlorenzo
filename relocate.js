<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

<script>
$(document).ready(function(){
  //change the whatsapp Icon on Lateral Header
  var whatsappIconHome = $(".fusion-social-links-header .fusion-social-networks-wrapper a.custom.fusion-social-network-icon.fusion-tooltip.fusion-custom.fusion-icon-custom:nth-child(3) img");
    whatsappIconHome.attr("src", "http://pensionsanlorenzo.es/wp-content/uploads/2016/08/Wassap-logo.png");

  var whatsappIconHomeLink = $(".fusion-social-links-header .fusion-social-networks-wrapper a.custom.fusion-social-network-icon.fusion-tooltip.fusion-custom.fusion-icon-custom:nth-child(3)");
    whatsappIconHomeLink.attr("target", "");

  //change the Tripadvisor Icon on Lateral Header
  var tripadvisorIconHome = $(".fusion-social-links-header .fusion-social-networks-wrapper a.custom.fusion-social-network-icon.fusion-tooltip.fusion-custom.fusion-icon-custom:nth-child(4) img");
    tripadvisorIconHome.attr("src", "http://pensionsanlorenzo.es/wp-content/uploads/2016/07/icon-tripadvisor-white.png");

  //change the whatsapp Icon on Footer
  var whatsappIconFooter = $(" .fusion-social-links-footer a.custom.fusion-social-network-icon.fusion-tooltip.fusion-custom.fusion-icon-custom:nth-child(3)");
  	whatsappIconFooter.attr("target", "");
  
   //change aditonal data on related project on what to do
  var relatedProjectsData = $(".fusion-carousel-meta span ");
    relatedProjectsData.css("display", "none");    	
})

</script>