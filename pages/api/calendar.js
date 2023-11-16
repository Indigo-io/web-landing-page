import sgMail from "@sendgrid/mail";

export default function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email } = JSON.parse(req.body);
  const msg = {
    to: email, // Change to your recipient
    from: "exe@indigobalance.com", // Change to your verified sender
    subject: `Gracias por registrarte ${name}`,
    html: `<!doctype html>
    <html>
    <head>
    <meta charset="UTF-8">
    <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width">
    <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <!-- Use the latest (edge) version of IE rendering engine -->
    <title>EmailTemplate-Hybrid</title>
      
    <!-- The title tag shows in email notifications, like Android 4.4. -->
    
    <!-- Please use an inliner tool to convert all CSS to inline as inpage or external CSS is removed by email clients -->
    <!-- important in CSS is used to prevent the styles of currently inline CSS from overriding the ones mentioned in media queries when corresponding screen sizes are encountered -->
    
    <!-- CSS Reset -->
    <style type="text/css">
    /* What it does: Remove spaces around the email design added by some email clients. */
          /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
      font-family: "Roboto", sans-serif;
    }
    /* What it does: Stops email clients resizing small text. */
    * {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    /* What it does: Forces Outlook.com to display emails full width. */
    .ExternalClass {
      width: 100%;
    }
    /* What is does: Centers email on Android 4.4 */
    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }
    /* What it does: Stops Outlook from adding extra spacing to tables. */
    table, td {
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }
    /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
    table {
      border-spacing: 0 !important;
      border-collapse: collapse !important;
      table-layout: fixed !important;
      margin: 0 auto !important;
    }
    table table table {
      table-layout: auto;
    }
    /* What it does: Uses a better rendering method when resizing images in IE. */
    img {
      -ms-interpolation-mode: bicubic;
    }
    /* What it does: Overrides styles added when Yahoo's auto-senses a link. */
    .yshortcuts a {
      border-bottom: none !important;
    }
    /* What it does: Another work-around for iOS meddling in triggered links. */
    a[x-apple-data-detectors] {
      color: inherit !important;
    }
    </style>
    
    <!-- Progressive Enhancements -->
    <style type="text/css">
    /* What it does: Hover styles for buttons */
    .button-td, .button-a {
      transition: all 100ms ease-in;
      
    }
    .button-td:hover, .button-a:hover {
      
      border-color: #555555 !important;
    }
    
    /* Media Queries */
    @media screen and (max-width: 480px) {
    /* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
    .fluid, .fluid-centered {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
    /* And center justify these ones. */
    .fluid-centered {
      margin-left: auto !important;
      margin-right: auto !important;
    }
    /* What it does: Forces table cells into full-width rows. */
    .stack-column, .stack-column-center {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
      direction: ltr !important;
    }
    /* And center justify these ones. */
    .stack-column-center {
      text-align: center !important;
    }
    /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
    .center-on-narrow {
      text-align: center !important;
      display: block !important;
      margin-left: auto !important;
      margin-right: auto !important;
      float: none !important;
    }
    table.center-on-narrow {
      display: inline-block !important;
    }
    }
      
    /*=========================
      Icons
     ================= */
    
    /* footer social icons */
    ul.social-network {
      list-style: none;
      display: inline;
      margin-left:0 !important;
      padding: 0;
    }
    ul.social-network li {
      display: inline;
      margin: 0 5px;
    }
    
    
    /* footer social icons */
    .social-network a.icoRss:hover {
      background-color: #F56505;
    }
    .social-network a.icoFacebook:hover {
      background-color:#3B5998;
    }
    .social-network a.icoTwitter:hover {
      background-color:#33ccff;
    }
    .social-network a.icoGoogle:hover {
      background-color:#BD3518;
    }
    .social-network a.icoVimeo:hover {
      background-color:#0590B8;
    }
    .social-network a.icoLinkedin:hover {
      background-color:none;
    }
    .social-network a.icoRss:hover i, .social-network a.icoFacebook:hover i, .social-network a.icoTwitter:hover i,
    .social-network a.icoGoogle:hover i, .social-network a.icoVimeo:hover i, .social-network a.icoLinkedin:hover i {
      color:#fff;
    }
    a.socialIcon:hover, .socialHoverClass {
      color:#44BCDD;
    }
    
    .social-circle li a {
      display:inline-block;
      position:relative;
      margin:0 auto 0 auto;
      -moz-border-radius:50%;
      -webkit-border-radius:50%;
      border-radius:50%;
      text-align:center;
      width: 50px;
      height: 50px;
      font-size:20px;
    }
    .social-circle li i {
      margin:0;
      line-height:50px;
      text-align: center;
    }
    
    .social-circle li a:hover i, .triggeredHover {
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -ms--transform: rotate(360deg);
      transform: rotate(360deg);
      -webkit-transition: all 0.2s;
      -moz-transition: all 0.2s;
      -o-transition: all 0.2s;
      -ms-transition: all 0.2s;
      transition: all 0.2s;
    }
    .social-circle i {
      color: #fff;
      -webkit-transition: all 0.8s;
      -moz-transition: all 0.8s;
      -o-transition: all 0.8s;
      -ms-transition: all 0.8s;
      transition: all 0.8s;
    }
    
    </style>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    
      <!--Pulling Awesome Font -->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
      
    </head>
    <body width="100%" bgcolor="#e0e0e0" style="margin: 0;" yahoo="yahoo">
    <table cellpadding="0" cellspacing="0" border="0" height="100%" width="100%" bgcolor="#e0e0e0" style="border-collapse:collapse;">
      <tr>
        <td><center style="width: 100%;">
            
            <!-- Visually Hidden Preheader Text : BEGIN -->
            <div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family: "Roboto";"> (Optional) This text will appear in the inbox preview, but not the email body. </div>
            <!-- Visually Hidden Preheader Text : END -->
            
            <div style="max-width: 680px;"> 
              <!--[if (gte mso 9)|(IE)]>
                <table cellspacing="0" cellpadding="0" border="0" width="680" align="center">
                <tr>
                <td>
                <![endif]--> 
              
              <!-- Email Header : BEGIN -->
              <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 680px;">
                <tr>
                  <td style="padding: 20px 0; text-align: center"><webversion style="color:#444444; font-size:12px; text-decoration:underline; font-weight: light;">Ver version on line</webversion></td>
                </tr>
              </table>
              <!-- Email Header : END --> 
              
              <!-- Email Body : BEGIN -->
              <table cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" width="100%" style="max-width: 680px;">
                
                <!-- Hero Image, Flush : BEGIN -->
                <tr>
                  <td class="full-width-image" align="center"><img src="https://indigo-assets-dev-ccfb477.s3.amazonaws.com/images/indigo-banner-email-template.jpeg" width="680" alt="alt_text" border="0"  style="width: 100%; max-width: 680px; height: auto;"></td>
                </tr>
                <!-- Hero Image, Flush : END --> 
                
                <!-- 1 Column Text : BEGIN -->
                <tr>
                  <td><table cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 40px; text-align: center; font-size: 18px; mso-height-rule: exactly; line-height: 26px; color: #555555;"> Hola <b>${name}</b>
                         <p style="font-size: 24px;">¡Gracias por completar el formulario de INDIGO!</p>
    
                         Ya diste tu primer paso para mejorar tu calidad de vida.<br>
    
                          Nos gustaría realizar una entrevista con vos para poder conocerte más y armar en conjunto con el panel de expertos, el mejor programa basado en tus objetivos y motivaciones.
    
                          Te vamos a estar contactando por mail o whatsapp para continuar este cambio que ya empezó.
    
                          <br>
                <br>
                          
                      </tr>
                    </table></td>
                </tr>
                <!-- 1 Column Text : BEGIN --> 
                
                <!-- Background Image with Text : BEGIN -->
                <tr>
                  <td bgcolor="#584BB1" valign="middle" style="text-align: center; background-position: center center !important; background-size: cover !important;"><!--[if gte mso 9]>
                            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:680px;height:175px; background-position: center center !important;">
                            <v:fill type="tile" src="assets/Hybrid/Image_680x230.png" color="#222222" />
                            <v:textbox inset="0,0,0,0">
                            <![endif]-->
                    
                    <div> 
                      <!--[if mso]>
                                <table border="0" cellspacing="0" cellpadding="0" align="center" width="500">
                                <tr>
                                <td align="center" valign="top" width="500">
                                <![endif]-->
                      <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="max-width:500px; margin: auto;">
                        <tr>
                          <td valign="middle" style="text-align: center; padding: 40px 20px; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #ffffff;">   En caso que no puedas, contestanos este mail con alguna otra opción de contacto.
                            ¡Esperamos tu respuesta!</td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                                </td>
                                </tr>
                                </table>
                                <![endif]--> 
                    </div>
                    
                    <!--[if gte mso 9]>
                            </v:textbox>
                            </v:rect>
                            <![endif]--></td>
                </tr>
                <!-- Background Image with Text : END --> 
                
      
       
         
                
              </table>
              <!-- Email Body : END --> 
              
              <!-- Email Footer : BEGIN -->
              <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 680px;">
                <tr>
                  <td style="padding: 40px 10px;width: 100%;font-size: 12px; font-family: sans-serif; mso-height-rule: exactly; line-height:18px; text-align: center; color: #888888;">
                    <br>
                    <br>©Indigo Balance 2021.Todos los derechos reservados. <br>
                    <span class="mobile-link--footer"><a style="text-decoration: none; font-family:'Roboto', sans-serif; font-size:14px; color: #666666;" href="https://www.getindigo.com/" >www.getindigo.com</a></span> 
              <div class="col-md-12">
                <ul class="social-network">
                  <li><a href="https://www.instagram.com/indigo.balance/" class="" title=""><img style="width: 35px;" src="https://indigo-assets-dev-ccfb477.s3.amazonaws.com/images/ig_icon.png" width="42" alt="alt_text" border="0"  style="width: 100%; max-width: 42px; height: auto;"></a></li>
                  <li><a href="https://www.linkedin.com/company/indigo-balance/" class="" title="Linkedin"><img style="width: 35px;" src="https://indigo-assets-dev-ccfb477.s3.amazonaws.com/images/in_icon.png" width="48" alt="alt_text" border="0"  style="width: 100%; max-width: 48px; height: auto;"></a></li>
                </ul>				
              </div>
              
              <br>
                    <br>
                    
                </tr>
              </table>
              <!-- Email Footer : END --> 
              
              <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]--> 
            </div>
          </center></td>
      </tr>
    </table>
    </body>
    </html>    
    `,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.json({ ok: true });
    })
    .catch((error) => {
      res.json({ ok: false, error });
    });
}
